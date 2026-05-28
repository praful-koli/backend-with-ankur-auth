import express from 'express'
const router = express.Router()
import { createNote, getNotes } from '../controllers/notes.controller.js'
import identifyUser from '../middlewares/auth.middleware.js'

/**
 * @route POST /api/notes/create
 * @description Create a new note need title and description in the request body
 * @access Private
 */

router.post('/create', identifyUser, createNote)

/**
 * @route GET /api/notes
 * @description Get all notes for the authenticated user
 * @access Private
 */
router.get('/get-notes', identifyUser, getNotes)


// router.get('/notes/:id', getNoteById)

// router.patch('/notes/:id', updateNote)

// router.delete('/delete/:id', deleteNote)

// router.delete('/delete/', deleteNote)

export default router