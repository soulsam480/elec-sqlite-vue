// todo this file provides an API to interact with the db users 
//todo table making it easier to work with
import { User } from "../getdb"
interface NewUser {
    firstName: string | null;
    lastName: string | null;
    id?: number | null;
}
/** 
 * Returns all Users
 * @method getAllUsers
 * @returns {Array<NewUser>} All Users belonging to User Model 
*/
const getAllUsers = async () => {
    const users = await User.findAll()
    return users
}

/** 
 * Returns all Users
 * @method createUser
 * @param {NewUser} user the user object
 * @returns {NewUser} the created User Object
*/
const createUser = async (user: NewUser) => {
    const retData = await User.create(user)
    const addedUser: NewUser = {
        firstName: retData.firstName,
        lastName: retData.lastName,
        id: retData.id
    }
    return addedUser
}

export { getAllUsers, createUser }