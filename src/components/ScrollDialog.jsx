import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import BlockOfNews from './BlockOfNews';

export default function ScrollDialog(props) {
  const [open, setOpen] = React.useState(true);
  const [scroll, setScroll] = React.useState('paper')
  const [myText, setMyText] = React.useState('')

//  const {onClose} =  props;
  const handleClickOpen = (scrollType) => () => {
    setOpen(true)
    setScroll(scrollType)
  }

  const handleClose = () => {
    setOpen(false)
    props.onClose(props.handleMenuClose)
  }

  const descriptionElementRef = React.useRef(null);

  React.useEffect(() => {
    
  }, [myText])

  React.useEffect(() => {
    if (open && props.tempComments.length > 0) {
        let t = ''
        props.tempComments.map(item => {
            t = t + `${item.data.body}`
        })
        //console.log(t)
        setMyText(t)
      
      const { current: descriptionElement } = descriptionElementRef;
    //  console.log('esto envio : ', props.tempComments)
     // const myText = props.tempComments
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button> */}
      {/* <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      {/* {handleClickOpen('paper')} */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
       // scroll='paper'
         aria-labelledby="scroll-dialog-title"
         aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>

          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
          
            
            {myText}

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}