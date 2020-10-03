import models from '../database/models/index';

const { Property, Accommodation } = models;

/**
 * Accommodation services
 */
export default class AccommodationService {


    /**
     * Save accommodation
     * @param {object} accommodation 
     */
    static async save(accommodation) {
        const savedAccommodation = await Property.create(accommodation);
        return savedAccommodation;
    }

    /**
     * register a property
     */

    static async createProperty(property) {
        const savedProperty = await Accommodation.create(property);
        return savedProperty;
    }
}
