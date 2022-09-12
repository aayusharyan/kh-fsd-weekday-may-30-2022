# Sep-07, 2022

### npm install <package-name> vs npm install.
- If we give npm install package name, it will install that package, however if we give just npn install, then it will pick from the file `package-lock.json` and istall all the packages which are there, or if package-lock.json is not available. Then it will install from package.json.

# Databases

## What is a Database?
- It is an organized structure of data. Mostly stored digitally.
- Examples:
  - Telephone Directory
  - Marksheets / Report Cards.
- Databases makes data management easy.
- It may be used for structuring of Data.
- Things that we can do:
  - Storage of Data.
  - Retrieval.
  - Modification of Data.
  - Deletion.

## DBMS (Database Management Systems)
- It is a software used to manage the Data.
- This is like an interface which is between front end user and the dadatabase.
- DBMS can have it's own optimization for better storage and performance.
- DBMS are like high level programs which makes it easy to manage the DB.
- We can manage a DB directly as well, but that will need additional programming and because it is low level, it will be comparatively difficult.
- You can create your own DBMS.

## Types of DBMS:
- Structured (SQL, MySQL).
- Non Structured. (NoSQL)
- Relational
- JSON Based.
- Hierarchical
- Network Databases.
- Graph Databases.
- Document Based.


***NoSQL DB - MongoDB***

## WHat is SQL vs NoSQL.
- SQL -> Structured Query Language.
- NoSql -> Non Structured Query Language.
- A structured Query Language is like a table.
- Each row is a new Set of data.
- A certain row can only have a certain number of columns as defined by the strcuture.
- A row cannot have more than that structure's columns.
- To solve this problem, we use NoSQL.
- In a NoSQL database, the structure of any row can be custom.
- For example, in a certain Row, we have 5 columns and then in another certain row, we have 7000 columns.

**There are many situations where a Structured DB will be preferred over a non structured Database.**

**MongoDB is a BSON based NoSQL DBMS.**
- BSON is Binary JSON. It is even more low level than JSON. As an overview, BSON is more optimized JSON.

- Moving from a structured DB to a non structured DB is very easy whereas moving from a Non structured to a structured DB is comparatively difficult.

## Database | Collection | Record
- A database contains multiple collection. For example KnowledgeHut is a DB which contains multiple batches.
- A collection contains multiple records. For example, our fsdi-05 batch contains multiple students.
- A single record represents the lowest form of data. It is a collection of Key Value Pairs. Example, 1 student is 1 record. Now, that student has multiple properties, such as name, lastname, dob, address, email, etc etc.

# Task:
- Create a new Project.
- Inside that, change the DB name to relatives.
- Change the collection name to friends.
- Insert 5 records of 5 friends. It should have fname, lname, email, phone and some of them can have phone2 whereas some won't.