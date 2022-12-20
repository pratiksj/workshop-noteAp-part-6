import { connect } from "react-redux";
import { toggleImportanceOf } from "../reducer/noteReducer";
import { useDispatch } from "react-redux";

const Notes = (props) => {
  const dispatch = useDispatch();
  const notesToShow = () => {
    if (props.filter === "ALL") {
      return props.notes;
    }

    return props.filter === "IMPORTANT"
      ? props.notes.filter((note) => note.important)
      : props.notes.filter((note) => !note.important);
  };

  // const notes = useSelector(({ filter, notes }) => {
  //   console.log(filter);
  //   const important = notes.filter((note) => note.important);
  //   const unImportant = notes.filter((note) => !note.important);
  //   return filter === "ALL"
  //     ? notes
  //     : filter === "NONIMPORTANT"
  //     ? unImportant
  //     : important;
  // });

  // const toggleImportance = (id) => {
  //   dispatch(toggleImportanceOf(id));
  // };

  return (
    <div>
      <ul>
        {/* {notesToShow().map((note) => (
          <Note
            key={note.id}
            note={note}
            handleClick={() => dispatch(toggleImportanceOf(note.id))}
          />
        ))} */}
        {notesToShow().map((note) => (
          <li
            key={note.id}
            onClick={() => dispatch(toggleImportanceOf(note.id))}
          >
            {note.content} <strong>{note.important ? "important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    filter: state.filter,
  };
};
const ConnectedNotes = connect(mapStateToProps)(Notes);

export default ConnectedNotes;
