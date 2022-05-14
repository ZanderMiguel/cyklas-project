import React from 'react';
import NoContent from '../assets/ImageJaven/NoContent.png';
import {
  Box,
  Typography,
  Input,
  IconButton,
  Avatar,
  Tooltip,
} from '@mui/material';
import {
  PeopleAlt,
  Search,
  KeyboardVoiceOutlined,
  MicOffOutlined,
} from '@mui/icons-material';
import AvatarIcon from '../assets/ImageJaven/Avatar.png';

const dataMember = [
  {
    avatar: <Avatar alt="Remy Sharp" src={AvatarIcon} />,
    memberName: 'Paul Rudd (You)',
  },
  {
    avatar: <Avatar alt="Remy Sharp" src={AvatarIcon} />,
    memberName: 'Tom Hiddleston',
  },
  {
    avatar: <Avatar alt="Remy Sharp" src={AvatarIcon} />,
    memberName: 'Sebastian Stan',
  },
  {
    avatar: <Avatar alt="Remy Sharp" src={AvatarIcon} />,
    memberName: 'Robert Downey Jr.',
  },
  {
    avatar: <Avatar alt="Remy Sharp" src={AvatarIcon} />,
    memberName: 'Mark Ruffalo',
  },
  {
    avatar: <Avatar alt="Remy Sharp" src={AvatarIcon} />,
    memberName: 'Elizabeth Olsen',
  },
  {
    avatar: <Avatar alt="Remy Sharp" src={AvatarIcon} />,
    memberName: 'Josh Brolin',
  },
];

function Members({ members }) {
  return (
    <div
      style={{
        width: '23.9rem',
        height: '98vh',
      }}
    >
      <Box
        sx={{
          width: 'relative',
          height: '2.5em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8em',
          padding: '0em 1em',
          margin: '0.5em 0.5em 1em 0.5em',
          backgroundColor: '#31353D',
          borderRadius: '0.4em',
          borderBottom: '1px solid #464646',
        }}
      >
        <PeopleAlt sx={{ fontSize: '1.3em', color: '#DEDEDE' }} />

        <Typography
          children="Members"
          sx={{
            height: 'relative',
            width: 'auto',
            color: '#DEDEDE',
            fontSize: '0.8em',
            fontWeight: '600',
            textAlign: 'center',
            '&: hover': {
              cursor: 'default',
            },
          }}
        />
      </Box>

      <Box
        sx={{
          border: '1px solid transparent',
          backgroundColor: '#282B31',
          borderRadius: '0.3em',
          padding: '0em 1em 0em 0em',
          margin: '0em 1.2em',
          display: 'flex',
          gap: '0.5em',
          alignItems: 'center',
          height: 'auto',
          width: 'relative',
          '&: hover': {
            border: '1px solid #007FFF',
            transition: 'all 300ms',
          },
        }}
      >
        <IconButton
          aria-label="search"
          sx={{
            borderRadius: '0.2em 0em 0em 0.2em',
            backgroundColor: 'transparent',
            paddingLeft: '0.4em',
            height: 'auto',
            width: '1.5em',
            '&: hover': {
              backgroundColor: '#43464C',
            },
          }}
        >
          <Search
            sx={{
              color: '#82818E',
              fontSize: '0.8em',
            }}
          />
        </IconButton>

        <Input
          variant="standard"
          placeholder="Search member..."
          disableUnderline
          sx={{
            width: '100%',
            backgroundColor: 'transparent',
            fontSize: '0.8em',
            fontWeight: '500',
            color: '#DEDEDE',
          }}
        />
      </Box>

      <Box
        sx={{
          width: 'relative',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          padding: '0em 1.5em',
          margin: '1.5em 0em 0.3em 0em',
        }}
      >
        <Typography
          children="Incall"
          sx={{
            color: '#DEDEDE',
            fontSize: '0.8em',
            fontWeight: '500',
            height: 'max-content',
            width: 'auto',
            flexGrow: 1,
          }}
        />

        <Typography
          children="8"
          sx={{
            color: '#DEDEDE',
            fontSize: '0.8em',
            fontWeight: '500',
            height: 'max-content',
            width: 'auto',
            textAlign: 'right',
          }}
        />
      </Box>

      <Box
        sx={{
          width: 'relative',
          height: '30em',
          overflowY: 'auto',
        }}
      >
        {members.current.map(function (items, index) {
          return (
            <Box
              key={index}
              sx={{
                width: 'relative',
                height: 'auto',
                display: 'flex',
                gap: '0.5em',
                alignItems: 'center',
                padding: '0.2em 0.4em 0.2em 0.2em',
                margin: '0.3em 1.3em',
                backgroundColor: '#22252B',
                borderRadius: '0.3em',
                // "&: hover":
                //   backgroundColor: "#282B31",
                //   transition: "all 300ms"
                // }
              }}
            >
              <Avatar
                src={items.camera}
                alt={items.memberName[0].toUpperCase()}
              />

              <Typography
                children={items.memberName}
                sx={{
                  color: 'white',
                  fontSize: '0.7em',
                  fontWeight: '500',
                  height: 'max-content',
                  width: '14em',
                  '&: hover': {
                    cursor: 'default',
                  },
                }}
              />

              <Box flexGrow={1} />

              <Tooltip title="This member's mic is in mute" placement="top">
                <Box
                  sx={{
                    border: '1px solid #3A3E46',
                    height: '2em',
                    width: '2em',
                    padding: '0.3em',
                    backgroundColor: '#3A3E46',
                    borderRadius: '5em',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <MicOffOutlined
                    sx={{ fontSize: '1.2em', color: '#DEDEDE' }}
                  />
                </Box>
              </Tooltip>
            </Box>
          );
        })}
      </Box>
    </div>
  );
}

export default Members;
