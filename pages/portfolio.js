import Footer from "../components/General/Footer/Footer"
import MainHero from "../components/General/MainHero/MainHero"
import classes from "../styles/portfolio.module.css"

export default function Portfolio(props) {
	return (
		<>
			<div className={classes.main}>
				<MainHero text={"Work."} chubbs={"2"} />
				<Footer />
			</div>
		</>
	)
}
