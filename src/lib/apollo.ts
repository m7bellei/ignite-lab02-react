import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4ornr6z0sad01xx0134eurj/master",
    cache: new InMemoryCache(),
})