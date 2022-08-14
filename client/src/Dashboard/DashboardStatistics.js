import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import {
  SchoolOutlined,
  PostAdd,
  AssignmentOutlined,
} from '@mui/icons-material';

const dataStats = [
  {
    icon: (
      <Box
        sx={{
          height: '2.8em',
          width: '2.8em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '3em',
          backgroundColor: '#FF8000',
        }}
      >
        <SchoolOutlined sx={{ color: 'white', fontSize: '2em' }} />
      </Box>
    ),
    label: 'Total Enrolled Students',
    total: '223',
    update: (
      <Box
        sx={{
          display: 'flex',
          gap: '0.5em',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'relative',
          margin: '0.5em 0em 0em 0em',
          padding: '0.4em',
          backgroundColor: '#F0F0F0',
        }}
      >
        <Typography
          sx={{
            color: '#8E8E8E',
            fontSize: '0.7em',
            fontWeight: '700',
            textTransform: 'uppercase',
            height: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        ></Typography>

        <Typography
          sx={{
            color: '#8E8E8E',
            fontSize: '0.7em',
            fontWeight: '600',
            textTransform: 'uppercase',
            height: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          No New Added Student Today
        </Typography>
      </Box>
    ),
  },
  {
    icon: (
      <Box
        sx={{
          height: '2.8em',
          width: '2.8em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '3em',
          backgroundColor: '#47B753',
        }}
      >
        <PostAdd sx={{ color: 'white', fontSize: '2em' }} />
      </Box>
    ),
    label: 'Total Posted Announcements',
    total: '567',
    update: (
      <Box
        sx={{
          display: 'flex',
          gap: '0.5em',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'relative',
          margin: '0.5em 0em 0em 0em',
          padding: '0.4em',
          backgroundColor: '#EDF3F9',
          '&: hover': {
            cursor: 'pointer',
            transition: 'all 300ms',
            backgroundColor: '#D8E9F9',
          },
        }}
      >
        <Typography
          sx={{
            color: '#007FFF',
            fontSize: '0.7em',
            fontWeight: '700',
            textTransform: 'uppercase',
            height: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          (2)
        </Typography>

        <Typography
          sx={{
            color: '#007FFF',
            fontSize: '0.7em',
            fontWeight: '600',
            textTransform: 'uppercase',
            height: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          New Post Today
        </Typography>
      </Box>
    ),
  },
  {
    icon: (
      <Box
        sx={{
          height: '2.8em',
          width: '2.8em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '3em',
          backgroundColor: '#007FFF',
        }}
      >
        <AssignmentOutlined sx={{ color: 'white', fontSize: '2em' }} />
      </Box>
    ),
    label: 'Total Returned Activities',
    total: '103',
    update: (
      <Box
        sx={{
          display: 'flex',
          gap: '0.5em',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'relative',
          margin: '0.5em 0em 0em 0em',
          padding: '0.4em',
          backgroundColor: '#EDF3F9',
          '&: hover': {
            cursor: 'pointer',
            transition: 'all 300ms',
            backgroundColor: '#D8E9F9',
          },
        }}
      >
        <Typography
          sx={{
            color: '#007FFF',
            fontSize: '0.7em',
            fontWeight: '700',
            textTransform: 'uppercase',
            height: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          (4)
        </Typography>

        <Typography
          sx={{
            color: '#007FFF',
            fontSize: '0.7em',
            fontWeight: '600',
            textTransform: 'uppercase',
            height: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          Returned Activities Today
        </Typography>
      </Box>
    ),
  },
];

function DashboardStatistics() {
  return (
    <>
      {dataStats.map(function (items, index) {
        return (
          <Grid key={index} item sm={4} xs={12} sx={{ height: 'max-content' }}>
            <Box
              sx={{
                width: 'relative',
                height: 'auto',
                padding: '0.7em 0em 0em 0em',
                backgroundColor: 'white',
                //   boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: '1em',
                  width: 'relative',
                  margin: '0em 0.8em',
                }}
              >
                <Box sx={{ height: 'auto', width: 'auto' }}>{items.icon}</Box>

                <Box sx={{ height: 'auto', width: 'relative' }}>
                  <Typography
                    sx={{
                      color: '#8E8E8E',
                      fontSize: '0.8em',
                      fontWeight: '500',
                      width: 'auto',
                      height: 'auto',
                      textTransform: 'Capitalize',
                    }}
                  >
                    {items.label}
                  </Typography>

                  <Typography
                    noWrap
                    sx={{
                      color: '#615F79',
                      fontSize: '1.8em',
                      fontWeight: '600',
                      width: 'relative',
                      height: 'auto',
                      wordBreak: 'break-all',
                      textTransform: 'Uppercase',
                    }}
                  >
                    {items.total}
                  </Typography>
                </Box>
              </Box>
              {items.update}
            </Box>
          </Grid>
        );
      })}
    </>
  );
}

export default DashboardStatistics;
