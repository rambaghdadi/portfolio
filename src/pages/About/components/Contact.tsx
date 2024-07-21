import classes from "../About.module.css";

interface IContactProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
export const Contact = ({ onMouseEnter, onMouseLeave }: IContactProps) => {
  return (
    <div className={classes.contact}>
      <p>Let's Talk</p>
      <p
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ cursor: "pointer" }}
        // @ts-ignore
        onClick={() => (window.location = "mailto:ram-web.dev")}
      >
        hello@ram-web.dev
      </p>
    </div>
  );
};
