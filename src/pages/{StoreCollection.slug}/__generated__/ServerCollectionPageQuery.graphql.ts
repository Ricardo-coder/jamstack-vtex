

/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */


// Operation related types
export type ServerCollectionPageQueryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ServerCollectionPageQueryQuery = { cmsSeo: Maybe<{ seo: Maybe<{ siteMetadata: Maybe<{ titleTemplate: Maybe<string>, title: Maybe<string>, description: Maybe<string> }> }> }>, storeCollection: Maybe<{ seo: { title: string, description: string }, fields: Maybe<{ plp: Maybe<{ sections: Array<{ name: string, props: any }> }> }> }> };


// Query Related Code

export const ServerCollectionPageQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query ServerCollectionPageQuery($id: String!) {\n  cmsSeo {\n    seo {\n      siteMetadata {\n        titleTemplate\n        title\n        description\n      }\n    }\n  }\n  storeCollection(id: {eq: $id}) {\n    seo {\n      title\n      description\n    }\n    fields {\n      plp {\n        sections {\n          name\n          props\n        }\n      }\n    }\n  }\n}\n",
  sha256Hash: "238db84b5d58bc0f0170df24f24ccea353cda03d11101fe90e448b29359bda1e",
  operationName: "ServerCollectionPageQuery",
}

