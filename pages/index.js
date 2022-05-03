import Footer from "../components/General/Footer/Footer"
import MainHero from "../components/General/MainHero/MainHero"
import Introduction from "../components/General/Introduction/Introduction"
import RecentWork from "../components/HomeComponents/RecentWork/RecentWork"
import ChubbsCoffee from "../components/HomeComponents/ChubbsCoffee"

export default function Home() {
	return (
		<>
			<div className="homePage">
				<MainHero text={"Who."}>
					<ChubbsCoffee />
				</MainHero>
				<Introduction
					title={"Welcome"}
					main={
						"My name is Ram Baghdadi, and I am a self-taught front-end web developer."
					}
					text={
						"I created this website to house the different projects I  created since I started programming in late 2021. Please feel free to browse, and reach out with any work opportunities."
					}
				/>
				<RecentWork />
				<Footer />
			</div>
		</>
	)
}
