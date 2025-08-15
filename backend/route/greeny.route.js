import express from  'express';
import {getGreeny} from '../controller/greeny.controller.js';

const router =express.Router();
router.get("/",getGreeny);

 export default router;