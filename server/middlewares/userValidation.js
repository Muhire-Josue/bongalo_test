import handleResponse from '../utils/responseHandler.util';
import statusCode from '../utils/statusCodes';
import customMessage from '../utils/customMessage';

const {badRequest} = statusCode;
const {invalidInput, lessCharacters} = customMessage;
const {errorResponse} = handleResponse;
const signupValidation = (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return errorResponse(res, badRequest, invalidInput);
    }
    if (username.length < 3 || email.length < 3 || password.length < 3) {
        return errorResponse(res, badRequest, lessCharacters);
    }
    return next();
}

export default signupValidation;