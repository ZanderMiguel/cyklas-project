import React from 'react'
import { Box, IconButton, Input } from "@mui/material";
import { Search } from "@mui/icons-material";

function DashboardSearchbar() {
  return (
    <>
    <Box
        sx={{
          border: '1px solid #DBDBDB',
          backgroundColor: 'white',
          borderRadius: '0.3em',
          padding: '0.3em 1em 0.3em 0.8em',
          display: 'flex',
          gap: '0.5em',
          alignItems: 'center',
          height: 'auto',
          width: '100%',
          '&: hover': {
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            transition: 'all 300ms',
          },
        }}>
            <IconButton
              aria-label="search"
              sx={{
                backgroundColor: 'transparent',
                height: '1em',
                width: '1em',
                '&: hover': {
                  backgroundColor: '#FCF9FB',
                },
              }}>
              <Search
                sx={{
                  color: '#82818E',
                  fontSize: '0.9em',
                }}/>
            </IconButton>

            <Input
              variant="standard"
              placeholder="Search room..."
              disableUnderline
              sx={{
                width: '100%',
                backgroundColor: 'transparent',
                fontSize: '0.8em',
                fontWeight: '500',
                color: '#3F3D56',
              }}/>
    </Box>
    </>
    
  )
}

export default DashboardSearchbar