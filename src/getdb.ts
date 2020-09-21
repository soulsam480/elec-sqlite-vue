import { Sequelize, Model, DataTypes } from 'sequelize';
import { remote } from "electron"
import path from 'path';
declare const __static: string;

// todo try loading db from userData

const univDb = path.join(remote.app.getPath("userData"), "data.db")

// todo the below is the path to local db under src/data.db
const isBuild = process.env.NODE_ENV === 'production';
const locDb = path.join(
    // eslint-disable-next-line
    isBuild ? __dirname : __static,
    '../src/data.db',
);


// setup the connection to make sure it works
const sequelize = new Sequelize({
    dialect: 'sqlite',
    // todo change this to locDb for using db inside src/data.db
    storage: univDb,
    logging: /* true,  */(process.env.NODE_ENV !== 'production') ? console.log : false,
    define: {
        timestamps: false,
        underscored: true,
    },
});

// todo define models here, or use a separate file for defining models and import them here!!!

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

// todo use sync to create tables 
User.sync()

export { sequelize, User };