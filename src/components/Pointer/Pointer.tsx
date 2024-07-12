import { RefObject, useEffect, useRef } from "react";
import classes from "./Pointer.module.css";
import { transform } from "../../utils/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

interface IPointerProps {
  isTargetHovered: boolean;
  targetRef: RefObject<HTMLDivElement>;
}
export const Pointer = ({ targetRef, isTargetHovered }: IPointerProps) => {
  const x = useRef<((value: number) => void) | null>(null);
  const y = useRef<((value: number) => void) | null>(null);

  const pointerRef = useRef<HTMLDivElement>(null);
  const POINTER_SIZE = isTargetHovered ? 60 : 14;

  function getTargetRef() {
    const targetElement = targetRef.current as HTMLDivElement;
    const { left, top, height, width } = targetElement.getBoundingClientRect();
    return {
      x: left + width / 2,
      y: top + height / 2,
      height,
      width,
    };
  }

  const { contextSafe } = useGSAP(
    () => {
      if (!pointerRef.current) return;
      (x.current = gsap.quickTo(pointerRef.current, "x", {
        duration: 0.6,
        ease: "expo",
      })),
        (y.current = gsap.quickTo(pointerRef.current, "y", {
          duration: 0.6,
          ease: "expo",
        }));
    },
    { scope: pointerRef },
  );

  const onMouseMove = contextSafe((e: MouseEvent) => {
    if (!x.current || !y.current) return;
    let scaleX = 1;
    let scaleY = 1;
    let angle = 0;

    if (isTargetHovered) {
      const { x: burgerX, y: burgerY, width, height } = getTargetRef();
      const distanceDiff = { x: e.clientX - burgerX, y: e.clientY - burgerY };
      angle = Math.atan2(distanceDiff.y, distanceDiff.x);
      const absDistance = Math.max(
        Math.abs(distanceDiff.x),
        Math.abs(distanceDiff.y),
      );
      scaleX = transform(absDistance, [0, height / 2], [1, 1.2]);
      scaleY = transform(absDistance, [0, width / 2], [1, 0.8]);
      x.current(burgerX - POINTER_SIZE / 2 + distanceDiff.x * 0.1);
      y.current(burgerY - POINTER_SIZE / 2 + distanceDiff.y * 0.1);
    } else {
      x.current(e.clientX - POINTER_SIZE / 2);
      y.current(e.clientY - POINTER_SIZE / 2);
    }
    gsap.to(pointerRef.current, {
      scaleX,
      scaleY,
      rotation: `${angle}rad`,
      width: POINTER_SIZE,
      height: POINTER_SIZE,
      duration: 0.6,
      ease: "expo",
    });
  });

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isTargetHovered]);

  return <div ref={pointerRef} className={classes.pointer} />;
};
