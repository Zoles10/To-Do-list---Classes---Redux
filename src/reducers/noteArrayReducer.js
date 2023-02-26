import { nanoid } from "nanoid";

const persistedNoteArray = localStorage.getItem("noteArray");
const initialState = persistedNoteArray ? JSON.parse(persistedNoteArray) : [];

const noteArray = (state = initialState, action) => {
  let newNote = {};
  switch (action.type) {
    case "ADD":
      if (action.payload) {
        newNote = {
          id: nanoid(),
          text: action.payload,
          done: false,
          show: true,
          editMode: false,
          percentage: false,
          important: false,
        };
        localStorage.setItem("noteArray", JSON.stringify([...state, newNote]));
        return [
          ...state,
          {
            id: nanoid(),
            text: action.payload,
            done: false,
            show: true,
            editMode: false,
            percentage: false,
            important: false,
          },
        ];
      } else {
        return [...state];
      }
    case "DELETE":
      localStorage.setItem(
        "noteArray",
        JSON.stringify(
          JSON.parse(localStorage.getItem("noteArray")).filter(
            (note) => note.id !== action.payload
          )
        )
      );
      return state.filter((note) => note.id !== action.payload);
    case "EDIT":
      localStorage.setItem(
        "noteArray",
        JSON.stringify(
          JSON.parse(localStorage.getItem("noteArray")).map((note) =>
            note.id === action.payload.id
              ? { ...note, text: action.payload.newText }
              : { ...note }
          )
        )
      );
      return state.map((note) =>
        note.id === action.payload.id
          ? { ...note, text: action.payload.newText }
          : { ...note }
      );
    case "DONE":
      localStorage.setItem(
        "noteArray",
        JSON.stringify(
          JSON.parse(localStorage.getItem("noteArray")).map((note) =>
            note.id === action.payload ? { ...note, done: true } : { ...note }
          )
        )
      );
      return state.map((note) =>
        note.id === action.payload ? { ...note, done: true } : { ...note }
      );
    case "SHOW-ALL":
      return state.map((note) =>
        note.show === false ? { ...note, show: true } : { ...note }
      );
    case "SHOW-FINISHED":
      return state.map((note) =>
        note.done ? { ...note, show: true } : { ...note, show: false }
      );
    case "SHOW-UNFINISHED":
      return state.map((note) =>
        !note.done ? { ...note, show: true } : { ...note, show: false }
      );
    case "TOGGLE-PERCENTAGE":
      localStorage.setItem(
        "noteArray",
        JSON.stringify(
          JSON.parse(localStorage.getItem("noteArray")).map((note) =>
            note.id === action.payload
              ? {
                  ...note,
                  percentage: !note.percentage,
                  editMode: !note.editMode,
                }
              : { ...note }
          )
        )
      );
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, percentage: !note.percentage, editMode: !note.editMode }
          : { ...note }
      );
    case "TOGGLE-IMPORTANT":
      localStorage.setItem(
        "noteArray",
        JSON.stringify(
          JSON.parse(localStorage.getItem("noteArray")).map((note) =>
            note.id === action.payload
              ? {
                  ...note,
                  important: !note.important,
                  editMode: !note.editMode,
                }
              : { ...note }
          )
        )
      );
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, important: !note.important, editMode: !note.editMode }
          : { ...note }
      );
    case "TOGGLE-EDITMODE":
      localStorage.setItem(
        "noteArray",
        JSON.stringify(
          JSON.parse(localStorage.getItem("noteArray")).map((note) =>
            note.id === action.payload
              ? { ...note, editMode: !note.editMode }
              : { ...note }
          )
        )
      );
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, editMode: !note.editMode }
          : { ...note }
      );

    default:
      return [...state];
  }
};

export default noteArray;
