import { useGSAP } from "@gsap/react";
import classes from "./Intro.module.css";
import { useRef } from "react";
import gsap from "gsap";

const text = "Welcome";

export const Intro = () => {
  const nameContainerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[][]>([]);

  useGSAP(
    () => {
      if (!nameContainerRef || !nameContainerRef.current) return;
      wordsRef.current.forEach((ref) => {
        gsap.to(ref, {
          opacity: 1,
          y: 0,
          ease: "expo",
          duration: 1.5,
          delay: 1,
        });
      });

      wordsRef.current.forEach((ref) => {
        gsap.to(ref, {
          opacity: 0,
          y: -10,
          x: -1000,
          rotateY: -50,
          rotateZ: -20,
          stagger: {
            from: "random",
            amount: 0.1,
          },
          ease: "expo.out",
          duration: 2,
          delay: 3.5,
        });
      });
    },
    { scope: nameContainerRef },
  );

  function splitStringIntoWords(string: string) {
    const splitWords = string.split(" ");
    return splitWords.map((word, i) => {
      wordsRef.current[i] = [];
      return <p key={i}>{splitWordIntoLetters(word, i)}</p>;
    });
  }

  function splitWordIntoLetters(word: string, index: number) {
    return word.split("").map((letter, i) => (
      <span
        key={i}
        ref={(ref) => wordsRef.current[index].push(ref as HTMLSpanElement)}
      >
        {letter}
      </span>
    ));
  }

  return (
    <div className={classes.container}>
      <div ref={nameContainerRef}>{splitStringIntoWords(text)}</div>
    </div>
  );
};
