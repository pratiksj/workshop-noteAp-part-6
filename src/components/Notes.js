import { toggleImportanceOf } from "../reducer/noteReducer";
import { useSelector, useDispatch } from "react-redux";

const Notes = (props) => {
  const dispatch = useDispatch();
  const notes = useSelector(({ filter, notes }) => {
    console.log(filter);
    const important = notes.filter((note) => note.important);
    const unImportant = notes.filter((note) => !note.important);
    return filter === "ALL"
      ? notes
      : filter === "NONIMPORTANT"
      ? unImportant
      : important;
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
