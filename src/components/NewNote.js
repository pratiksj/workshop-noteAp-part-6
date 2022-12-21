//import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { createNote } from "../reducer/noteReducer";
//import noteService from "../services/notes";

const NewNote = (props) => {
  //const dispatch = useDispatch();
  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    props.createNote(content);
  };

  // const addNote = async (event) => {
  //   event.preventDefault();
  //   const content = event.target.note.value;
  //   event.target.note.value = "";
  //   const newNote = await noteService.createNew(content);
  //   dispatch(createNote(newNote));
  // };
  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};
const mapDispatchToProps = {
  createNote,
};

const mapStateToProps = () => {
  return {};
};

const ConnectedNewNote = connect(mapStateToProps, mapDispatchToProps)(NewNote);
//export default connect(null, { createNote })(NewNote);

export default ConnectedNewNote;
