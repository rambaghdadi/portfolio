import { ArrowDown } from "tabler-icons-react"
import { AnimatePresence, motion } from "framer-motion"
import classes from "./MainHero.module.css"
import { useEffect, useState } from "react"

export default function MainHero(props) {
	const [offset, setOffset] = useState(0)

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset)

		window.removeEventListener("scroll", onScroll)
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [offset])

	return (
		<div className={classes.main}>
			<AnimatePresence initial={false}>
				{offset < 120 && (
					<motion.div
						key={"hero"}
						initial={{ opacity: 1, y: "-100%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "-100%" }}
						transition={{ duration: 0.4 }}
						className={classes.container}
					>
						<h1>{props.text}</h1>
						<div className={classes.svgContainer}>{props.children}</div>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{offset < 250 && (
					<motion.div
						key={"arrow"}
						initial={{ opacity: 1, y: "-200%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "-200%" }}
						transition={{ duration: 0.4 }}
						className={classes.arrow}
					>
						<ArrowDown size={30} />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

//TODO Exit Animation
