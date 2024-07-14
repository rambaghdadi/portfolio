import { useGSAP } from "@gsap/react";
import classes from "./SVGCurve.module.css";
import gsap from "gsap";
import { useRef } from "react";
import { CustomEase } from "gsap/CustomEase";
import { interpolate } from "flubber";
gsap.registerPlugin(CustomEase, useGSAP);

export const AboutSVGCurve = ({ isAboutOpen }: { isAboutOpen: boolean }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const width = window.innerWidth;
  const initialPath = `M0 0 H${width} V0 H0 Z`;
  const targetPath = `M0 0 H0 Q${width / 2} 200 ${width} 0 V0 H0 Z`;

  const animatePath = (fromPath: string, toPath: string, duration: number) => {
    return gsap.to(
      { progress: 0 },
      {
        progress: 1,
        duration: duration,
        ease: CustomEase.create("custom", "0.76,0,0.24,1"),
        onUpdate: function () {
          if (!pathRef.current) return;
          const progress = this.targets()[0].progress;
          const newPath = interpolatePath(fromPath, toPath, progress);
          pathRef.current.setAttribute("d", newPath);
        },
      },
    );
  };

  useGSAP(
    () => {
      if (isAboutOpen) {
        const tl = gsap.timeline();
        tl.add(animatePath(initialPath, targetPath, 0.6));
        tl.add(animatePath(targetPath, initialPath, 0.4));
      } else {
        animatePath(targetPath, initialPath, 1).delay(0.4);
      }
    },
    { scope: svgRef, dependencies: [isAboutOpen] },
  );

  return (
    <svg ref={svgRef} className={classes.svgCurve}>
      <path ref={pathRef} d={initialPath}></path>
    </svg>
  );
};

export const interpolatePath = (
  initialPath: string,
  targetPath: string,
  progress: number,
) => {
  const interpolator = interpolate(initialPath, targetPath);
  return interpolator(progress);
};
