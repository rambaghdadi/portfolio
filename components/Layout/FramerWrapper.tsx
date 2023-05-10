"use client"

import PageTransition from "./PageTransition"

export default function FramerWrapper({children}) {
  return <PageTransition>{children}</PageTransition>
}
