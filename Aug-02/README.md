# Aug-02, 2022

## Lifecycle
- There are several lifecycle functions.
- But there are only 3 lifecycle stages.

### Mounting (creation)
- This is the phase where the component is first loaded onto the browser.
- Typically used to setup or invoke some initial API calls.
- componentDidMount - This is a built in React method.
- We can technically do it in the constructor, but that will have side-effects.

### Updation (re-rendering)
- In this phase, the component is updated because of either some state change or prop change.
- componentDidUpdate - This gets invoked whenever a component is updated.
- The possible reasons for any component to update is: change in prop, change in state.
- The old prop and the old state we can get inside the parameters of the componentDidUpdate method. 
- I have 2 password fields and I want to check whether they are same or not.


### Unmounting (destruction)
- When the component is removed from the screen.
- Lifecycle method: componentWillUnmount
- Usage, to clear some of the listeners that we might have set.
- Example: clear the timers, disconnect the Server sessions, maybe clear the cookies/etc.


## React Fragments
- These are used to wrap the html elements inside return of the render method.
- The purpose is to eliminate the use of div tags.
- div tags consume a lot of memory in the DOM tree and also might break the CSS. Fragments take less memory.
- Using fragments will put lesser stress on the DOM and the overall performance will improve.
- Until and unless a div is needed, try to avoid it and use Fragments.

**Note: In case if the state we are setting is NOT dependent on the previous value, then we DON'T need to pass a callback function. We can directly pass the object with updated keys.**


## setInterval
- This is a built in function of the browser. This acts like a clock.
- We pass 2 arguments, first is the callback function, and the second is the interval (milliseconds).
- This setInterval asks the browser to call the callback function that is passed after this set amount of time.
- This will never stop, it will keep on invoking the callback function after the set amount of time.
- To explicitly stop this, we need to call clearInterval.
- clearInterval needs an id as an argument, this id is the id returned by setInterval method.
- There is NO PAUSE!

## Task A:
- Create a counter from 100 to 1.

## Task:
- Implement a button that allows pausing and resuming of the counter.

**Note: MAKE SURE THAT NodeJS is installed before tomorrow's session.**
