import classes from "./Introduction.module.css"
import { AnimatePresence, motion } from "framer-motion"

export default function Introduction() {
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
					<p>Welcome</p>
					<div className={classes.supportingText}>
						<h1>
							My name is Ram Baghdadi, and I am a self-taught web developer.
						</h1>
						<p>
							Lorem ipsum ipsum dolor sit amet consectetur adipisicing elit.
							Voluptas dolores mollitia incidunt non minus obcaecati ducimus.
						</p>
					</div>
				</motion.div>
			</AnimatePresence>
		</section>
	)
}
