import React from "react";
import NoteSearch from "./NoteSearch";

function NoteHeader({ search, onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NoteSearch search={search} onSearch={onSearch} />
    </div>
  );
}

export default NoteHeader;
