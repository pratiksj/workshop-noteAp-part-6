import React from "react";
import { useEffect } from "react";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";
import VisibilityFilter from "./components/VisibilityFilter";
//import noteService from "./services/notes";
import { initializeNotes } from "./reducer/noteReducer";
import { useDispatch } from "react-redux";

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   noteService.getAll().then((notes) => dispatch(setNotes(notes)));
  // }, [dispatch]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
