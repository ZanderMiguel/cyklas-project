import React, { useState, useRef } from 'react';
import {
  Container,
  Grid,
  Divider,
  Typography,
  Button,
  IconButton,
  Box,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { FolderSharedOutlined, Search, Grading } from '@mui/icons-material';
import Records_tableClassRecords from './Records_tableClassRecords';
import useStyle from './Styles/Records_style';
import Grading_system from './Grading_system';

function Records() {
  const { designs } = useStyle();

  const [toggleClassRecords, setToggleClassRecords] = useState(true);
  const [toggleGradingSystem, setToggleGradingSystem] = useState(true);

  const handleClassRecords = () => {
    setToggleClassRecords(true);
    setToggleGradingSystem(true);
  };

  const handleGradingSystem = () => {
    setToggleGradingSystem(false);
    setToggleClassRecords(false);
  };
  const data = useRef([{}]);
  const name = useRef([{}]);
  const counter = useRef(0);
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <Box
            className="content-container"
            sx={{
              margin: '2em 0em',
              padding: '1em 1.5em',
            }}
          >
            <Grid container>
              <Grid item lg={2} md={3} sm={4} xs={12}>
                <Box
                  onClick={handleClassRecords}
                  sx={{
                    height: 'auto',
                    width: '100%',
                  }}
                >
                  {toggleClassRecords ? (
                    <Button
                      variant="contained"
                      startIcon={<FolderSharedOutlined />}
                      value="Automate"
                      sx={{
                        width: '100%',
                        color: 'white',
                        backgroundColor: '#0069D3',
                        borderRadius: '0.3em 0em 0em 0.3em',
                        fontSize: '0.7em',
                        fontWeight: '600',
                        textTransform: 'Capitalize',
                        padding: '0.3em 2em',
                        boxShadow: 'none',
                        '&: hover': {
                          boxShadow: 'none',
                          backgroundColor: '#005DC3',
                        },
                      }}
                    >
                      Class Records
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      startIcon={<FolderSharedOutlined />}
                      sx={{
                        width: '100%',
                        color: '#3F3D56',
                        backgroundColor: 'transparent',
                        borderRadius: '0.3em 0em 0em 0.3em',
                        fontSize: '0.7em',
                        fontWeight: '600',
                        textTransform: 'Capitalize',
                        padding: '0.3em 2em',
                        boxShadow: 'none',
                        '&: hover': {
                          boxShadow: 'none',
                          backgroundColor: '#FCFCFC',
                        },
                      }}
                    >
                      Class Records
                    </Button>
                  )}
                </Box>
              </Grid>

              <Grid item lg={2} md={3} sm={4} xs={12}>
                <Box
                  onClick={handleGradingSystem}
                  sx={{
                    height: 'auto',
                    width: '100%',
                  }}
                >
                  {toggleGradingSystem ? (
                    <Button
                      variant="contained"
                      startIcon={<Grading />}
                      sx={{
                        width: '100%',
                        color: '#3F3D56',
                        backgroundColor: 'transparent',
                        borderRadius: '0em 0.3em 0.3em 0em',
                        fontSize: '0.7em',
                        fontWeight: '600',
                        textTransform: 'Capitalize',
                        padding: '0.3em 2em',
                        boxShadow: 'none',
                        '&: hover': {
                          boxShadow: 'none',
                          backgroundColor: '#FCFCFC',
                        },
                      }}
                    >
                      Grading System
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      startIcon={<Grading />}
                      sx={{
                        width: '100%',
                        color: 'white',
                        backgroundColor: '#0069D3',
                        borderRadius: '0em 0.3em 0.3em 0em',
                        fontSize: '0.7em',
                        fontWeight: '600',
                        textTransform: 'Capitalize',
                        padding: '0.3em 2em',
                        boxShadow: 'none',
                        '&: hover': {
                          boxShadow: 'none',
                          backgroundColor: '#005DC3',
                        },
                      }}
                    >
                      Grading System
                    </Button>
                  )}
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ margin: '0.8em 0em' }} />

            <Grid container columnSpacing={1} rowSpacing={1}>
              <Grid item xs={12}>
                {toggleClassRecords && <Records_tableClassRecords />}
                {!toggleGradingSystem && (
                  <Grading_system data={data} name={name} counter={counter} />
                )}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Records;
