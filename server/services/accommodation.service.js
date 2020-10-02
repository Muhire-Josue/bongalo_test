import models from '../database/models/index';

const {Property} = models;

/**
 * Accommodation services
 */
export default class AccommodationService{


    /**
     * Save accommodation
     * @param {object} accommodation 
     */
    static async save (accommodation){
        const savedAccommodation = await Property.create(accommodation);
        return savedAccommodation;
    }
}
