// import React from "react";
// import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
//
// interface IClients {
//   children: React.ReactNode;
// }
//
//
// const client = new ApolloClient({
//   uri: 'https://graphql.contentful.com/content/v1/spaces/c0bt22mt54y2/explore?access_token=wLya-FDE3uCN1QPK8hca180GkF1MoaNJItcLD9u2GM',
//   cache: new InMemoryCache(),
// });
//
// // const link = new HttpLink({
// //   uri: "http://localhost:4000/graphql",
// //   fetchOptions: {
// //     reactNative: { textStreaming: true },
// //   },
// // });
//
// const Client = ({children}: IClients) => {
//   return (
//     <ApolloProvider client={client}>
//       {children}
//     </ApolloProvider>
//   )
// }
//
// export default Client;
