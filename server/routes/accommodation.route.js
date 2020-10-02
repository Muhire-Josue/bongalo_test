import express from 'express';
import AccommodationController from '../controllers/accommodation.controller';
import tokenAuthentication from '../middlewares/tokenAuthentication';

const route = express.Router();
const { createAccommodation } = AccommodationController;

route.post('/accommodation', tokenAuthentication, createAccommodation);

export default route;
