import { Elysia } from 'elysia';
import { homeController } from '../controllers/homeController';

export const homeRoute = new Elysia({ prefix: '/api/v1' }).get('/home', homeController);
