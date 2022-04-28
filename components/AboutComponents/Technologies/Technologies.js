import { Image, Table } from "@mantine/core"
import { AnimatePresence, motion } from "framer-motion"
import classes from "./Technologies.module.css"

export default function Technologies(props) {
	const elements = [
		{ 1: "htmllogo.svg", 2: "csslogo.svg", 3: "jslogo.svg" },
		{ 1: "reactlogo.svg", 2: "nextjslogo.svg", 3: "mongodb.svg" },
		{ 1: "firebase.svg", 2: "gitlogo.svg", 3: "pythonlogo.svg" },
	]
	const rows = elements.map((element) => (
		<tr key={element[1]}>
			<td>
				<img
					height={"75px"}
					width={"75px"}
					src={`/images/logos/${element[1]}`}
				></img>
			</td>
			<td>
				<img
					height={"75px"}
					width={"75px"}
					src={`/images/logos/${element[2]}`}
				></img>
			</td>
			<td>
				<img
					height={"75"}
					width={"75"}
					src={`/images/logos/${element[3]}`}
				></img>
			</td>
		</tr>
	))
	return (
		<section className={classes.section}>
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
					<p>Stack Experience</p>
					<div className={classes.supportingText}>
						<h1>Technologies I have worked with so far.</h1>
					</div>
				</motion.div>
				<div className={classes.tableContainer}>
					<Table verticalSpacing={"md"} horizontalSpacing="md">
						<thead>
							<tr>
								<th></th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>{rows}</tbody>
					</Table>
				</div>
			</AnimatePresence>
		</section>
	)
}
