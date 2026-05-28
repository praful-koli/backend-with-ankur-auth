import noteModel from "../models/notes.model.js";
import ApiError from "../utils/ApiError.js";

const createNoteService = async (noteData) => {
  const { title, description, userId } = noteData;
  // Input validation
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
    user: userId,
  });

  return newNote;
};

const getNotesService = async (userId) => {
  let notes = await noteModel.find({ user: userId });
  return notes;
};

const updateNoteService = async (noteId, description, userId) => {
 
   // Input validation
  

  if (!description) {
    throw new ApiError(400, "Description is required");
  }

  if (description.trim().length < 10) {
    throw new ApiError(400, "Description must be at least 10 characters long");
  }
  
  const note = await noteModel.findOne({ _id: noteId, user: userId });

  if (!note) {
    throw new ApiError(404, "Note not found");
  }

  note.description = description;
  await note.save();
  return note;

};

const deleteNoteService = async (noteId, userId) => {
    const note = await noteModel.findOne({_id: noteId, user: userId})
    if(!note){
        throw new ApiError(404, "Note not found")
    }
    await noteModel.findByIdAndDelete(note._id)
}
export { createNoteService, getNotesService, updateNoteService, deleteNoteService };
