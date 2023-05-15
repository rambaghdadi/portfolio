"use client"

import {Burger} from "@mantine/core"
import Link from "next/link"
import {useRouter, usePathname} from "next/navigation"
import {useState} from "react"
import classes from "./Navbar.module.css"
import {motion} from "framer-motion"
import socials from "../../../lib/Links"
import Image from "next/image"

interface INavbarProps {
  onClick: () => void
}

export default function Navbar({onClick}: INavbarProps) {
  const [opened, setOpened] = useState(false)
  const links = [
    {name: "Intro", link: "/"},
    {name: "About", link: "/about-me"},
    {name: "Portfolio", link: "/portfolio"},
  ]

  const socialParams = {
    color: "black",
    size: 25,
    strokeWidth: 2,
    className: "classes.logo",
  }

  const router = useRouter()
  const pathname = usePathname()

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
              if (pathname === "/") return
              router.push("/")
            }}
          >
            <Image
              src={"/images/Ram-logos_white.png"}
              alt="logo"
              width={50}
              height={50}
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
                  {links.map(({link, name}) => (
                    <li
                      key={link}
                      onClick={() => setOpened(false)}
                      className={pathname === link ? classes.disabled : ""}
                    >
                      <Link href={link}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className={classes.navFooter}>
                <p className={classes.navFooterText}>Get In Touch</p>
                <div className={classes.logos}>
                  {socials(socialParams).map((social) => (
                    <a
                      key={social.name}
                      rel="noreferrer"
                      target="_blank"
                      href={social.href}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          <div {...{onClick}} className={classes.contactButton}>
            <p>Contact</p>
          </div>
        </div>
      </motion.header>
    </>
  )
}
