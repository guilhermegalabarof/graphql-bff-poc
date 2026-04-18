# Project to learn GRAPHql for frontend (also BFF with GRAPHql which includes the backend part)

## How to run

```bash
npm run dev
```

Starts both BFF and app in parallel. BFF runs on `http://localhost:4000`, app on `http://localhost:5173`.

---

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


### Achievements

- [x] **Queries with variables** — `GET_DUCK` and `GET_BREED_DUCKS` pass `id` as a typed variable. Apollo skips the request until the variable is ready (`skip: !id`).
- [x] **Resolver chaining** — `Breed.ducks` resolver receives the parent breed and filters ducks by id. GraphQL only runs it when the client asks for `ducks`, never otherwise.
- [x] **Normalized cache** — Apollo stores `Duck:1`, `Breed:1` as individual objects, not raw query blobs. Same duck returned by two queries shares one cache entry. No stale sync needed.
- [x] **Client drives what resolves** — removing `photo` from `GET_BREED_DUCKS` means the photo resolver never fires for the listing. No N+1 in the duck list because we don't ask for photos there.
- [ ] **Mutations** — `addDuck` + `useMutation` + `refetchQueries`
- [ ] **Fragments** — `DUCK_FIELDS` reused across queries
- [ ] **Codegen** — generated types from schema, no manual type work
- [ ] **Error handling** — `networkError` vs `graphQLErrors`, typed resolver errors
- [ ] **fetchPolicy** — `cache-and-network` vs `cache-first` tradeoffs
- [ ] **DataLoader** — batching pattern for when you DO fetch per-item in a list (real DB use case)

### Glossary:
1. RxJS - Observable pattern to subscribe to a stream (useQuery -> subscription to results)
2. HttpLink -> the http protocol connection that connects client with graphql server, can be concacted with another links like AuthLink -> HttpLink to have a auth layer. 
3. auth layer -> 
4. InMemoryCache -> refreshing the app will trigger a new fetch, we can also have fetchPolicy in the useQuery, and apollo3-cache-persist to persist in localstorage requests surviving refresh for example.
