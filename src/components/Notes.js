import { toggleImportanceOf } from "../reducer/noteReducer";
import { useSelector, useDispatch } from "react-redux";

const Notes = (props) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => {
    if (state.filter === "ALL") {
      return state.notes;
    }
    return state.filter === "important"
      ? state.notes.filter((note) => note.important)
      : state.notes.filter((note) => !note.important);
  });

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id));
  };

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content} <strong>{note.important ? "important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
