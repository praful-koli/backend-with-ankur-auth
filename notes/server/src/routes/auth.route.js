import express from 'express'
import { registerUser, loginUser } from '../controllers/auth.controller.js'
const router = express.Router()


/**
 * @route POST /api/auth/register
 * @description Register a new user need name and email in the request body
 * @access Public
 */
router.post('/register', registerUser)

/**
 * @route POST /api/auth/login
 * @description Login an existing user need email and password in the request body
 * @access Public
 */
router.post('/login', loginUser)

export default router