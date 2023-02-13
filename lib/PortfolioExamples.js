const examples = [
  {
    title: "Quick Polls",
    subTitle:
      "A web app that allows users to create quick custom polls for free.",

    main: `This SPA was built using NextJS. Backend tech included Prisma and PostgreSQL, and the database is hosted on render.com. Ably was used to provide real-time communication when voting on polls. An optional login functionlity was added to allow for more secure polls.`,

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
]

export default examples
