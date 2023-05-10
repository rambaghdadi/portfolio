import Footer from "../../components/General/Footer/Footer"
import Introduction from "../../components/General/Introduction/Introduction"
import MainHero from "../../components/General/MainHero/MainHero"
import SiteExample from "../../components/PortfolioComponents/SiteExample/SiteExample"
import examples from "../../lib/PortfolioExamples"
import ChubbsConfetti from "../../components/PortfolioComponents/ChubbsConfetti"

export default function Portfolio() {
  return (
    <div className="portfolio-page page">
      <MainHero text={"Work."}>{<ChubbsConfetti />}</MainHero>
      <Introduction
        title={"Projects"}
        main={
          "Below you will find a list of projects I created since I started web development."
        }
        text={
          "Each list item will outline the technologies used to build it. Feel free to click-through to the actual websites for a more hands on experience."
        }
      />
      <div className="sites-section">
        {examples.map(({title, subTitle, link, linkName, src, main}) => {
          return (
            <SiteExample
              key={title}
              title={title}
              subTitle={subTitle}
              main={main}
              link={link}
              linkName={linkName}
              src={src}
            />
          )
        })}
      </div>
      <Footer />
    </div>
  )
}
