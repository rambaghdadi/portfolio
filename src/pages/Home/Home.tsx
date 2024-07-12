import { useGSAP } from "@gsap/react";
import classes from "./Home.module.css";
import { useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { HomeSVGCurve } from "./components/SVGCurve/SVGCurve";
import { Header } from "../../components/Header/Header";
import { Carousel } from "./components/Carousel/Carousel";
import { slides } from "../../lib/projects";
import { ProjectInfo } from "./components/ProjectInfo/ProjectInfo";
import { Pointer } from "../../components/Pointer/Pointer";
import { Footer } from "../../components/Footer/Footer";
import { About } from "../About/About";
import { Contact } from "../About/components/Contact";
import { AboutMe } from "../About/components/AboutMe";
import { Tech } from "../About/components/Tech";
gsap.registerPlugin(CustomEase, useGSAP);

const animationDelay = 2.6;

export const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const xRef = useRef<HTMLDivElement>(null);

  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTargetHovered, setIsTargetHovered] = useState(false);

  useGSAP(
    () => {
      if (window.innerWidth > 850) {
        gsap.set(mainRef.current, { xPercent: 120 });
        gsap.to(mainRef.current, {
          xPercent: 0,
          ease: CustomEase.create("custom", "0.76,0,0.24,1"),
          duration: 2,
          delay: animationDelay,
        });
      }
    },
    { scope: mainRef },
  );

  const currentSlideInfo = slides[currentSlide];
  return (
    <>
      <Pointer
        {...{ isTargetHovered, targetRef: isAboutOpen ? xRef : aboutRef }}
      />
      <main ref={mainRef} className={classes.main}>
        <HomeSVGCurve animationDelay={animationDelay} />
        <div ref={homeRef} className={classes.container}>
          <Header
            {...{
              onTargetClick: setIsAboutOpen,
              setIsTargetHovered,
              ref: aboutRef,
            }}
          />
          <div className={classes.slideNumber}>
            <p>{`${currentSlide + 1} - ${slides.length}`}</p>
          </div>
          <div className={classes.slideInfo}>
            <div className={classes.mobileAbout}>
              <Contact />
              <AboutMe />
              <Tech />
            </div>
            <ProjectInfo
              name={currentSlideInfo.title}
              description={currentSlideInfo.main}
              link={currentSlideInfo.link}
            />
          </div>
          <Footer />
        </div>
        <Carousel
          {...{ currentSlide, slides }}
          onSlideChange={(index) => setCurrentSlide(index)}
        />
      </main>
      <About
        {...{ setIsAboutOpen, isAboutOpen, setIsTargetHovered, ref: xRef }}
      />
    </>
  );
};
