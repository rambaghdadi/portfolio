import Navbar from "../components/General/Navbar/Navbar"
import Layout from "../components/Layout/Layout"
import "../styles/globals.css"

//toyfight.co

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
