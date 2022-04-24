import React, { ReactFragment, useState } from 'react';
import {
  Grid,
  Typography,
  Avatar,
  Stack,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { CameraAltOutlined } from '@mui/icons-material';
import UploadImage from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Button from '../components/Button';
import useStyle from './Styles/Personal_info_style';

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

const dataGender = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
];

function PersonalInformation() {
  const { designs } = useStyle();
  const [image, setImage] = useState(null);

  const InsertImage = styled('input')({
    display: 'none',
  });

  return (
    <>
      <Grid item md={6} xs={12}>
        <Stack>
          <Typography
            children="PERSONAL INFORMATION"
            sx={designs.PersonalInformation_Typography_Style}
          />

          {textfield.map((item, index) => (
            <Stack key={index} sx={designs.Stack_Style}>
              <Typography
                sx={designs.TextFieldLabel_Style}
                children={item.label}
              />
              <TextField
                variant="outlined"
                defaultValue={item.default}
                sx={designs.TextField_Style}
                placeholder={item.holder}
              />
            </Stack>
          ))}
        </Stack>

        {/* <FormControl variant="standard" sx={designs.FormControl_Style}>
          <Typography
            sx={{
              fontWeight: '500',
              color: '#3F3D56',
              fontSize: '0.9em',
            }}
          >
            Gender
          </Typography>

          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={selectGender}
            onChange={handleChangeGender}
            label="SelectRoom"
            disableUnderline
            sx={{
              border: '1px solid #C4C4C4',
              borderRadius: '0.3em',
              padding: '0.7em 0.9em',
              width: '92.3%',
              fontSize: '1em',
              fontWeight: '400',
              color: '#3F3D56',
              '&: hover': {
                border: '1px solid #212121',
              },
            }}
          >
            {dataGender.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {' '}
                {label}{' '}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}

        <Box className="Clear-save" sx={designs.Clear_Save_Style}>
          <Box flexGrow={1} sx={designs.BoxFlexGrow_Style} />

          <Button
            content="clear"
            variant="text"
            sx={designs.Clear_Button_Style}
          />

          <Button
            content="save"
            variant="contained"
            sx={designs.Save_Button_Style}
          />
        </Box>
      </Grid>

      <Grid item md={6} xs={12}>
        <Box className="AccountPicture" sx={designs.AccountPicture_Style}>
          <Typography
            children="Account Picture"
            sx={designs.AccountPicture_Typography_Style}
          />

          <Avatar
            src={image}
            alt="Remy Sharp"
            children="M"
            sx={designs.Avatar_Style}
          />

          <label htmlFor="contained-button-file">
            <InsertImage
              accept="image/*"
              id="contained-button-file"
              multiple
              onChange={(event) =>
                setImage(URL.createObjectURL(event.target.files[0]))
              }
              type="file"
            />
            <UploadImage
              disableRipple
              startIcon={<CameraAltOutlined />}
              variant="contained"
              component="span"
              sx={designs.UploadImage_Button_Style}
            >
              Change Profile Picture
            </UploadImage>
          </label>
        </Box>
      </Grid>
    </>
  );
}

export default PersonalInformation;
