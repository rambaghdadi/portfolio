import Footer from "../components/General/Footer/Footer"
import MainHero from "../components/General/MainHero/MainHero"
import Introduction from "../components/HomeComponents/Introduction/Introduction"
import RecentWork from "../components/HomeComponents/RecentWork/RecentWork"
import classes from "../styles/Home.module.css"

export default function Home() {
	return (
		<>
			<div className={classes.main}>
				<MainHero text={"Who."} chubbs={"11"} />
				<Introduction />
				<RecentWork />
				<Footer />
			</div>
		</>
	)
}
