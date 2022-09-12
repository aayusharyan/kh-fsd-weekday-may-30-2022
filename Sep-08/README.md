# Sep-08, 2022

- Documents -> Collection -> Database (NoSQL)
- Rows -> Table -> Database (SQL)

## find
- This method is used to find data from the collection.
- This will return a cursor (like a pointer).
- Then, we can convert that pointer and generate an array.
- This generation step returns a promise.
- To handle the promise, we can either use .then approach or await approach.
- Inside this, we can have a search object.
- For example, if we want to search records which contain a certain data as a certain value. Then we can have that as it's key value pair.
- Here, it can have direct value or it can have a partial value.
- We can have ranges. 
    - $lt - Less Than
    - $gt - Greater than.
    - $lte - Less than or equal
    - $gte - Greater than or equal
- These are called Query and Projection Operators.
- There are many of them
  - Further Reading - https://www.mongodb.com/docs/v4.4/reference/operator/query/#query-and-projection-operators


## insertMany
- This will insert many records into the DB.
- This method accepts an array of objects.
- Here, 1 object represents 1 single data / document / row.
- If we use insertOne, we can only give 1 object, no array.

# Task:
- This is a full stack task.
- This involved backend and frontend.
- For backend, create 2 endpoints:
  - 1 for registration
  - 1 for listing.
- In the app, there will be a form which is used for user registration.
  - Name
  - Email
  - Phone
  - DOB
  - Address
  - etc etc
- On the second page, we will show the list of all the registered users in a table format.
- In frontend, we will also implement react routing.
- This can take some time.