import Footer from "../components/General/Footer/Footer"
import MainHero from "../components/General/MainHero/MainHero"
import Introduction from "../components/HomeComponents/Introduction/Introduction"
import RecentWork from "../components/HomeComponents/RecentWork/RecentWork"

export default function Home() {
	return (
		<>
			<div className="homePage">
				<MainHero text={"Who."} chubbs={"11"} />
				<Introduction />
				<RecentWork />
				<Footer />
			</div>
		</>
	)
}
