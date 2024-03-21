import React, { useState } from 'react';
import { TextField } from '@mui/material';

function DateSelect() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = event => {
    setSelectedDate(event.target.value);
  };

  return (
    <TextField
      label="Milestone Date"
      type="date"
      value={selectedDate}
      onChange={handleDateChange}
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}

export default DateSelect;
