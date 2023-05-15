"use client"
import {ArrowRight} from "tabler-icons-react"
import classes from "./RecentWork.module.css"
import {AnimatePresence, motion} from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function RecentWork(props) {
  return (
    <section className={classes.main}>
      <AnimatePresence>
        <div className={classes.container}>
          <motion.h1
            initial="hidden"
            whileInView={"visible"}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.3}}
            variants={{
              visible: {opacity: 1, y: 0},
              hidden: {opacity: 0, y: "-50%"},
            }}
          >
            Recent Projects
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{once: true}}
            style={{zIndex: 100}}
            transition={{duration: 0.6, delay: 0.3}}
            variants={{
              visible: {opacity: 1, y: 0},
              hidden: {opacity: 0, y: "-50%"},
            }}
          >
            <button className={classes.button}>
              <Link
                style={{display: "flex", alignItems: "center", gap: "0.2rem"}}
                href={"/portfolio"}
              >
                <span>View All Projects </span>
                <ArrowRight size={20} />
              </Link>
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.6}}
            variants={{
              visible: {opacity: 1, y: 0},
              hidden: {opacity: 0, y: "-50%"},
            }}
            className={classes.imageContainer}
          >
            <Image
              height={75}
              width={75}
              src="/images/SVG/Chubbs_4 DrawKit_Vector_Illustrations_.svg"
              alt="proud coder image"
              className={classes.image}
            />
          </motion.div>
        </div>
      </AnimatePresence>
    </section>
  )
}
