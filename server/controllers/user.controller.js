import handleResponse from '../utils/responseHandler.util';
import customMessage from '../utils/customMessage';
import statusCode from '../utils/statusCodes';
import UserService from '../services/user.service';
import tokenGenerator from '../utils/tokenGenerator';

const { save } = UserService;
const { successResponse } = handleResponse;
const { created } = statusCode;
const { userCreated } = customMessage;

/**
 * User controller
 */
export default class UserController {

    /**
     * create User
     */

     static async createUser(req, res){
         const user = req.body;
         const createdUser = await save(user);
         const token = tokenGenerator({username: user.username, email: user.email});
         return successResponse(res, created, userCreated, token, createdUser);
     }
}