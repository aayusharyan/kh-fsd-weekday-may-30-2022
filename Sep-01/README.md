# Sep-01, 2022

## Testing
- Checking whether we get the expected result or not.
- It can be anywhere, frontend / backend / database / api / real world.
- If the test passes, thigs are good. Otherwise, there is a bug.

## Software Testing
- We test the software.
- We check for feasibility.
- This is commonly done before releasing the software.
- Also, before releasing a version upgrade.

**A software is a collection of various programs, modules and functions.**

## Strategies 
- There are many approaches that you can take for software testing.

### Unit Testing
- This tests a single function / module or the software.
- This checks the basic single most part of the software.
- It will check one and only one functionality.
- It is okay to have multiple unit tests.

### Integration Testing
- This is to check the system design.
- To check whether the units will work together or not.
- This checks whether the different parts of code work together or not.

### Monkey Testing
- We test like monkeys.
- We will randomly click anywhere.
- We will randomly send any input. Call any API randomly.
- This is manual.

### Manual Testing | Automated Testing
- Manual Testing is when a human will check for things and prepare a summary whether it is passed or not.
- Automated Testing is when the same thing is done by a machine / piece of code.

### Validation Testing
- In this testing, we check whether the business requirement is met or not.
- This can be for any sort of business requirement. Examples:
  - Functional
  - Behavioral
  - Performance
  - Looks and Design
- Check whether all the business requirement are satisfied or not.

### Black Box Testing
- Here, we are just checking if we give any input what should be the output.
- We do not know/view the source code.

### Regression Testing
- In any software, we keep improving.
- We keep building new things and new features. At the same time, we also need to ensure that the old things and old features are still working.
- To test that, we call it regression testing.
- Upon building new features for any software, the old features should still be working.

### Load Testing / Stress Testing / Performance Testing
- We give very high load / stress to the software and test it's performance.
- This is to test for real world usage.
- When many prople try to connect at the same time, what will happen.
- The website / web server should be able to handle those many concurrent users.
- Example: Hotstar ✔️ | irctc ❌

### E2E Testing - End to End testing
- This is like complete testing from the very start to the very end.
- Example (Social Media Website):
  - User Registration
  - User posting a picture.
  - User commenting on own picture.
  - User making new friends.
  - User messaging that friend.
  - User delete account.
  - User logout.

**Concurrent - Parallel | At the same time.**

- These strategies are defined on a project level.
- It is possible for a single testcase to fall under multiple testing strategies.

*A developer will develop programs and write code. An Engineer will also architect the platform. As in, what system server should be, what db backend we should use, what connection strategy we will have.*

**DevOps -> Developer + Operation.**

## SDLC - Software Development Lifecycle
- This is how a team will develop the product.
- This is a planning and developing strategy.
- There are many SDLCs available to follow.
- This is a methodology on how we will build the product.
- Examples:

### Agile
- This is the most common one, many of the startups and organizations use this.
- The flow is very simple.
- The whole development is divided into sprints.
- Each sprint is about 2 weeks.
- After the sprint is completed, the team will meet and discuss the features changes/requirements for the next sprint.
- Sometimes, after a sprint is completed, there can be a version release as well.
- It allows you to focus on the goal for the next 2 weeks.
- Therefore, improving the qaulity.

### Waterfall
- This was the most common one BEFORE Agile.
- Many large corporates still uses this.
- This is like an approach where everything is expected to be done in 1 single very huge sprint.
- In this approach, there is no possibility of changing directions (pivoting).
- You need to first do the research and freeze the requirements. This research can take upto several months.
- Once this is done, then development is started.
- Once the development is completed, then testing is started.

### V model
- Here, there are multiple things happening at the same time.
- From business side, we start with Requirement gthering and from the dev team, we start will defining the Validation tests / Acceptatnce Tests.
- Each phase is done paralelly for two things.
- Finally, the last step is development.

**TDD - Test Driven Development. Before writing the code, we write the testcases. These can be followed along with Agile approach.**

### Kanban
- Here, we have something called as a Kanban board.
- In this board, we have multiple sections.
- Each issue/bug/feature is represented as a ticket.
- Out goal is to keep shifting the ticket to the next columns.
- This is for fast paced environments.
- The columns can change from org to org.

### Hybrid Approach
- Combintion of more than 1 approaches. Picking something from some approach and something from another approach.
- Using things whichever work best for the organization.

## Cloud Services that we will be using:
- Backend - https://www.heroku.com ❌
- Frontend - https://www.netlify.com - Using Github
- Database - https://www.mongodb.com/cloud/atlas/lp/try4

- If we want to use the MongoDB Server on our computer / machine, we need to install this software - https://www.mongodb.com/docs/manual/installation/
