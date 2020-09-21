/**
* @author Sambit Sahoo <soulsam480@hotmail.com>
* @version 0.1.0
*/


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { sequelize, User } from "./getdb"

import 'bootstrap/dist/css/bootstrap.min.css';
// todo sqlite db
sequelize.authenticate().then(() => console.log("connected")
).catch((err: any) => console.log(err)
)
const test = async () => {
    await User.findAll().then((res) => {
        console.log(res);

    })
}
test()

createApp(App).use(router).mount('#app')
