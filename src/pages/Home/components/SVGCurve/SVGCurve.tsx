import classes from "./HomeSVGCurve.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { interpolatePath } from "../../../../utils/utils";
import { CustomEase } from "gsap/CustomEase";

export const HomeSVGCurve = ({
  animationDelay,
}: {
  animationDelay: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

  useGSAP(
    () => {
      gsap.registerPlugin(CustomEase);
      gsap.to(
        { progress: 0 },
        {
          progress: 1,
          duration: 2,
          ease: CustomEase.create("custom", "0.76,0,0.24,1"),
          delay: animationDelay + 0.4,
          onUpdate: function () {
            if (!pathRef || !pathRef.current) return;
            const progress = this.targets()[0].progress;
            const newPath = interpolatePath(initialPath, targetPath, progress);
            pathRef?.current.setAttribute("d", newPath);
          },
        },
      );
    },
    { scope: svgRef },
  );

  return (
    <svg ref={svgRef} className={classes.svgCurve}>
      <path ref={pathRef} className="path" d={initialPath}></path>
    </svg>
  );
};
