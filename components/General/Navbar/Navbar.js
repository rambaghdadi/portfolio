import { Burger } from "@mantine/core"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import classes from "./Navbar.module.css"
import { BrandGithub, BrandLinkedin, Mail } from "tabler-icons-react"
import { motion } from "framer-motion"

export default function Navbar(props) {
	const router = useRouter()
	const [opened, setOpened] = useState(false)

	return (
		<>
			<motion.header
				initial={{ x: "-100%" }}
				animate={{ x: 0 }}
				exit={{ x: "-100%" }}
				className={
					!opened ? classes.header : `${classes.header} ${classes.opened}`
				}
			>
				<div className={classes.main}>
					<div
						className={classes.mainLogo}
						onClick={() => {
							if (router.asPath === "/") return
							router.push("/")
						}}
					>
						<img
							src={"/images/Ram-logos_white.png"}
							alt="logo"
							width={"50"}
							style={{ opacity: opened ? "0" : "1" }}
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
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ delay: 0.2, duration: 0.4 }}
							className={classes.menuContainer}
						>
							<nav className={classes.navbar}>
								<ul>
									<li
										onClick={() => setOpened(false)}
										className={router.asPath === "/" ? classes.disabled : ""}
									>
										<Link href={"/"}>Intro</Link>
									</li>
									<li
										onClick={() => setOpened(false)}
										className={
											router.asPath === "/about-me" ? classes.disabled : ""
										}
									>
										<Link href={"/about-me"}>About</Link>
									</li>
									<li
										onClick={() => setOpened(false)}
										className={
											router.asPath === "/portfolio" ? classes.disabled : ""
										}
									>
										<Link href={"/portfolio"}>Portfolio</Link>
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
					<div onClick={props.onClick} className={classes.contactButton}>
						<p>Contact</p>
					</div>
				</div>
			</motion.header>
		</>
	)
}

// disabled={currentPage}
