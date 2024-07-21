import { IconX } from "../../assets/Icons/IconX";
import { CustomEase } from "gsap/CustomEase";
import gsap from "gsap";
import classes from "./About.module.css";
import { useGSAP } from "@gsap/react";
import { forwardRef, useRef } from "react";
import { Contact } from "./components/Contact";
import { AboutMe } from "./components/AboutMe";
import { Tech } from "./components/Tech";
import { PointerTarget } from "../../components/Header/Header";
import { AboutSVGCurve } from "./components/SVGCurve/SVGCurve";
gsap.registerPlugin(CustomEase, useGSAP);

interface IAboutProps {
  isAboutOpen: boolean;
  setIsAboutOpen: (arg: boolean) => void;
  setIsTargetHovered: (arg: boolean) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const About = forwardRef<HTMLDivElement, IAboutProps>((props, ref) => {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (props.isAboutOpen) {
        gsap.fromTo(
          mainRef.current,
          {
            yPercent: -100,
          },
          {
            yPercent: 0,
            ease: CustomEase.create("custom", "0.76,0,0.24,1"),
            duration: 1,
            visibility: "visible",
            pointerEvents: "all",
          },
        );
        gsap.fromTo(
          ".anim-main",
          {
            opacity: 0,
            yPercent: 50,
          },
          {
            delay: 0.5,
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: CustomEase.create("custom", "0.76,0,0.24,1"),
          },
        );
      } else {
        gsap.to(mainRef.current, {
          yPercent: -100,
          delay: 0.4,
          ease: CustomEase.create("custom", "0.76,0,0.24,1"),
          duration: 1,
          pointerEvents: "none",
          onComplete: () => {
            props.setIsAboutOpen(false);
          },
        });
        gsap.to(".anim-main", {
          opacity: 0,
          yPercent: 50,
          duration: 0.4,
        });
      }
    },
    { scope: mainRef, dependencies: [props.isAboutOpen] },
  );

  return (
    <section ref={mainRef} className={classes.section}>
      <div className={classes.exitIcon}>
        <PointerTarget
          ref={ref}
          setIsTargetHovered={props.setIsTargetHovered}
          onTargetClick={() => props.setIsAboutOpen(false)}
        >
          <IconX />
        </PointerTarget>
      </div>
      <main className="anim-main">
        <Contact
          {...{
            onMouseEnter: props.onMouseEnter,
            onMouseLeave: props.onMouseLeave,
          }}
        />
        <AboutMe />
        <Tech />
      </main>
      <AboutSVGCurve {...{ isAboutOpen: props.isAboutOpen }} />
    </section>
  );
});
