import { BrandGithub, BrandLinkedin, Mail } from "tabler-icons-react"
import classes from "./Footer.module.css"

export default function Footer(props) {
	return (
		<footer className={classes.footer}>
			<div className={classes.main}>
				<p>Ram Baghdadi</p>
				<p>London, United Kingdom</p>
				<div className={classes.logos}>
					<Mail size={30} fill="black" stroke="white" />
					<BrandGithub size={30} fill="black" stroke="white" />
					<BrandLinkedin size={30} fill="black" stroke="white" />
				</div>
			</div>
		</footer>
	)
}

// TODO add links to logos
