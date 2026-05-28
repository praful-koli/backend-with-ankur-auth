import noteModel from "../models/notes.model.js";
import ApiError from "../utils/ApiError.js";

const createNoteService = async(noteData)=>{
    const { title, description , userId} = noteData;

     if (!title) {
      
         throw new ApiError(400, "Title is required");
    }

    if (!description) {
        throw new ApiError(400, "Description is required");
    }

    if (title.trim().length < 3) {
        throw new ApiError(400, "Title must be at least 3 characters long");
    }

    if (description.trim().length < 10) {
        throw new ApiError(400, "Description must be at least 10 characters long");
    }

    //  If validation passes, create the note 

    const newNote = await noteModel.create({
        title,
        description,
        user: userId
    });


    return newNote

}

export { createNoteService }