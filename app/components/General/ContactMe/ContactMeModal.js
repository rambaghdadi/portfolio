import classes from "./ContactMeModal.module.css"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { BrandGithub, BrandLinkedin, Mail, X } from "tabler-icons-react"

export default function ContactMeModal(props) {
	return (
		<motion.div
			initial={{ opacity: 0, width: 0 }}
			animate={{ opacity: 1, width: "100%" }}
			exit={{ opacity: 0, width: 0 }}
			transition={{ delay: 0.2, duration: 0.3 }}
			key={"modal"}
			className={classes.overlay}
		>
			<div className={classes.modal}>
				<X
					className={classes.button}
					size={35}
					strokeWidth={2}
					color={"black"}
					onClick={props.exit}
					style={{ cursor: "pointer" }}
				/>
				<div className={classes.modalContent}>
					<div className={classes.modalContentMain}>
						<p>Let&apos;s Talk</p>
						<h1>hello@ram-web.dev</h1>
					</div>
					<div className={classes.modalContentSecondary}>
						<p>Social</p>
						<div className={classes.logos}>
							<a rel="noreferrer" href="mailto:hello@ram-web.dev">
								<Mail />
							</a>
							<a
								rel="noreferrer"
								target="_blank"
								href="https://github.com/rambaghdadi"
							>
								<BrandGithub />
							</a>
							<a
								rel="noreferrer"
								target="_blank"
								href="https://uk.linkedin.com/in/rambaghdadi"
							>
								<BrandLinkedin />
							</a>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}
