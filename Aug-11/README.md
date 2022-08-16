# Aug-11, 2022

## Path Parameters
- This is the parameters that we put inside the PATH itself.
- Example 
  - http://localhost:3002/single_post?id=1
  - http://localhost:3002/users/1 - Path Parameter
  - http://localhost:3002/users/20 - Path Parameter
  - https://www.youtube.com/aayushsinha
  - https://www.instagram.com/yush.dev 
- Basically, when we are using path parameters, we don't use the ? syntax, instead of that, we directly put the value in the URL.
- We cannot use unlimited path parameters.
- We need to define every one of them in the code.
- This is not so dynamic.

**If we are doing searching/filtering, we use query Parameters, for other things, we use Path Parameters.**


## Recap:
- npm install react-router-dom@6
- On index.js, import BrowserRoute and put it around the App component:
<BrowserRouter>
  <App />
</BrowserRouter>
- In the App component, put the routes.
<Routes>
  <Route path="/" element={<Component1 />}>
  <Route path="/abcd" element={<Component2 />}> />
</Routes>
- Anything that we want to show ALWAYS, like navigation bar, or maybe footer.
- Then, the components are shown wheenever we visit on that URL.
- To perform navigation, we use Link Component, (DO NOT USE anchor, it might work, but it will force page re-loading).

## To implement a 404 Page not found.
- We write a new Route with the wildcard path.
- <Route path="*" element={<NotFoundComponent />} />
- This acts as the default route when other routes do not match.

## Continue on the same project. (social-media-sample made on Aug-10)
- We added user detail functionality.
- We also added a 404 not found page.

## Writing your own hook
- Check if we have internet or not.
- This is a special function that we write to detect the presence/absence of Internet.
- This will return a boolean variable that can be tracked.
- So, if the internet gets disconnected, it will automatically show offline status (depending on the Conditional Rendering Logic).

## Context API
- This is not a fetch API, or a URL something.
- Using this, we can send data from ancestor to descendant without the struggle of prop drilling.
- In this, we have a provider and a consumer approach.
- Provider will SEND the data.
- Consumer will CONSUME the data.

- Example tomorrow.


## Task:
- on the gallery app, add a functionality for detail screen.
- Create a new page for detail.
- Use Path parameter to navigate.
- Basically, if I click on any image, it should then show the detail of that image.
- Data to show:
  - Upload date
  - Uploaded By
  - Title
  - Description
  - color
  - likes and views
  - download