import React, { useState } from 'react';
import { Card, CardContent, CardActions, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MilestoneSummary from './MilestoneSummary';
import AddMilestoneForm from './AddMilestoneForm/AddMilestoneForm';

function MilestoneCard() {
  const [isFormOpen, setFormOpen] = useState(false);

  return (
    <Card>
      <CardContent>
        {isFormOpen ? <AddMilestoneForm /> : <MilestoneSummary />}
      </CardContent>
      <CardActions>
        <IconButton onClick={() => setFormOpen(!isFormOpen)}>
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default MilestoneCard;
