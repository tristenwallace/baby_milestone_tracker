import React from 'react';
import { Button, Box } from '@mui/material';
import MilestoneSelect from './MilestoneSelect';
import DateSelect from './DateSelect';
import NotesInput from './NotesInput';

function AddMilestoneForm() {
  const handleSubmit = event => {
    event.preventDefault();
    // Form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={2}>
        <MilestoneSelect />
        <DateSelect />
        <NotesInput />
        <Button type="submit">Submit</Button>
      </Box>
    </form>
  );
}

export default AddMilestoneForm;
