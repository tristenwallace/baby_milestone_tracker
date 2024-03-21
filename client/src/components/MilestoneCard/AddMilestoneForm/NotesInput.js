import React, { useState } from 'react';
import { TextField } from '@mui/material';

function NotesInput() {
  const [notes, setNotes] = useState('');

  const handleNotesChange = event => {
    setNotes(event.target.value);
  };

  return (
    <TextField
      label="Notes"
      multiline
      rows={4}
      value={notes}
      onChange={handleNotesChange}
      fullWidth
    />
  );
}

export default NotesInput;
