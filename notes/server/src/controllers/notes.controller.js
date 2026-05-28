import asycHandler from "../utils/asycHandler.js";
import { createNoteService, getNotesService} from "../services/notes.services.js";

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


// implement getNotesService and getNotes controller
const getNotes = asycHandler(async(req, res)=> {
    const userId = req.user.userId;
    const notes = await getNotesService(userId);

    res.status(200).json({
        success: true,
        message: "Notes fetched successfully",
        notes
    });
});


export { createNote, getNotes }
