import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive, onActive }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          onActive={onActive}
          isArchive={note.archived}
          {...note}
        />
      ))}
    </div>
  );
}

export default NoteList;
