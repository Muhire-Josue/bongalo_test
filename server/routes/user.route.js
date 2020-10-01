import express from 'express';
import UserController from '../controllers/user.controller';

const route = express.Router();
const { createUser, login } = UserController;

route.post('/user/create', createUser);
route.post('/user/login', login);

export default route;