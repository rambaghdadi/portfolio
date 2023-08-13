import {AnimatePresence, LazyMotion, domAnimation, m} from "framer-motion"
import {useRouter} from "next/router"
import {useEffect, useState} from "react"

export default function Layout({children}) {
  const router = useRouter()
  // const [previousPage, setPreviousPage] = useState(router.asPath)
  // const [currentPage, setCurrentPage] = useState(router.asPath)
  // const path = router.asPath

  // useEffect(() => {
  // 	setPreviousPage(currentPage)
  // 	setCurrentPage(path)
  // }, [path])

  // const pages = ["/", "/about-me", "/portfolio"]

  // function initialSlideDirection() {
  // 	const previousPageIndex = pages.indexOf(previousPage)
  // 	const currentPageIndex = pages.indexOf(currentPage)
  // 	return currentPageIndex < previousPageIndex ? "200%" : "-200%"
  // }
  // function exitSlideDirection() {
  // 	const previousPageIndex = pages.indexOf(previousPage)
  // 	const currentPageIndex = pages.indexOf(currentPage)
  // 	return currentPageIndex < previousPageIndex ? "-200%" : "200%"
  // }

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
      <AnimatePresence initial={true} mode="sync">
        <m.div
          key={router.route.concat(slideLeft.name)}
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
