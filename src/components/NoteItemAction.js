import React from "react";

function NoteItemAction({ id, onDelete, onArchive, isArchive }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Hapus
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => onArchive(id)}
      >
        {isArchive ? "Pindahkan" : "Arsipkan"}
      </button>
    </div>
  );
}

export default NoteItemAction;
