module.exports = {
  siteMetadata: {
    title: `JazuSoft`,
    description: `A web for software lovers. I'm Fabian Zamudio, nice to meet you!`,
    author: `@fabianzamudio`,
    githubRepositoryURL: 'https://github.com/orgs/JazuSoft',
    navItems: [{title: '', url: ''}],
    docSearch: {
      appId: 'OFCNCOG2CU',
      apiKey: '6fe4476ee5a1832882e326b506d14126',
      indexName: 'npm-search',
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
		{
			resolve: "gatsby-source-graphql",
			options: {
				typeName: "GitHub",
				fieldName: "github",
				url: "https://api.github.com/graphql",
				headers: {
					Authorization: `bearer ${process.env.PORTFOLIO_GITHUB_TOKEN}`,
				},
				fetchOptions: {},
			},
		},
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://fabianzamudio-strapi.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`post`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
