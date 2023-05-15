import Image from "next/image"
import classes from "./SiteExample.module.css"

export default function SiteExample(props) {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.text}>
          <h1>{props.title}</h1>
          <h2>{props.subTitle}</h2>
          <p>{props.main}</p>
          <p className={classes.link}>
            Visit:
            <a target="_blank" rel="noreferrer" href={props.link}>
              {props.linkName}
            </a>
          </p>
        </div>
        <div>
          <Image
            src={`/images/sites/${props.src}`}
            alt="website"
            width={300}
            height={200}
          />
        </div>
      </div>
    </section>
  )
}
