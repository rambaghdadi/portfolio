import { BrandGithub, BrandLinkedin, Mail } from "tabler-icons-react"
import classes from "./Footer.module.css"

export default function Footer(props) {
	return (
		<footer className={classes.footer}>
			<div className={classes.main}>
				<div className={classes.text}>
					<p>Ram Baghdadi</p>
					<p>London, United Kingdom</p>
				</div>

				<div className={classes.logos}>
					<a rel="noreferrer" href="mailto:ram_baghdadi@hotmail.com">
						<Mail size={30} fill="black" stroke="white" />
					</a>
					<a
						rel="noreferrer"
						target="_blank"
						href="https://github.com/rambaghdadi"
					>
						<BrandGithub size={30} fill="black" stroke="white" />
					</a>
					<a
						rel="noreferrer"
						target="_blank"
						href="https://uk.linkedin.com/in/rambaghdadi"
					>
						<BrandLinkedin size={30} fill="black" stroke="white" />
					</a>
				</div>
			</div>
		</footer>
	)
}
