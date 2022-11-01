import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onArchive,
  isArchive,
}) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} date={createdAt} body={body} />
      <NoteItemAction
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        isArchive={isArchive}
      />
    </div>
  );
}

export default NoteItem;
