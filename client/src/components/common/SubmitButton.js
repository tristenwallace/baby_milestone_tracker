import React from 'react';
import { Button } from '@mui/material';

function SubmitButton({ onClick, disabled = false }) {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={disabled}
      fullWidth
    >
      Submit
    </Button>
  );
}

export default SubmitButton;
