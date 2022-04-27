import Footer from "../components/General/Footer/Footer"
import MainHero from "../components/General/MainHero/MainHero"

export default function Portfolio(props) {
	return (
		<>
			<div className="portfolio-page">
				<MainHero text={"Work."} chubbs={"2"} />
				<Footer />
			</div>
		</>
	)
}
