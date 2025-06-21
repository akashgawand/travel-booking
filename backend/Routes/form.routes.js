import express from 'express';
import { createFormSubmission } from '../controller/form.controller.js';

const router=express.Router();
router.post("/description/:location/form", createFormSubmission); 

export default router;