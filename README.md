## Vue 3 + Electron + Sqlite + Sequelize

POC for Electron app with Vue 3 frontend and persisted database with SQlite.

#### Setup

Inside project root folder

note: I prefer using yarn as npm is highly unstable with electron and vue integration

```bash
yarn 

yarn electron:serve
```
To Build App for OS executables

```bash
yarn electron:build
```
### File Structure

- The project is a normal Vue CLI project. So the file structure is pretty familiar.
- The electron builder plugin adds a new file `src/background.ts` , this serves as the entry point of the electron app.
- `src/data.db` In project SQlite 3 database for testing.
- `getdb.ts` Initiates the Sequelize instance for using the database. 
- `main.ts` entry of vue app. It creates the vue instance and mounts the app.

#### Where to code ?

- For adding pages/views for electron app go to > `src/views`. 
- For adding components to be used i Vue pages/views go to > `src/components` 
- To create new app window / or any electron stuff go to > `src/background.ts`
- For working with database i.e. creating models for sequelize go to > `src/getdb.ts`

#### Config Files
- `tsconfig.json` for configuring typescript.
- `vue.config.js` Vue config. Not recommended to change anything in this file.


#### A brief note on Sequelize

- Sequelize is a promise based ORM. So using it is pretty easy.
- Whe using sequelize we don't have to create tables as it creates and syncs tables according to the defined models.
- Sequelize models are a abstaction of the data schema or the table schema of a db. So instead of using SQL queries for creating tables we can make sequelize to do that by using models.
- A sample model `User` is defined in `src/getdb.ts`. Learn more about sequelize [Models](https://sequelize.org/master/manual/model-basics.html)
```javascript
// a sample model USer
const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },

}, {
});
```
- SQL queries are replaced by sequelize model queries .
```javascript
// sample query for model User
// inside an async function

User.findAll().then((res)=>{
	console.log(res)
}).catch(err=> console.log(err))

```
Lean more about model Queries [here](https://sequelize.org/master/manual/model-querying-basics.html)

- More about Sequelize can be found in their [Docs](https://sequelize.org/master/). Not that good but functional.

### Notes

- Usage with Vuex is not recommended as it causes the db process to stop on reload.
  
### Known Bugs

- There are no known bugs as the build was successful with no errors.
- To report a bug create an issue.

### Errors
For errors try googling or contact me!

### References

- [Vue CLI Plugin Electron Builder Docs](https://nklayman.github.io/vue-cli-plugin-electron-builder/)
- [Sequelize Docs](https://sequelize.org/master/)
- [Electron Docs](https://www.electronjs.org/)
- [Vue 3 Docs](https://v3.vuejs.org)