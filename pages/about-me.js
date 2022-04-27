import Footer from "../components/General/Footer/Footer"
import MainHero from "../components/General/MainHero/MainHero"
import classes from "../styles/about-me.module.css"

export default function AboutMe(props) {
	return (
		<>
			<div className={classes.main}>
				<MainHero text={"What."} chubbs={"5"} />
				<Footer />
			</div>
		</>
	)
}
