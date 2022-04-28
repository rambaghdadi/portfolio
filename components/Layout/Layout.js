import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"
import { useRouter } from "next/router"

export default function Layout({ children }) {
	const router = useRouter()

	return (
		// <div style={{ height: "100vh", width: "100vw" }}>
		// 	<div style={{ position: "absolute", height: "100%", width: "100vw" }}>
		<LazyMotion features={domAnimation}>
			<AnimatePresence initial={true} exitBeforeEnter={false}>
				<m.div
					key={router.route.concat(slideLeft.name)}
					initial="initial"
					animate="animate"
					exit="exit"
					variants={slideLeft.variants}
					transition={{ duration: 0.8 }}
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
		// 	</div>
		// </div>
	)
}

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
