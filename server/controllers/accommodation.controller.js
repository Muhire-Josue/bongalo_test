import AccommodationService from '../services/accommodation.service';
import handleResponse from '../utils/responseHandler.util';
import statusCode from '../utils/statusCodes';
import customMessage from '../utils/customMessage';

const { save } = AccommodationService;
const { successResponse } = handleResponse;
const { created } = statusCode;
const { accommodationCreated } = customMessage;

/**
 * Accommodation controller
 */

export default class AccommodationController {

    /**
     * save new accommodation
     */

    static async createAccommodation(req, res) {
        const accommodation = req.body;
        const { id } = req.authUser;
        accommodation.userId = id;
        const savedAccommodation = await save(accommodation);
        return successResponse(res, created, accommodationCreated, undefined, savedAccommodation);
    }
}