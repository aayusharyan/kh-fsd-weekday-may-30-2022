# Aug-10, 2022

## React Router
- React by it's nature is a single page application.
- In order to make it feel like there are multiple pages to the website, we use react router.
- This is an additional package that we need to use.
- Website https://reactrouter.com/
- React Router v6 -> Version 6

**If we were to NOT use react router, then we would do conditional rendering.**

### Setup
- npm install react-router-dom@6

### BrowserRouter
- This is used to connect the browser navigation API with react code.
- This is added in the index.js
- This is wrapping the whole App.

### Link
- This is used as an alternate to anchor tag.
- If we use regular anchor tag, it will force the page reload. We don't want that. Because it will be slow and not feel that good quality. (Also, if we have like a background play of video/music, that will not work, because the page is loading completely again).
- We prefer Link component.
- This is an Higher Order Component.
- Here, we send an attribute called `to` which gives the link to where we want to navigate.

### Routes
- This is a container which contains all the different Routes.
- This is also an HOC.
- This is like a switch case statement.

### Route
- This is used inside Routes Component.
- This needs to attributes.
- path -> This is used to tell which path are we writing this route for. Important Note- This path is URL path.
- Element -> This is used to tell which component to be shown when the user visits that path.

**Everything in v6 is imported from React Router Dom.**

## Query Parameter using React Router

### useSearchParams
- This is used to get inforamtion about the query parameters.
- This is a hook. This is a third-party-hook.


## Task:
- Implement the comment list on the post detail component.
- https://jsonplaceholder.typicode.com/posts/<id>/comments
- Add some more CSS to make it look good.

### Simple Project using routing
- This is the social media app.
- Using https://jsonplaceholder.typicode.com/ APIs
- We show:
 - Homepage -> List of posts.
 - Clicking on a Post -> Post Detail (Query Parameters -> http://localhost:3002/single_post?id=1)
 -> Clickin on the User ID -> User Detail (Path Parameters -> )