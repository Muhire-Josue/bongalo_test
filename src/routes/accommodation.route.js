import express from 'express';
import AccommodationController from '../controllers/accommodation.controller';
import tokenAuthentication from '../middlewares/tokenAuthentication';

const route = express.Router();
const { createAccommodation, listProperty } = AccommodationController;

route.post('/', tokenAuthentication, createAccommodation);
route.post('/new', listProperty);

export default route;
