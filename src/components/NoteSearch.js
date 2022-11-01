import React from "react";

function NoteSearch({ search, onSearch }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan..."
        value={search}
        onChange={(event) => onSearch(event)}
      />
    </div>
  );
}

export default NoteSearch;
