"use client"

import {AnimatePresence, LazyMotion, domAnimation, m} from "framer-motion"
import {usePathname} from "next/navigation"
import {useEffect, useState} from "react"

export default function PageTransition({
  children,
}: {
  children: React.ReactNode
}) {
  const [prevRouteIndex, setPrevRouteIndex] = useState(0)
  const routesOrder = ["/", "/about-me", "/portfolio"]

  const pathname = usePathname()
  const currentRouteIndex = routesOrder.indexOf(pathname)

  const direction = currentRouteIndex > prevRouteIndex ? 1 : -1

  useEffect(() => {
    setPrevRouteIndex(currentRouteIndex)
  }, [currentRouteIndex])

  const slideLeft = {
    name: "Slide Left",
    variants: {
      initial: {
        x: direction > 0 ? "200%" : "-200%",
        scale: 3,
      },
      animate: {
        x: 0,
        scale: 1,
      },
      exit: {
        x: direction > 0 ? "-200%" : "200%",
        scale: 3,
      },
    },
  }

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence initial={false} mode="sync">
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
