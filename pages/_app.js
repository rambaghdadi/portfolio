import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import ContactMeModal from "../components/General/ContactMe/ContactMeModal"
import Navbar from "../components/General/Navbar/Navbar"
import ScrollUp from "../components/General/ScrollUp/ScrollUp"
import Layout from "../components/Layout/Layout"
import "../styles/globals.css"

//toyfight.co

//TODO add arrow to scroll up across all pages

function MyApp({ Component, pageProps }) {
	const [openModal, setOpenModal] = useState(false)

	return (
		<>
			<Navbar
				onClick={() => {
					setOpenModal(true)
				}}
			/>
			<AnimatePresence exitBeforeEnter={true}>
				{openModal && (
					<ContactMeModal
						exit={() => {
							setOpenModal(false)
						}}
					/>
				)}
			</AnimatePresence>
			<ScrollUp />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
