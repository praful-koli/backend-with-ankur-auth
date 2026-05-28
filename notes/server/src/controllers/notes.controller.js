import asycHandler from "../utils/asycHandler.js";
import { createNoteService, getNotesService , updateNoteService , deleteNoteService} from "../services/notes.services.js";

// Controller for creating a new note
const createNote = asycHandler(async(req, res)=>{
    const noteData = req.body;
    const userId = req.user.userId;
    const note = await createNoteService({...noteData, userId});

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note
    });
});


// implement getNotesService 
const getNotes = asycHandler(async(req, res)=> {
    const userId = req.user.userId;
    const notes = await getNotesService(userId);

    res.status(200).json({
        success: true,
        message: "Notes fetched successfully",
        notes
    });
});

// implement updateNoteService 
const updateNote = asycHandler(async(req, res) => {
    const noteId = req.params.id;
    const { description } = req.body;
    const userId = req.user.userId;
    const updatedNote = await updateNoteService(noteId, description, userId);

    res.status(200).json({
        success: true,
        message: "Note updated successfully",
        note: updatedNote
    });
});

// implement deleteNote controller 

const deleteNote = asycHandler(async(req, res) => {
    const noteId = req.params.id
    const userId = req.user.userId

    await deleteNoteService(noteId, userId)

    res.status(200).json({
        success: true,
        message: "Note deleted successfully",
    })
})
    


export { createNote, getNotes, updateNote , deleteNote}
