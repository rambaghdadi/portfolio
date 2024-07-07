// @ts-nocheck
import { useRef, useEffect } from "react";
import classes from "./Carousel.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface ICarouselProps {
  slides: { id: number; color: string }[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

export const Carousel = ({
  slides,
  currentSlide,
  onSlideChange,
}: ICarouselProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loop = verticalLoop(".slide", {
      repeat: -1,
      onChange: (_, index) => {
        onSlideChange(index);
      },
    });

    if (!loop) return;

    const slow = gsap.to(loop, { timeScale: 0, duration: 0.2 });
    loop.timeScale(0);

    const handleScroll = ScrollTrigger.observe({
      target: document.documentElement,
      type: "touch,wheel",
      wheelSpeed: -0.1,
      onChange: (self) => {
        loop.timeScale(
          Math.abs(self.deltaX) > Math.abs(self.deltaY)
            ? -self.deltaX
            : -self.deltaY,
        );
        slow.invalidate().restart();
      },
    });

    return () => {
      handleScroll.kill();
      loop.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className={classes.section}>
      <div ref={slidesRef} className={classes.slides}>
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            data-id={slide.id}
            className={`slide ${classes.slide}`}
          >
            <img
              style={{
                filter:
                  currentSlide !== i
                    ? "grayscale(100%) brightness(1.2) contrast(1.2)"
                    : undefined,
              }}
              src="payments.png"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

type Config = {
  onChange?: (item: HTMLElement, index: number) => void;
  repeat?: number;
  paused?: boolean;
  center?: boolean | string;
  speed?: number;
  snap?: boolean | number;
  paddingBottom?: number | string;
  enterAnimation?: (
    item: HTMLElement,
    duration: number,
    index: number,
  ) => gsap.core.Tween;
  leaveAnimation?: (
    item: HTMLElement,
    duration: number,
    index: number,
  ) => gsap.core.Tween;
  draggable?: boolean;
  reversed?: boolean;
};

function verticalLoop(
  items: string | HTMLElement[],
  config: Config,
): gsap.core.Timeline | undefined {
  let timeline: gsap.core.Timeline | undefined;
  items = gsap.utils.toArray(items) as HTMLElement[];
  config = config || {};
  const cleanupFns: (() => void)[] = [];

  gsap.context(() => {
    let onChange = config.onChange,
      lastIndex = 0,
      tl = gsap.timeline({
        repeat: config.repeat,
        onUpdate:
          onChange &&
          function () {
            let i = tl.closestIndex();
            if (lastIndex !== i) {
              lastIndex = i;
              onChange(items[i], i);
            }
          },
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () =>
          tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startY = items[0].offsetTop,
      times: number[] = [],
      heights: number[] = [],
      spaceBefore: number[] = [],
      yPercents: number[] = [],
      curIndex = 0,
      center = config.center,
      clone = (obj: { [key: string]: any }) => {
        let result: { [key: string]: any } = {},
          p: string;
        for (p in obj) {
          result[p] = obj[p];
        }
        return result;
      },
      pixelsPerSecond = (config.speed || 1) * 100,
      snap =
        config.snap === false
          ? (v: number) => v
          : gsap.utils.snap(config.snap || 1),
      timeOffset = 0,
      container =
        center === true
          ? (items[0].parentNode as HTMLElement)
          : ((gsap.utils.toArray(center)[0] ||
              items[0].parentNode) as HTMLElement),
      totalHeight: number,
      getTotalHeight = () =>
        items[length - 1].offsetTop +
        (yPercents[length - 1] / 100) * heights[length - 1] -
        startY +
        spaceBefore[0] +
        items[length - 1].offsetHeight *
          gsap.getProperty(items[length - 1], "scaleY") +
        (parseFloat(config.paddingBottom?.toString() || "0") || 0),
      populateHeights = () => {
        let b1 = container.getBoundingClientRect(),
          b2: DOMRect;
        startY = items[0].offsetTop;
        items.forEach((el, i) => {
          heights[i] = parseFloat(gsap.getProperty(el, "height", "px"));
          yPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "y", "px")) / heights[i]) * 100 +
              gsap.getProperty(el, "yPercent"),
          );
          b2 = el.getBoundingClientRect();
          spaceBefore[i] = b2.top - (i ? b1.bottom : b1.top);
          b1 = b2;
        });
        gsap.set(items, {
          yPercent: (i) => yPercents[i],
        });
        totalHeight = getTotalHeight();
      },
      timeWrap: (value: number) => number,
      populateOffsets = () => {
        timeOffset = center
          ? (tl.duration() * (container.offsetWidth / 2)) / totalHeight
          : 0;
        center &&
          times.forEach((t, i) => {
            times[i] = timeWrap(
              tl.labels["label" + i] +
                (tl.duration() * heights[i]) / 2 / totalHeight -
                timeOffset,
            );
          });
      },
      getClosest = (values: number[], value: number, wrap: number) => {
        let i = values.length,
          closest = 1e10,
          index = 0,
          d: number;
        while (i--) {
          d = Math.abs(values[i] - value);
          if (d > wrap / 2) {
            d = wrap - d;
          }
          if (d < closest) {
            closest = d;
            index = i;
          }
        }
        return index;
      },
      populateTimeline = () => {
        let i, item, curY, distanceToStart, distanceToLoop;
        tl.clear();
        for (i = 0; i < length; i++) {
          item = items[i];
          curY = (yPercents[i] / 100) * heights[i];
          distanceToStart = item.offsetTop + curY - startY + spaceBefore[0];
          distanceToLoop =
            distanceToStart + heights[i] * gsap.getProperty(item, "scaleY");
          tl.to(
            item,
            {
              yPercent: snap(((curY - distanceToLoop) / heights[i]) * 100),
              duration: distanceToLoop / pixelsPerSecond,
            },
            0,
          )
            .fromTo(
              item,
              {
                yPercent: snap(
                  ((curY - distanceToLoop + totalHeight) / heights[i]) * 100,
                ),
              },
              {
                yPercent: yPercents[i],
                duration:
                  (curY - distanceToLoop + totalHeight - curY) /
                  pixelsPerSecond,
                immediateRender: false,
              },
              distanceToLoop / pixelsPerSecond,
            )
            .add("label" + i, distanceToStart / pixelsPerSecond);
          times[i] = distanceToStart / pixelsPerSecond;
        }
        timeWrap = gsap.utils.wrap(0, tl.duration());
      },
      customAnimations = () => {
        let { enterAnimation, leaveAnimation } = config,
          eachDuration = tl.duration() / items.length;
        items.forEach((item, i) => {
          let anim = enterAnimation && enterAnimation(item, eachDuration, i),
            isAtEnd =
              anim &&
              tl.duration() -
                timeWrap(times[i] - Math.min(eachDuration, anim.duration())) <
                eachDuration - 0.05;
          anim &&
            tl.add(anim, isAtEnd ? 0 : timeWrap(times[i] - anim.duration()));
          anim = leaveAnimation && leaveAnimation(item, eachDuration, i);
          isAtEnd = times[i] === tl.duration();
          anim && anim.duration() > eachDuration && anim.duration(eachDuration);
          anim && tl.add(anim, isAtEnd ? 0 : times[i]);
        });
      },
      refresh = (deep: boolean) => {
        let progress = tl.progress();
        tl.progress(0, true);
        populateHeights();
        deep && populateTimeline();
        populateOffsets();
        customAnimations();
        deep && tl.draggable
          ? tl.time(times[curIndex], true)
          : tl.progress(progress, true);
      },
      onResize = () => refresh(true),
      proxy: HTMLElement;

    gsap.set(items, { y: 0 });
    populateHeights();
    populateTimeline();
    populateOffsets();
    customAnimations();
    const debouncedResize = debounce(onResize, 200);
    window.addEventListener("resize", debouncedResize);
    cleanupFns.push(() =>
      window.removeEventListener("resize", debouncedResize),
    );

    function toIndex(index: number, vars: gsap.TweenVars) {
      vars = clone(vars);
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length);
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      if (vars.revolutions) {
        time += tl.duration() * Math.round(vars.revolutions);
        delete vars.revolutions;
      }
      if (time < 0 || time > tl.duration()) {
        vars.modifiers = { time: timeWrap };
      }
      curIndex = newIndex;
      vars.overwrite = true;
      gsap.killTweensOf(proxy);
      return tl.tweenTo(time, vars);
    }

    tl.elements = items;
    tl.next = (vars: gsap.TweenVars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars: gsap.TweenVars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index: number, vars: gsap.TweenVars) => toIndex(index, vars);
    tl.closestIndex = (setCurrent: boolean) => {
      let index = getClosest(times, tl.time(), tl.duration());
      setCurrent && (curIndex = index);
      return index;
    };
    tl.times = times;
    tl.progress(1, true).progress(0, true);
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    tl.closestIndex(true);
    onChange && onChange(items[curIndex], curIndex);
    timeline = tl;

    cleanupFns.push(() => timeline?.kill());
  });

  return timeline;
}

function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: number;
  return (...args: any[]) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);
  };
}
