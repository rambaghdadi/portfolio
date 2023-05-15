"use client"
import {Table} from "@mantine/core"
import {AnimatePresence, motion} from "framer-motion"
import classes from "./Technologies.module.css"
import Image from "next/image"

export default function Technologies() {
  const elements = [
    {
      1: ["htmllogo.svg", "HTML"],
      2: ["csslogo.svg", "CSS"],
      3: ["jslogo.svg", "JavaScript"],
    },
    {
      1: ["typescript.svg", "TypeScript"],
      2: ["reactlogo.svg", "React"],
      3: ["nextjslogo.svg", "NextJS"],
    },
    {
      1: ["postgresql.png", "PostgreSQL"],
      2: ["prisma.svg", "Prisma"],
      3: ["gitlogo.svg", "Git"],
    },
  ]
  const rows = elements.map((element, i) => (
    <tr className={classes.tableRow} key={i}>
      <td>
        <p>{element[1][1]}</p>
        <Image
          height={75}
          width={75}
          src={`/images/logos/${element[1][0]}`}
          alt={element[1][1]}
        ></Image>
      </td>
      <td>
        <p>{element[2][1]}</p>
        <Image
          height={75}
          width={75}
          src={`/images/logos/${element[2][0]}`}
          alt={element[2][1]}
        ></Image>
      </td>
      <td>
        <p>{element[3][1]}</p>
        <Image
          height={75}
          width={75}
          src={`/images/logos/${element[3][0]}`}
          alt={element[3][1]}
        ></Image>
      </td>
    </tr>
  ))

  return (
    <section className={classes.section}>
      <AnimatePresence>
        <motion.div
          key={"anim"}
          initial="hidden"
          whileInView={"visible"}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.3}}
          variants={{
            visible: {opacity: 1, y: 0},
            hidden: {opacity: 0, y: "-50%"},
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
                {Array.from({length: elements.length}).map((_, i) => (
                  <th key={i}></th>
                ))}
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </div>
      </AnimatePresence>
    </section>
  )
}
