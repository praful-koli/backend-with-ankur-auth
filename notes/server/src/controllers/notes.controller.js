import asycHandler from "../utils/asycHandler.js";
import { createNoteService } from "../services/notes.services.js";

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

export { createNote }
