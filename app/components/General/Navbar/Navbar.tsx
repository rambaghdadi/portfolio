import {Burger} from "@mantine/core"
import {Link} from "@remix-run/react"
import {useState} from "react"
import classes from "./Navbar.module.css"
import {BrandGithub, BrandLinkedin, Mail} from "tabler-icons-react"
import {motion} from "framer-motion"
import {useLocation, useNavigate} from "@remix-run/react"

interface INavbarProps {
  onClick: () => void
}
export default function Navbar({onClick}: INavbarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [opened, setOpened] = useState(false)

  return (
    <>
      <motion.header
        initial={{x: "-100%"}}
        animate={{x: 0}}
        exit={{x: "-100%"}}
        className={
          !opened ? classes.header : `${classes.header} ${classes.opened}`
        }
      >
        <div className={classes.main}>
          <div
            className={classes.mainLogo}
            onClick={() => {
              if (location.pathname === "/") return
              navigate("/")
            }}
          >
            <img
              src={"/images/Ram-logos_white.png"}
              alt="logo"
              width={"50"}
              style={{opacity: opened ? "0" : "1"}}
            />
          </div>
          <div>
            <Burger
              className={classes.burger}
              opened={opened}
              onClick={() => setOpened(!opened)}
              color={opened ? "black" : "white"}
            />

            <motion.div
              initial={{x: "100%"}}
              animate={{x: 0}}
              exit={{x: "100%"}}
              transition={{delay: 0.2, duration: 0.4}}
              className={classes.menuContainer}
            >
              <nav className={classes.navbar}>
                <ul>
                  <li
                    onClick={() => setOpened(false)}
                    className={
                      location.pathname === "/" ? classes.disabled : ""
                    }
                  >
                    <Link to={"/"}>Intro</Link>
                  </li>
                  <li
                    onClick={() => setOpened(false)}
                    className={
                      location.pathname === "/about-me" ? classes.disabled : ""
                    }
                  >
                    <Link to={"/about-me"}>About</Link>
                  </li>
                  <li
                    onClick={() => setOpened(false)}
                    className={
                      location.pathname === "/portfolio" ? classes.disabled : ""
                    }
                  >
                    <Link to={"/portfolio"}>Portfolio</Link>
                  </li>
                </ul>
              </nav>
              <div className={classes.navFooter}>
                <p className={classes.navFooterText}>Get In Touch</p>
                <div className={classes.logos}>
                  <a rel="noreferrer" href="mailto:hello@ram-web.dev">
                    <Mail
                      className={classes.logo}
                      size={25}
                      strokeWidth={2}
                      color={"black"}
                    />
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/rambaghdadi"
                  >
                    <BrandGithub
                      className={classes.logo}
                      size={25}
                      strokeWidth={2}
                      color={"black"}
                    />
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://uk.linkedin.com/in/rambaghdadi"
                  >
                    <BrandLinkedin
                      className={classes.logo}
                      size={25}
                      strokeWidth={2}
                      color={"black"}
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          <div onClick={onClick} className={classes.contactButton}>
            <p>Contact</p>
          </div>
        </div>
      </motion.header>
    </>
  )
}
