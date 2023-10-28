import {cssBundleHref} from "@remix-run/css-bundle"
import type {LinksFunction} from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import "./styles/globals.css"
import Navbar from "./components/General/Navbar/Navbar"
import {useEffect, useState} from "react"
import Layout from "../app/components/Layout/Layout"
import {AnimatePresence} from "framer-motion"
import ScrollUp from "../app/components/General/ScrollUp/ScrollUp"
import ContactMeModal from "../app/components/General/ContactMe/ContactMeModal"

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{rel: "stylesheet", href: cssBundleHref}] : []),
]

export default function App() {
  const [openModal, setOpenModal] = useState(false)
  const [width, setWidth] = useState(0) // default width, detect on server.

  const handleResize = () => setWidth(window.innerWidth)

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ram's Portfolio" />
        <meta
          name="keywords"
          content="Ram, Portfolio, Junior, Frontend, Web, Development"
        />
        <link rel="icon" href="/images/Ram-logos_transparent.png" />
        <title>Ram - Portfolio</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar
          onClick={() => {
            setOpenModal(true)
          }}
        />
        <AnimatePresence>
          {openModal && (
            <ContactMeModal
              exit={() => {
                setOpenModal(false)
              }}
            />
          )}
        </AnimatePresence>
        <ScrollUp />
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
