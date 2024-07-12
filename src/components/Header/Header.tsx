import { MagenticChild } from "../MagneticChild";
import classes from "./Header.module.css";
import { forwardRef, LegacyRef, ReactNode } from "react";

interface IHeaderProps extends Omit<IPointerTargetProps, "children"> {
  ref: LegacyRef<HTMLDivElement>;
}

export const Header = forwardRef<HTMLDivElement, IHeaderProps>((props, ref) => {
  return (
    <header className={classes.header}>
      <p>Ram Baghdadi</p>
      <PointerTarget {...props} ref={ref}>
        <p>About</p>
      </PointerTarget>
    </header>
  );
});

interface IPointerTargetProps {
  onTargetClick: (arg: boolean) => void;
  setIsTargetHovered: (arg: boolean) => void;
  children: ReactNode;
}
export const PointerTarget = forwardRef(function index(
  props: IPointerTargetProps,
  ref: LegacyRef<HTMLDivElement>,
) {
  return (
    <MagenticChild>
      <div
        onMouseEnter={() => props.setIsTargetHovered(true)}
        onMouseLeave={() => props.setIsTargetHovered(false)}
        onClick={() => props.onTargetClick(true)}
        className={classes.targetContainer}
      >
        <div className={classes.target} ref={ref} />
        {props.children}
      </div>
    </MagenticChild>
  );
});
