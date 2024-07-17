import classes from "../About.module.css";

export const Contact = () => {
  return (
    <div className={classes.contact}>
      <p>Let's Talk</p>
      <p
        style={{ cursor: "pointer" }}
        // @ts-ignore
        onClick={() => (window.location = "mailto:ram-web.dev")}
      >
        hello@ram-web.dev
      </p>
    </div>
  );
};
