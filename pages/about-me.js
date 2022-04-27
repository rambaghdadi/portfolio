import Footer from "../components/General/Footer/Footer"
import MainHero from "../components/General/MainHero/MainHero"

export default function AboutMe(props) {
	return (
		<>
			<div className="about-page">
				<MainHero text={"What."} chubbs={"5"} />
				<Footer />
			</div>
		</>
	)
}
