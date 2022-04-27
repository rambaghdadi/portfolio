import { Button } from "@mantine/core"
import Image from "next/image"
import { useRouter } from "next/router"
import { ArrowRight } from "tabler-icons-react"
import classes from "./RecentWork.module.css"
import { AnimatePresence, motion } from "framer-motion"

export default function RecentWork(props) {
	const router = useRouter()

	return (
		<section className={classes.main}>
			<AnimatePresence>
				<div className={classes.container}>
					<motion.h1
						initial="hidden"
						whileInView={"visible"}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: "-50%" },
						}}
					>
						Recent Projects
					</motion.h1>
					<motion.div
						initial="hidden"
						whileInView={"visible"}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: "-50%" },
						}}
						className={classes.link}
					>
						<Button
							onClick={() => router.push("/portfolio")}
							style={{
								color: "white",
							}}
							variant="outline"
							color="yellow"
							size="md"
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: "0.5rem",
								}}
							>
								<span>View All Projects </span>
								<span>
									<ArrowRight size={20} />
								</span>
							</div>
						</Button>
					</motion.div>

					<motion.div
						initial="hidden"
						whileInView={"visible"}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.6 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: "-50%" },
						}}
						className={classes.imageContainer}
					>
						<Image
							height={"200px"}
							width={"200px"}
							src="/images/proudCoder.svg"
							alt="proud coder image"
						/>
					</motion.div>
				</div>
			</AnimatePresence>
		</section>
	)
}
