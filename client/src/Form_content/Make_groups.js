import React, { useState } from 'react';
import Dialogform from '../components/Dialogform';
import {
  Grid,
  Typography,
  Button,
  Box,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import GroupsIconButton from '../assets/ImageJaven/GroupsIconButton.png';
import { blue, grey } from '@mui/material/colors';
import Automate from './Makegroups_model/Automate';
import Manual from './Makegroups_model/Manual';
import SavedGroups from './Makegroups_model/SavedGroups';
import MAKE_GROUPS_NOTSTARTED from './Make_groups_notstarted';

function Make_groups({
  open,
  close,
  maxWidth,
  members,
  socket,
  teleRoom,
  setRedirect,
}) {
  const groups = React.useRef([]);
  const [radioGroup, setRadioGroup] = useState('Automate');

  const [opendialogCreateGroups, setOpenDialogCreateGroups] = useState(false);

  const handleCreateCreateGroups = () => {
    let i = 0;
    let max = 0;
    while (i < members.current.length) {
      if (max === parseInt(document.querySelector('#groupNumber').value)) {
        i = 0;
      }
      groups.current[i] = groups.current[i]
        ? [...groups.current[i], { ...members.current[max] }]
        : [{ ...members.current[max] }];
      if (max === members.current.length - 1) break;
      i++;
      max++;
    }
    console.log(groups.current);
    setOpenDialogCreateGroups(true);
  };

  const handleCreateCloseCreateGroups = () => {
    setOpenDialogCreateGroups(false);
  };

  return (
    <div>
      <Dialogform
        open={open}
        close={close}
        maxWidth={maxWidth}
        btn={
          <Button
            onClick={handleCreateCreateGroups}
            variant="contained"
            startIcon={
              <img
                src={GroupsIconButton}
                alt="GroupsIconButton"
                style={{ height: '0.7em', width: '0.7em' }}
              />
            }
            sx={{
              backgroundColor: '#49B854',
              color: 'white',
              fontSize: '0.8em',
              fontWeight: '600',
              textTransform: 'Capitalize',
              padding: '0.3em 3em',
              boxShadow: 'none',
              '&: hover': {
                backgroundColor: '#31B13E',
              },
            }}
          >
            Create Groups
          </Button>
        }
      >
        {opendialogCreateGroups && (
          <MAKE_GROUPS_NOTSTARTED
            setRedirect={setRedirect}
            socket={socket}
            teleRoom={teleRoom}
            open={opendialogCreateGroups}
            close={handleCreateCloseCreateGroups}
            maxWidth="md"
            state={setOpenDialogCreateGroups}
            groups={groups}
          />
        )}

        <Grid container sx={{ padding: '0em 2em' }}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                width: 'relative',
                height: 'auto',
              }}
            >
              <Typography
                // onClick = {handleCreateCreateGroups}
                sx={{
                  color: '#3F3D56',
                  fontSize: '1.3em',
                  fontWeight: '600',
                  textTransform: 'Uppercase',
                  width: 'auto',
                  height: 'max-content',
                  paddingRight: '8em',
                }}
              >
                make groups!
              </Typography>

              <Box flexGrow={1} />

              <Box
                sx={{
                  width: 'relative',
                  height: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <FormControl sx={{ width: '100%' }}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      checked={radioGroup === 'Automate'}
                      value="Automate"
                      onChange={(e) => {
                        setRadioGroup(e.target.value);
                      }}
                      control={
                        <Radio
                          sx={{
                            color: grey[400],
                            '&.Mui-checked': {
                              color: blue[700],
                            },
                            margin: '0em 0.5em 0em 2em',
                            height: '0.8em',
                            width: '0.8em',
                          }}
                        />
                      }
                      label="Automate"
                    />

                    <FormControlLabel
                      checked={radioGroup === 'Manual'}
                      value="Manual"
                      onChange={(e) => {
                        setRadioGroup(e.target.value);
                      }}
                      control={
                        <Radio
                          sx={{
                            color: grey[400],
                            '&.Mui-checked': {
                              color: blue[700],
                            },
                            margin: '0em 0.5em 0em 2em',
                            height: '0.8em',
                            width: '0.8em',
                          }}
                        />
                      }
                      label="Manual"
                    />
                    <FormControlLabel
                      checked={radioGroup === 'Saved Groups'}
                      value="Saved Groups"
                      onChange={(e) => {
                        setRadioGroup(e.target.value);
                      }}
                      control={
                        <Radio
                          sx={{
                            color: grey[400],
                            '&.Mui-checked': {
                              color: blue[700],
                            },
                            margin: '0em 0.5em 0em 2em',
                            height: '0.8em',
                            width: '0.8em',
                          }}
                        />
                      }
                      label="Saved Groups"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>

              {/* <Box sx = {{ 
                        display: "flex",
                        gap: "0.8em",
                        width: "auto",
                        height: "auto"
                    }}>

                    </Box> */}
            </Box>
          </Grid>

          <Grid item xs={12} sx={{ marginTop: '2em' }}>
            {radioGroup === 'Automate' && <Automate members={members} />}

            {radioGroup === 'Manual' && <Manual />}

            {radioGroup === 'Saved Groups' && <SavedGroups />}
          </Grid>
        </Grid>
      </Dialogform>
    </div>
  );
}

export default Make_groups;
