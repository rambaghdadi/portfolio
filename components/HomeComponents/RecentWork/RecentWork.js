"use client"
import {ArrowRight} from "tabler-icons-react"
import classes from "./RecentWork.module.css"
import {AnimatePresence, motion} from "framer-motion"
import Link from "next/link"

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
              <Link href={"/portfolio"}>
                <span>View All Projects </span>
                <span>
                  <ArrowRight size={20} />
                </span>
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
            <img
              // height={"200px"}
              // width={"200px"}
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
