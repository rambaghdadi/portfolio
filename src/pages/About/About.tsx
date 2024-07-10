import { IconX } from "../../assets/Icons/IconX";
import { CustomEase } from "gsap/CustomEase";
import gsap from "gsap";
import classes from "./About.module.css";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Contact } from "./components/Contact";
import { AboutMe } from "./components/AboutMe";
import { Tech } from "./components/Tech";
gsap.registerPlugin(CustomEase, useGSAP);

interface IAboutProps {
  isAboutOpen: boolean;
  setIsAboutOpen: (arg: boolean) => void;
}

export const About = ({ isAboutOpen, setIsAboutOpen }: IAboutProps) => {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isAboutOpen) {
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
            setIsAboutOpen(false);
          },
        });
        gsap.to(".anim-main", {
          opacity: 0,
          yPercent: 50,
          duration: 0.4,
        });
      }
    },
    { scope: mainRef, dependencies: [isAboutOpen] },
  );

  return (
    <section ref={mainRef} className={classes.section}>
      <div className={classes.exitIcon} onClick={() => setIsAboutOpen(false)}>
        <IconX />
      </div>
      <main className="anim-main">
        <Contact />
        <AboutMe />
        <Tech />
      </main>
    </section>
  );
};
