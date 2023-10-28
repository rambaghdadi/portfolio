import ChubbsWonder from "../components/AboutComponents/ChubbsWonder"
import Technologies from "../components/AboutComponents/Technologies/Technologies"
import Footer from "../components/General/Footer/Footer"
import Introduction from "../components/General/Introduction/Introduction"
import MainHero from "../components/General/MainHero/MainHero"

export default function AboutMe() {
  return (
    <>
      <div className="about-page page">
        <MainHero text={"What."}>
          <ChubbsWonder />
        </MainHero>
        <Introduction
          title={"About Me"}
          main={
            "In 2021, I took the decision to switch careers and focus on web development."
          }
          text={
            "I am passionate about programming, design, and learning new technologies. As you will see from my tech stack below, I am currently invested in React and TypeScript. I am currently looking for new work opportunities."
          }
        />
        <Technologies />
        <Footer />
      </div>
    </>
  )
}
