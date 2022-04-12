import React from 'react'
import {Accordion, AccordionActions,AccordionSummary,AccordionDetails, Typography, Grid, Button, Divider, TextField, Box} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Grading() {
    const [expanded, setExpanded] = React.useState(false);
    const [category, setCategory] = React.useState([{category: '', percentage: ''}])

    const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const handleChangeInput = (index, event) => {
            
    }
   

  return (
    <>
    <Grid container>
        <Grid item xs={12}>
            <Button variant="contained">Add Grading</Button>
        </Grid>
        <Grid item xs={12}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography>
        </AccordionSummary>
        <Divider/>
        <AccordionDetails>
            {category.map((item,index)=> (
            <Box key={index} display="flex">
            <TextField 
            variant="contained"
            label="category"
            value={item.category}
            onChange={(event)=>handleChangeInput()}
            />
            <TextField 
            variant="contained"
            label="percentage"
            value={item.percentage}
            onChange={(event) => handleChangeInput()}
            />
            </Box>
            ))
            }
           
            {/* <form>
                 <TextField
                    variant='contained'
                    
                    
                    label='Category'
                    />
            {category.map((item, index)=>{
                <Box key={index}> 
                    
                    <TextField
                    variant='contained'
                    value={item.category}
                    
                    label='Percentage'
                    />
                </Box>
            })} 
            </form> */}
        </AccordionDetails>
        <AccordionActions>
         <Button variant="text">delete</Button>
         <Button variant="contained">save</Button>
        </AccordionActions>
      </Accordion>
       
     
        </Grid>
    </Grid>
    </>
  )
}

export default Grading