import express from 'express'
const router = express.Router()
import { createNote, getNotes ,updateNote , deleteNote ,delelteAllNote} from '../controllers/notes.controller.js'
import identifyUser from '../middlewares/auth.middleware.js'

/**
 * @route POST /api/notes/create
 * @description Create a new note need title and description in the request body
 * @access Private
 */

router.post('/create', identifyUser, createNote)

/**
 * @route GET /api/get-notes
 * @description Get all notes for the authenticated user
 * @access Private
 */
router.get('/get-notes', identifyUser, getNotes)


/**
 *  @route PATCH /api/update-notes/:id
 *  @description update description of note by id
 *  @access Private
 */

router.patch('/update-notes/:id',  identifyUser, updateNote)


/**
 * @route DELETE /api/notes/delete/:id
 * @description Delete a note by id
 * @access Private
 */

router.delete('/delete/:id',identifyUser, deleteNote)

/**
 * @route DELETE /api/notes/delete-all
 * @description Delete all notes
 * @access Private
 */

router.delete('/delete-all', identifyUser,  delelteAllNote)

export default router