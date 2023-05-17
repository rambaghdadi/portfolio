"use client"

import {AnimatePresence, LazyMotion, domAnimation, m} from "framer-motion"
import {usePathname} from "next/navigation"

export default function PageTransition({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const slideLeft = {
    name: "Slide Left",
    variants: {
      initial: {
        x: "200%",
        scale: 3,
      },
      animate: {
        x: 0,
        scale: 1,
      },
      exit: {
        x: "-200%",
        scale: 3,
      },
    },
  }

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence initial={false} mode="popLayout">
        <m.div
          key={pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideLeft.variants}
          transition={{duration: 0.8}}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            minWidth: "100%",
            minHeight: "100%",
          }}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  )
}
