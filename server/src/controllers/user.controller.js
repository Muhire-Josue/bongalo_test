import handleResponse from '../utils/responseHandler.util';
import customMessage from '../utils/customMessage';
import statusCode from '../utils/statusCodes';
import UserService from '../services/user.service';
import tokenGenerator from '../utils/tokenGenerator';
import bcrypt from 'bcrypt';

const { save, findUserByEmail } = UserService;
const { successResponse, errorResponse } = handleResponse;
const { created, ok, conflict, notFound, badRequest } = statusCode;
const { userCreated, loggedIn, duplicateUser, userNotFound, incorrectPassword } = customMessage;

/**
 * User controller
 */
export default class UserController {

    /**
     * create User
     */

    static async createUser(req, res) {
        try {
            const user = req.body;
            const salt = bcrypt.genSaltSync(10);
            const plainTextPassword = user.password;
            user.password = bcrypt.hashSync(plainTextPassword, salt);
            const createdUser = await save(user);
            const token = tokenGenerator({id: createdUser.dataValues.id, username: user.username, email: user.email });
            return successResponse(res, created, userCreated, token, undefined);

        } catch (error) {
            return errorResponse(res, conflict, duplicateUser);
        }
    }

    /**
     * User login
     * 
     */

    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await findUserByEmail(email);
            if (!user) {
                return errorResponse(res, notFound, userNotFound);
            }
            const passwordMatch = bcrypt.compareSync(password, user.password);
            if (!passwordMatch) {
                return errorResponse(res, badRequest, incorrectPassword);
            }
            const token = tokenGenerator({ id: user.id, username: user.username, email: user.email });

            return successResponse(res, ok, loggedIn, token, undefined);

        } catch (error) {
            console.error(error);
        }
    }
}
