/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [{
            resolve: "gatsby-plugin-material-ui"
        },
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "GitHub",
                fieldName: "github",
                // Url to query from
                url: "https://api.github.com/graphql",
                // HTTP headers
                headers: {
                    // Learn about environment variables: https://gatsby.dev/env-vars
                    Authorization: `bearer ${process.env.TOKEN}`
                },
                // Additional options to pass to node-fetch
                fetchOptions: {}
            }
        }
    ]
};