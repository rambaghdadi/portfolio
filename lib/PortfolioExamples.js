const examples = [
	{
		title: "Quick Polls",
		subTitle:
			"A web app that allows users to create quick custom polls for free.",

		main: `This SPA was built using NextJS. ExpressJS was used for the backend API while PostgreSQL was used as the database. New functionality will be added periodically such as secure polls that require authentication. Please note that the server is temporarily deployed on a free tier with cold starts, so it might take a minute to create/view a poll.`,

		link: "https://quickpolls.vercel.app/",
		linkName: "Quick Polls",
		src: "quickPolls.png",
	},
	{
		title: "Mishwar Gallery",
		subTitle: "A marketing website for a local art gallery based in Damascus.",

		main: "This website was built using NextJS. PostgreSQL was used as the database. Strapi was used as the backend for the site to perform CRUD operations. Both SSR and ISR were implemented.",

		link: "https://mishwargallery.vercel.app/",
		linkName: "Mishwar Gallery",
		src: "mishwarGallery.png",
	},
	{
		title: "To-Do App",
		subTitle: "A todo SPA with various functionality (WIP).",

		main: "This SPA is being built using NextJS. New functionality will be added periodically, so feel free to check back again for updated progress. Firestore was used as a database for the todos. Authentication was added using Firebase.",

		link: "https://ram-to-do-app.vercel.app/",
		linkName: "Todo App",
		src: "todoApp.png",
	},
	{
		title: "What's On?",
		subTitle:
			"An SPA that allows users to search for available movies and series on their preferred streaming platform (WIP).",
		main: "This SPA is being built using NextJS. The backend and authentication was built using Express JS. New functionality will be added periodically, so feel free to check back again for updated progress. The data is fetched from a public API.",

		link: "https://whatsonuk.vercel.app/",
		linkName: "What's On?",
		src: "whatsonuk.png",
	},
	{
		title: "Adept Media",
		subTitle:
			"A marketing website for a translation, transcription, and subtiling company.",
		main: "This website was built using NextJS. MongoDB was used as a database to provide an admin page which can perform CRUD operations on the messages that the site receieves through the 'contact us' form.",

		link: "https://adeptmedia.vercel.app/",
		linkName: "Adept Media",
		src: "adeptMedia.png",
	},
	{
		title: "Weather Web App",
		subTitle: "An SPA that provides location based weather information.",

		main: "This weather app was built using NextJS. It has city search functionality, and both celcius and fahrenheit options. A 3 day forcast was provided instead of 10 days due to API limitations.",

		link: "https://ram-weather-app.vercel.app/",
		linkName: "Weather App",
		src: "weatherApp.png",
	},
	{
		title: "Calculator Web App",
		subTitle: "A simple single page calculator.",

		main: "This calculator was built using vanilla Javascript, HTML, and CSS. It was one of the first web apps I created. I ultimately refactored the code to work with React. You know what they say, if you haven't built a basic calculator, are you even a web developer?",

		link: "https://calculator-app-sand-eta.vercel.app/",
		linkName: "Calculator App",
		src: "calculator.png",
	},
	{
		title: "Countries Filter App",
		subTitle: "A simple SPA that displays information about all countries.",
		main: "This SPA was built using NextJS. It has a search functionality and a pinning functionality. It renders information such as the country's capital, population, and continent from a public API.",
		link: "https://country-list-brown.vercel.app/",
		linkName: "Countries Filter App",
		src: "countriesApp.png",
	},
	{
		title: "Omnifood Website",
		subTitle: "A marketing website for a fictional food company.",
		main: "This marketing website was built using vanilla Javascript, HTML, and CSS. I created this as part of an online course I took that teaches web fundamentals.",
		link: "https://omnifood-website-seven.vercel.app/",
		linkName: "Omnifood Website",
		src: "omnifood.png",
	},
	{
		title: "Bankist Website",
		subTitle: "A marketing website for a fictional digital bank startup.",
		main: "This marketing website was built using vanilla Javascript, HTML, and CSS. I created this as part of an online course I took that teaches web fundamentals.",
		link: "https://bankist-website-omega.vercel.app/",
		linkName: "Bankist Website",
		src: "bankist.png",
	},
]

export default examples
