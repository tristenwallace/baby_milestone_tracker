import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function MilestoneSelect() {
  const [milestone, setMilestone] = React.useState('');

  const handleChange = event => {
    setMilestone(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Milestone</InputLabel>
      <Select value={milestone} label="Milestone" onChange={handleChange}>
        {/* Populate these MenuItem components based on your milestones */}
        <MenuItem value="firstSteps">First Steps</MenuItem>
        <MenuItem value="firstWords">First Words</MenuItem>
        {/* More Milestone options */}
      </Select>
    </FormControl>
  );
}

export default MilestoneSelect;
