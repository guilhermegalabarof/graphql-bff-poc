# Project to learn GRAPHql for frontend (also BFF with GRAPHql which includes the backend part)

## the main goal of this poc is to:
- [x] Create a web app that fetch graphql from public api
- [ ] create my own backend for fetching a rest api and serving a graphql endpoint
- [ ] use my own BFF (above) to get the data creating a graphql query.
- [ ] backend can make two+ requests and serve one single graphql endpoint where frontend consumes multiple queries wity one request.


## TODO ->
 - [x] https://www.apollographql.com/docs/react
  - [x] npm install @apollo/client graphql rxjs
  - [x] Configure local app.
  - [x] add typescript to it.
  - [ ] add codegen?


  ### cool things
  #### useQuery:
  can have a custom fetchPolicy for cache
  can be refetched easily passing variables or getting refetch param
  refetch bypass cache.
  we can get all items of an array, but when we want a property, in our bff it will trigger another 
  request because we asked for that specific item, this saves so much overfetching.
   

#### things to learn
- [x] queries and variables
- [ ] mutations


### Glossary:
1. RxJS - Observable pattern to subscribe to a stream (useQuery -> subscription to results)
2. HttpLink -> the http protocol connection that connects client with graphql server, can be concacted with another links like AuthLink -> HttpLink to have a auth layer. 
3. auth layer -> 
4. InMemoryCache -> refreshing the app will trigger a new fetch, we can also have fetchPolicy in the useQuery, and apollo3-cache-persist to persist in localstorage requests surviving refresh for example.
