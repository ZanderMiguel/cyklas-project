import React from 'react';
import Dialogform from '../components/Dialogform';

import {
  Grid,
  Box,
  Typography,
  Button,
  Divider,
  TextField,
  Stack,
} from '@mui/material';
import { ContentCopy } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import useStyle from './Styles/Add_member_style';

function Add_member({ open, close, maxWidth }) {
  const location = useLocation();
  const { designs } = useStyle();

    
  return (
    <div>
      <Dialogform open={open} close={close} maxWidth={maxWidth}>
        <Grid item xs={12}>
          <Stack sx={designs.Stack_Style}>
            <Typography sx={designs.TextFieldLabel_Style}>
              Add Member'(s)
            </Typography>
            <TextField
              variant="outlined"
              autoComplete="off"
              sx={designs.TextField_Style}
              placeholder="Enter email address..."
            />
          </Stack>
        </Grid>

        <Box
          sx={{
            margin: '0em 2em',
            width: 'relative',
            height: 'auto',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#0069D3',
              color: 'white',
              fontSize: '0.8em',
              fontWeight: '600',
              textTransform: 'Capitalize',
              padding: '0.3em 3em',
              '&: hover': {
                backgroundColor: '#005DC3',
              },
            }}
          >
            Add
          </Button>
        </Box>

        <Grid item xs={12} sx={{ margin: '3em 2em 2em 2em' }}>
          <Divider>
            <Typography
              children="or"
              sx={{
                color: '#3F3D56',
                fontSize: '0.8em',
                fontWeight: '600',
                textTransform: 'uppercase',
              }}
            />
          </Divider>
        </Grid>
        <Stack sx={designs.Stack_Style}>
          <Box
            sx={{
              height: 'auto',
              width: 'relative',
              display: 'flex',
              gap: '0.8em',
            }}
          >
            <Box sx={{ height: 'auto', width: 'relative' }}>
              <Typography
                sx={designs.TextFieldLabel_Style}
                children="Classroom Link (For Professor(s))"
              />
              <TextField
                variant="standard"
                sx={designs.TextField2_Style}
                defaultValue={location.pathname}
                InputProps={{ readOnly: true }}
              />
            </Box>

            <Box
              sx={{
                height: 'auto',
                width: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <Button
                variant="contained"
                startIcon={<ContentCopy />}
                sx={{
                  border: '1px solid #0069D3',
                  backgroundColor: 'transparent',
                  height: 'max-content',
                  boxShadow: 'none',
                  color: '#0069D3',
                  fontSize: '0.8em',
                  fontWeight: '600',
                  textTransform: 'Capitalize',
                  padding: '0.3em 3em',
                  '&: hover': {
                    border: '1px solid #005DC3',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                  },
                }}
              >
                Copy Link
              </Button>
            </Box>
          </Box>
        </Stack>
        

      </Dialogform>
    </div>
  );
}

export default Add_member;
