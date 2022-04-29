import React, { useState } from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Avatar,
  IconButton,
  Tooltip,
  Stack,
  TextField,
} from '@mui/material';
import UploadImage from '@mui/material/Button';
import { CameraAltOutlined, AccountBox, Lock } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Background15 from '../assets/ImageJaven/Background15.png';
import Input from '../components/Input';

const textfield = [
  {
    label: 'First Name',
    value: 'firstname',
    holder: 'Enter first name...',
    default: 'Mark',
  },
  {
    label: 'Last Name',
    value: 'lastname',
    holder: 'Enter last name...',
    default: 'Andrei',
  },
];

function Settings() {
  const InsertImage = styled('input')({
    display: 'none',
  });

  const [imgSrc, setImgSrc] = useState(null);

  const [showPasswordCurrent, setShowPasswordCurrent] = React.useState(false);
  const [showPasswordNew, setShowPasswordNew] = React.useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);

  const handleShowPasswordCurrent = () =>
    setShowPasswordCurrent(
      (prevShowPasswordCurrent) => !prevShowPasswordCurrent
    );

  const handleShowPasswordNew = () =>
    setShowPasswordNew((prevShowPasswordNew) => !prevShowPasswordNew);

  const handleShowPasswordConfirm = () =>
    setShowPasswordConfirm(
      (prevShowPasswordConfirm) => !prevShowPasswordConfirm
    );

  const [myApi, setMyApi] = React.useState(new Map());
  const handleChangeCurrent = (e) => {
    setMyApi(myApi.set([e.target.name], e.target.value));
  };

  const handleChangeNew = (e) => {
    setMyApi(myApi.set([e.target.name], e.target.value));
  };

  const handleChangeConfirm = (e) => {
    setMyApi(myApi.set([e.target.name], e.target.value));
  };
  return (
    <Container maxWidth="lg">
      <Grid container sx={{ margin: '0.5em 0em' }}>
        <Grid
          item
          xs={12}
          sx={{
            height: 'auto',
            marginBottom: '0.8em',
            boxShadow:
              'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
          }}
        >
          <Box
            sx={{
              width: 'relative',
              height: 'auto',
              padding: '1.5em 1em',
              backgroundImage: `url(${Background15})`,
              backgroundSize: 'cover',
            }}
          >
            <Box
              sx={{
                height: 'auto',
                width: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '1em',
                backgroundColor: 'transparent',
              }}
            >
              <div>
                <label htmlFor="getFile">
                  <Tooltip title="Change Account Picture" placement="top">
                    {imgSrc ? (
                      <Avatar
                        src={imgSrc}
                        sx={{
                          width: '3.5em',
                          height: '3.5em',
                          '&: hover': {
                            cursor: 'pointer',
                            boxShadow:
                              'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
                          },
                        }}
                      />
                    ) : (
                      <Avatar
                        src={JSON.parse(localStorage.userData).data.user.image}
                        sx={{
                          width: '3.5em',
                          height: '3.5em',
                          '&: hover': {
                            cursor: 'pointer',
                            boxShadow:
                              'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
                          },
                        }}
                      />
                    )}
                  </Tooltip>
                </label>
                <input
                  type="file"
                  name="image"
                  id="getFile"
                  style={{ display: 'none' }}
                  onChange={(event) => {
                    console.log(URL.createObjectURL(event.target.files[0]));
                    setImgSrc(URL.createObjectURL(event.target.files[0]));
                  }}
                />
              </div>

              <div
                style={{
                  height: 'auto',
                  width: 'auto',
                  flexGrow: 1,
                }}
              >
                <Typography
                  sx={{
                    height: 'max-content',
                    width: 'relative',
                    fontSize: '1.3em',
                    fontWeight: '600',
                    color: '#3F3D56',
                    lineHeight: '1.2em',
                  }}
                >
                  {`${JSON.parse(localStorage.userData).data.user.firstName} ${
                    JSON.parse(localStorage.userData).data.user.lastName
                  }`}
                </Typography>

                <Typography
                  sx={{
                    marginTop: '0.3em',
                    height: 'max-content',
                    width: 'relative',
                    fontSize: '0.8em',
                    fontWeight: '500',
                    color: '#8E8E8E',
                  }}
                >
                  {JSON.parse(localStorage.userData).data.user.emailAddress}
                </Typography>
              </div>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            height: 'auto',
            marginBottom: '0.8em',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
          }}
        >
          <Box sx={{ width: 'relative', height: 'auto', padding: '1.5em 1em' }}>
            <Box
              sx={{
                width: 'realtive',
                height: 'auto',
                display: 'flex',
                gap: '0.6em',
                alignItems: 'center',
              }}
            >
              <AccountBox sx={{ color: '#6A6882', fontSize: '1.7em' }} />

              <Typography
                children="Personal Information"
                sx={{
                  color: '#3F3D56',
                  fontSize: '1em',
                  fontWeight: '600',
                  textTransform: 'Uppercase',
                  height: 'max-content',
                  width: 'relative',
                }}
              />
            </Box>

            {textfield.map((item, index) => (
              <Stack key={index} sx={{ marginTop: '1em' }}>
                <Typography
                  children={item.label}
                  sx={{
                    fontWeight: '500',
                    color: '#3F3D56',
                    fontSize: '0.8em',
                    marginBottom: '0.3em',
                  }}
                />
                <TextField
                  variant="outlined"
                  defaultValue={item.default}
                  placeholder={item.holder}
                  inputProps={{
                    style: {
                      height: '0.5em',
                      fontSize: '0.9em',
                      color: '#3F3D56',
                      fontWeight: 500,
                    },
                  }}
                />
              </Stack>
            ))}
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            height: 'auto',
            marginBottom: '0.8em',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
          }}
        >
          <Box sx={{ width: 'relative', height: 'auto', padding: '1.5em 1em' }}>
            <Box
              sx={{
                width: 'realtive',
                height: 'auto',
                display: 'flex',
                gap: '0.6em',
                alignItems: 'center',
              }}
            >
              <Lock sx={{ color: '#6A6882', fontSize: '1.7em' }} />

              <Typography
                children="Account Information"
                sx={{
                  color: '#3F3D56',
                  fontSize: '1em',
                  fontWeight: '600',
                  textTransform: 'Uppercase',
                  height: 'max-content',
                  width: 'relative',
                }}
              />
            </Box>

            <Stack sx={{ marginTop: '1em' }}>
              <Typography
                children="Email Address"
                sx={{
                  fontWeight: '500',
                  color: '#3F3D56',
                  fontSize: '0.8em',
                  marginBottom: '0.1em',
                }}
              />

              <Typography
                children="The email address you use to access Cyklas."
                sx={{
                  fontWeight: '500',
                  color: '#8E8E8E',
                  fontSize: '0.7em',
                  marginBottom: '0.6em',
                }}
              />

              <TextField
                variant="outlined"
                defaultValue="markandrei@gmail.com"
                placeholder="Enter your email address..."
                sx={{}}
                inputProps={{
                  style: {
                    height: '0.5em',
                    fontSize: '0.9em',
                    color: '#3F3D56',
                    fontWeight: 500,
                  },
                }}
              />
            </Stack>

            <Stack sx={{ marginTop: '1em' }}>
              <Typography
                children="Current Password"
                sx={{
                  fontWeight: '500',
                  color: '#3F3D56',
                  fontSize: '0.8em',
                  marginBottom: '0.1em',
                }}
              />

              <Typography
                children="The current password you use to access Cyklas."
                sx={{
                  fontWeight: '500',
                  color: '#8E8E8E',
                  fontSize: '0.7em',
                  marginBottom: '0.6em',
                }}
              />

              <Input
                name="password"
                placeholder=" Enter your current password..."
                type={showPasswordCurrent ? 'text' : 'password'}
                handleShowPassword={handleShowPasswordCurrent}
                onChange={handleChangeCurrent}
                sx={{}}
                inputProps={{
                  style: {
                    height: '0.5em',
                    fontSize: '0.9em',
                    color: '#3F3D56',
                    fontWeight: 500,
                  },
                }}
              />
            </Stack>

            <Stack sx={{ marginTop: '1em' }}>
              <Typography
                children="New Password"
                sx={{
                  fontWeight: '500',
                  color: '#3F3D56',
                  fontSize: '0.8em',
                  marginBottom: '0.3em',
                }}
              />
              <Input
                name="password"
                placeholder=" Enter your new password..."
                type={showPasswordNew ? 'text' : 'password'}
                handleShowPassword={handleShowPasswordNew}
                onChange={handleChangeNew}
                sx={{}}
                inputProps={{
                  style: {
                    height: '0.5em',
                    fontSize: '0.9em',
                    color: '#3F3D56',
                    fontWeight: 500,
                  },
                }}
              />
            </Stack>

            <Stack sx={{ marginTop: '1em' }}>
              <Typography
                children="Confirm New Password"
                sx={{
                  fontWeight: '500',
                  color: '#3F3D56',
                  fontSize: '0.8em',
                  marginBottom: '0.3em',
                }}
              />
              <Input
                name="password"
                placeholder=" Re-enter your new password..."
                type={showPasswordConfirm ? 'text' : 'password'}
                handleShowPassword={handleShowPasswordConfirm}
                onChange={handleChangeConfirm}
                sx={{}}
                inputProps={{
                  style: {
                    height: '0.5em',
                    fontSize: '0.9em',
                    color: '#3F3D56',
                    fontWeight: 500,
                  },
                }}
              />
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              width: 'relative',
              height: 'auto',
              display: 'flex',
              gap: '0.5em',
              justifyContent: 'flex-end',
              padding: '1.5em 0em',
            }}
          >
            <Button
              variant="contained"
              children="Clear"
              sx={{
                backgroundColor: 'transparent',
                color: '#4F4D67',
                fontSize: '0.8em',
                fontWeight: '600',
                textTransform: 'Capitalize',
                boxShadow: 'none',
                '&: hover': {
                  boxShadow: 'none',
                  backgroundColor: '#E7E7E7',
                },
              }}
            />

            <Button
              variant="contained"
              children="Save Changes"
              sx={{
                backgroundColor: '#4CAF50',
                color: 'white',
                fontSize: '0.8em',
                fontWeight: '600',
                textTransform: 'Capitalize',
                boxShadow: 'none',
                '&: hover': {
                  boxShadow: 'none',
                  backgroundColor: '#43A047',
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Settings;
