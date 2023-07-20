import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { blueGrey, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { IconArrowsSort } from '@tabler/icons';


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[800]),
  backgroundColor: grey[800],
  '&:hover': {
    backgroundColor: grey[700],
  },
}));




export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (

    // Sort by clickable option
    <div>
      <ColorButton variant='contained' color="primary" className='py-8 px-4' startIcon={<IconArrowsSort/>}  onClick={handleClickOpen}>Sort By</ColorButton>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Sort By:</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-dialog-select-label">Sort</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                native
                value={age}
                onChange={handleChange}
                input={<OutlinedInput label="Sort" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={10}>Newest First</option>
                <option value={20}>Price:Low to High</option>
                <option value={30}>Price:High to Low</option>
                <option value={40}>Popularity</option>
              </Select>
            </FormControl>
            
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}