import { createSlice } from "@reduxjs/toolkit";
import noteService from "../services/notes";

// const initialState = [
//   {
//     content: "reducer defines how redux store works",
//     important: true,
//     id: 1,
//   },
//   {
//     content: "state of store can contain any data",
//     important: false,
//     id: 2,
//   },
// ];
//const generateId = () => Number((Math.random() * 1000000).toFixed(0));

// const noteReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "NEW_NOTE":
//       return state.concat(action.data);
//     case "TOGGLE_IMPORTANCE": {
//       const id = action.data.id;
//       const noteToChange = state.find((n) => n.id === id);
//       const changedNote = {
//         ...noteToChange,
//         important: !noteToChange.important,
//       };
//       return state.map((note) => (note.id !== id ? note : changedNote));
//     }
//     default:
//       return state;
//   }
// };

// export const createNote = (content) => {
//   return {
//     type: "NEW_NOTE",
//     data: {
//       content,
//       important: false,
//       id: generateId(),
//     },
//   };
// };

// export const toggleImportanceOf = (id) => {
//   return {
//     type: "TOGGLE_IMPORTANCE",
//     data: { id },
//   };
// };

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    createNote(state, action) {
      const content = action.payload;
      // state.push({
      //   content,
      //   important: false,
      //   id: generateId(),
      // });
      //state.push(content);
      return [...state, content];
    },
    toggleImportanceOf(state, action) {
      const id = action.payload;
      const noteToChange = state.find((n) => n.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      return state.map((note) => (note.id !== id ? note : changedNote));
    },
    appendNote(state, action) {
      return [...state, action.payload];
    },
    setNotes(state, action) {
      return action.payload;
    },
  },
});
//   const addNote = (event) => {
//     event.preventDefault()
//     const content = event.target.note.value
//     event.target.note.value = ''
//     store.dispatch(createNote(content))
//   }

//export default noteReducer;
export const { toggleImportanceOf, setNotes, appendNote } = noteSlice.actions;
export default noteSlice.reducer;

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll();
    dispatch(setNotes(notes));
  };
};

export const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await noteService.createNew(content);
    dispatch(appendNote(newNote));
  };
};
