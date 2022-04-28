import classes from "./Introduction.module.css"
import { AnimatePresence, motion } from "framer-motion"

export default function Introduction(props) {
	return (
		<section className={classes.main}>
			<AnimatePresence>
				<motion.div
					initial="hidden"
					whileInView={"visible"}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
					variants={{
						visible: { opacity: 1, y: 0 },
						hidden: { opacity: 0, y: "-50%" },
					}}
					className={classes.container}
				>
					<p>{props.title}</p>
					<div className={classes.supportingText}>
						<h1>{props.main}</h1>
						<p>{props.text}</p>
					</div>
				</motion.div>
			</AnimatePresence>
		</section>
	)
}
