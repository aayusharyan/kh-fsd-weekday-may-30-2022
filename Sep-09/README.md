# Sep-09, 2022

- When we create a new Project.
  - npm init -y
  - npm install express
  - npm install nodemon --save-dev
  - npm install mongodb

## updateOne
- This method is used to update any data on the DB.
- This method takes 2 things:
  - Firstly, the query. This query contains which document needs updation.
    - This query is used to determine which document will be updated to the new value.
  - Second, we have the object which contains the updated value.
    - In this update object, we can pass some more operators like $set, $push, $pull, etc. etc.
    - Further Reading - https://www.mongodb.com/docs/manual/reference/operator/update/
- This will then update the value based on the condition passed in argument 1 and update it to the value passed in argument 2.

**Note: There are also updateMany and find, even just findOne() we can do if we want to update only 1 element (first element of occurence of the query).**


## deleteOne
- This means removal of contennt.
- Once removed, it cannot be un-done.
- This is kind of rarely called.
- Instead of a physical delete (hard delete)
- We do a soft delete. (Software delete)

### Hard Delete
- In this, the actual data itself is removed from the machine/server.

### Soft Delete
- In this, the actual data is not removed. Instead there is a flag (boolean variable) kind of thing.
- If the user clicks on delete, then that flag value changed.
- Then that particular post/content will be deleted but not from the servers. It will feel like it has been deleted because there is logic written to exclude those kinf of flag data as true.
- In reality, we just UPDATE that data to our delete flag.

## CRUD
- Create
- Read
- Update
- Delete

## Further Reading - Atomicity of the DB. BASE Properties of the DB, ACID Properties of the DB.**

# Task:
- To abosorb (use) the Todo API created in the session and deveop the frontend for that.
- Frontend in React.
- Implement functionalities to:
  - add
  - edit
  - mark as done\
  - delete
- After every action, you will need to call the list endpoint to get the latest list from the server.