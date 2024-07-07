import { MagenticChild } from "../MagneticChild";
import classes from "./Header.module.css";
import { forwardRef, LegacyRef } from "react";

export const Header = forwardRef(function index(
  props: { setIsAboutOpen: (arg: boolean) => void },
  ref: LegacyRef<HTMLDivElement>,
) {
  return (
    <header className={classes.header}>
      <p>Ram Baghdadi</p>
      <MagenticChild>
        <div
          onClick={() => props.setIsAboutOpen(true)}
          className={classes.iconContainer}
        >
          <div ref={ref} />
          <p>About</p>
        </div>
      </MagenticChild>
    </header>
  );
});
