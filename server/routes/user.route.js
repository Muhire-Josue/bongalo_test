import express from 'express';
import UserController from '../controllers/user.controller';

const route = express.Router();
const { createUser } = UserController;

route.post('/user/create', createUser);

export default route;