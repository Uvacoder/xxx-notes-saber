---
author: Sabertazimi
authorTitle: Web Developer
authorURL: https://github.com/sabertazimi
authorImageURL: https://github.com/sabertazimi.png
tags: [Web, Node, GraphQL]
---

# GraphQL Basic Notes

## Better REST

Comparing to RESTful API, GraphQL has several advantages:

- No overfetching.
- No underfetching: need multiple RESTful request.
- Flexible: clients can specify their exact data requirements.
- Strong `Schema` and `Type System`.

GraphQL [solves](https://mxstbr.com/thoughts/graphql):

- Mobile apps break periodically after API changes:
  GraphQL only returns the fields the client explicitly requests,
  so new capabilities can be added by adding new types or fields,
  which is never a breaking change for existing clients.
- Slow loading times because of request waterfalls and/or overfetching:
  With GraphQL, a client sends one request for all the data it needs,
  and the server resolves all of it and sends it back in one response.
- Difficult maintenance and endpoint discovery
  due to hundreds of duplicative one-off endpoints:
  GraphQL centralizes the data access of each entity/resource.
- Security and performance are a game of whack-a-mole:
  GraphQL is the central data access layer for clients,
  so you can enforce security and performance SLAs
  at as fine-grained a level as you need.

## GraphQL Client

- `Ctrl + Enter`: run query.
- `Ctrl + Space`: auto complete in `()` or `{}`.
- `Ctrl + Shift + P`: prettify.

## Basic Query Syntax

```sql
{
  site {
    id
    siteMetadata {
      author
    }
    host
    port
    pathPrefix
    buildTime
  }
}
```

```json
{
  "data": {
    "site": {
      "id": "Site",
      "siteMetadata": {
        "author": "sabertazimi"
      },
      "host": "localhost",
      "port": "8000",
      "pathPrefix": "/react-blog",
      "buildTime": "2019-03-05T13:40:39.129Z"
    }
  }
}
```

```sql
query {
  allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
    edges {
      node {
        relativePath
        prettySize
        root
        dir
        name
        ext
        internal {
          mediaType
        }
        publicURL
      }
    }
  }
}
```

```json
{
  "data": {
    "allFile": {
      "edges": [
        {
          "node": {
            "relativePath": "gitBasicNotes.md",
            "prettySize": "28.1 kB",
            "root": "D:/",
            "dir": "D:/Work/Source/react-blog/gatsby/_posts",
            "name": "gitBasicNotes",
            "ext": ".md",
            "internal": {
              "mediaType": "text/markdown"
            },
            "publicURL": "/static/gitBasicNotes-f4bad03605183759bb31c2db3ba69e53.md"
          }
        },
        {
          "node": {
            "relativePath": "reactjsBasicNotes.md",
            "prettySize": "5.87 kB",
            "root": "D:/",
            "dir": "D:/Work/Source/react-blog/gatsby/_posts",
            "name": "reactjsBasicNotes",
            "ext": ".md",
            "internal": {
              "mediaType": "text/markdown"
            },
            "publicURL": "/static/reactjsBasicNotes-a1d04d35063f3e13e6e7302aa40ef1ce.md"
          }
        }
      ]
    }
  }
}
```
