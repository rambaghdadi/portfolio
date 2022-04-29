import { Image, Table } from "@mantine/core"
import { AnimatePresence, motion } from "framer-motion"
import classes from "./Technologies.module.css"

export default function Technologies(props) {
	const elements = [
		{
			1: ["htmllogo.svg", "HTML"],
			2: ["csslogo.svg", "CSS"],
			3: ["jslogo.svg", "JavaScript"],
		},
		{
			1: ["reactlogo.svg", "React"],
			2: ["nextjslogo.svg", "NextJS"],
			3: ["mongodb.svg", "MongoDB"],
		},
		{
			1: ["firebase.svg", "Firebase"],
			2: ["gitlogo.svg", "Git"],
			3: ["pythonlogo.svg", "Python"],
		},
	]
	const rows = elements.map((element) => (
		<tr className={classes.tableRow} key={element[1]}>
			<td>
				<p>{element[1][1]}</p>
				<img
					height={"75px"}
					width={"75px"}
					src={`/images/logos/${element[1][0]}`}
					alt={element[1][1]}
				></img>
			</td>
			<td>
				<p>{element[2][1]}</p>
				<img
					height={"75px"}
					width={"75px"}
					src={`/images/logos/${element[2][0]}`}
					alt={element[2][1]}
				></img>
			</td>
			<td>
				<p>{element[3][1]}</p>
				<img
					height={"75"}
					width={"75"}
					src={`/images/logos/${element[3][0]}`}
					alt={element[3][1]}
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
						<h1></h1>
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
