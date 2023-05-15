import socials from "../../../lib/Links"
import classes from "./Footer.module.css"

export default function Footer() {
  const iconParams = {
    size: 30,
    fill: "black",
    stroke: "white",
  }

  return (
    <footer className={classes.footer}>
      <div className={classes.main}>
        <div className={classes.text}>
          <p>Ram Baghdadi</p>
          <p>London, United Kingdom</p>
        </div>

        <div className={classes.logos}>
          {socials(iconParams).map((social) => (
            <a
              key={social.name}
              rel="noreferrer"
              href={social.href}
              target={social.name === "Mail" ? undefined : "_blank"}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
