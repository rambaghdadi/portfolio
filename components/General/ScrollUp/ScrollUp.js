import { useEffect, useState } from "react"
import { ChevronUp } from "tabler-icons-react"
import classes from "./ScrollUp.module.css"

export default function ScrollUp(props) {
	const [offset, setOffset] = useState(0)

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset)

		window.removeEventListener("scroll", onScroll)
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [offset])

	//270

	return (
		<>
			{offset > 255 && (
				<div
					onClick={() => {
						window.scrollTo({ top: 0, behavior: "smooth" })
					}}
					className={classes.main}
				>
					<ChevronUp size={35} strokeWidth={2} color={"white"} />
				</div>
			)}
		</>
	)
}
