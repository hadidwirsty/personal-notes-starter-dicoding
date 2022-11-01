import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import NoteHeader from "./NoteHeader";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveEventHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            createdAt: showFormattedDate(new Date()),
            body,
            archived: false,
          },
        ],
      };
    });
  }

  onSearchHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
    const notActive = notes.filter((note) => {
      return note.archived === false;
    });
    const active = notes.filter((note) => {
      return note.archived === true;
    });

    return (
      <>
        <NoteHeader
          search={this.state.search}
          onSearch={this.onSearchHandler}
        />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          {notActive.length > 0 ? (
            <NoteList
              key={this.state.key}
              notes={notActive}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveEventHandler}
            />
          ) : (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
          )}
          <h2>Arsip</h2>
          {active.length > 0 ? (
            <NoteList
              key={this.state.key}
              notes={active}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveEventHandler}
            />
          ) : (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
          )}
        </div>
      </>
    );
  }
}

export default NoteApp;
