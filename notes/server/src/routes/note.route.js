import express from 'express'
const router = express.Router()
import { createNote, getNotes ,updateNote} from '../controllers/notes.controller.js'
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


/**
 *  @route path /api/notes/:id
 *  @description update description of note by id
 *  @access Private
 */

router.patch('/update-notes/:id',  identifyUser, updateNote)

// router.delete('/delete/:id', deleteNote)

// router.delete('/delete/', deleteNote)

export default router