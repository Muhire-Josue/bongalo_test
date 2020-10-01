import model from '../database/models/index';

const {User} = model;

/**
 * User Services
 */
export default class UserService {

    /**
     * Save user
     */

     static async save(user){
         const createdUser = await User.create(user);
         return createdUser;
     }

     /**
      * find user by email
      */

      static async findUserByEmail(email){
          const user = await User.findOne({
              where: {email}
          });

          return user;
      }
}