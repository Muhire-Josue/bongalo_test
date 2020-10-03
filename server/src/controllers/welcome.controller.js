import responseHandler from '../utils/responseHandler.util';
import customMessage from '../utils/customMessage';
import statusCode from '../utils/statusCodes';

const { updatedResponse } = responseHandler;
const { ok } = statusCode;
const { welcomeMessage } = customMessage;
/**
 * @description this is a welcome endpoint
 * @param {request} req
 * @param {response} res
 * @returns {object} success response message
 */
export default function (req, res) {
  return updatedResponse(res, ok, welcomeMessage);
}
