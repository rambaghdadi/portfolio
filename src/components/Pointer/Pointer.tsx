import { RefObject, useRef } from "react";
import classes from "./Pointer.module.css";
import { transform } from "../../utils/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface IPointerProps {
  x: number;
  y: number;
  isBurgerHovered: boolean;
  burgerRef: RefObject<HTMLDivElement>;
}
export const Pointer = ({
  x,
  y,
  burgerRef,
  isBurgerHovered,
}: IPointerProps) => {
  gsap.registerPlugin(useGSAP);
  const pointerRef = useRef<HTMLDivElement>(null);
  const POINTER_SIZE = isBurgerHovered ? 70 : 14;

  function getBurgerCoords() {
    const burgerElement = burgerRef.current as HTMLDivElement;
    const { left, top, height, width } = burgerElement.getBoundingClientRect();
    return {
      x: left + width / 2,
      y: top + height / 2,
      height,
      width,
    };
  }

  function animatePointer(
    xP: number,
    yP: number,
    scaleX: number,
    scaleY: number,
    angle: number,
  ) {
    gsap.to(pointerRef.current, {
      x: xP,
      y: yP,
      scaleX,
      scaleY,
      rotation: `${angle}rad`,
      width: POINTER_SIZE,
      height: POINTER_SIZE,
      duration: 0.5,
      ease: "expo",
    });
  }

  useGSAP(
    () => {
      let xP = x - POINTER_SIZE / 2;
      let yP = y - POINTER_SIZE / 2;
      let scaleX = 1;
      let scaleY = 1;
      let angle = 0;

      if (isBurgerHovered) {
        const { x: burgerX, y: burgerY, width, height } = getBurgerCoords();
        const distanceDiff = { x: x - burgerX, y: y - burgerY };
        angle = Math.atan2(distanceDiff.y, distanceDiff.x);
        const absDistance = Math.max(
          Math.abs(distanceDiff.x),
          Math.abs(distanceDiff.y),
        );
        scaleX = transform(absDistance, [0, height / 2], [1, 1.2]);
        scaleY = transform(absDistance, [0, width / 2], [1, 0.8]);
        xP = burgerX - POINTER_SIZE / 2 + distanceDiff.x * 0.1;
        yP = burgerY - POINTER_SIZE / 2 + distanceDiff.y * 0.1;
      }
      animatePointer(xP, yP, scaleX, scaleY, angle);
    },
    { scope: pointerRef, dependencies: [x, y] },
  );

  return <div ref={pointerRef} className={classes.pointer} />;
};
