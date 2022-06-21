import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import BlockOfNews from './BlockOfNews';
import { Box } from '@mui/system';

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
    if (props.tempComments.length > 0) {
        let t = ''
        props.tempComments.map(item => {
            t = t + `${item.data.body}`
        })
        //console.log(t)
        setMyText(t)
      
      const { current: descriptionElement } = descriptionElementRef;

      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open])

  const processData = (body,created) => {
    return (
        <div key={created}>
        {body}
        <p>.</p>
        <p>.</p>
       
        </div>
    )
  }

  const texto = 'esto es una prueba mas de mierda'

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
        <DialogTitle id="scroll-dialog-title">Comments</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
        <Typography variant='h2'> 
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            sx={{color:'#888'}}
          >

        {        
        props.tempComments.length > 0 
        ? props.tempComments.map(item => processData(item.data.body, item.data.created) )
        : null
        }



            
          {/* <b> {myText}</b> */}

          </DialogContentText>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}