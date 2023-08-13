import {AnimatePresence} from "framer-motion"
import Head from "next/head"
import Script from "next/script"
import {useEffect, useState} from "react"
import ContactMeModal from "../components/General/ContactMe/ContactMeModal"
import Navbar from "../components/General/Navbar/Navbar"
import ScrollUp from "../components/General/ScrollUp/ScrollUp"
import Layout from "../components/Layout/Layout"
import "../styles/globals.css"

//TODO add recent projects

function MyApp({Component, pageProps}) {
  const [openModal, setOpenModal] = useState(false)
  const [width, setWidth] = useState(0) // default width, detect on server.

  const handleResize = () => setWidth(window.innerWidth)

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width"
          initial-scale="1.0"
        />
        <meta name="description" content="Ram's Portfolio" />
        <meta
          name="keywords"
          content="Ram, Portfolio, Junior, Frontend, Web, Development"
        />
        <link rel="icon" href="/images/Ram-logos_transparent.png" />

        <title>Ram - Portfolio</title>
      </Head>
      <Navbar
        onClick={() => {
          setOpenModal(true)
        }}
      />
      <AnimatePresence mode="sync">
        {openModal && (
          <ContactMeModal
            exit={() => {
              setOpenModal(false)
            }}
          />
        )}
      </AnimatePresence>
      <ScrollUp />

      {width > 600 ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
      <Script
        id="g-analytics-script-1"
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-QC967G8X09"
      />
      <Script
        id="g-analytics-script-2"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
					  
						gtag('config', 'G-QC967G8X09');`,
        }}
      />
    </>
  )
}

export default MyApp
