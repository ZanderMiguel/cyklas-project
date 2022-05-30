import React, { useState } from "react";
import Dialogform from "../components/Dialogform";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Grid,
  Box,
  Typography,
  Button,
  Divider,
  TextField,
  Stack,
  Input,
} from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import useStyle from "./Styles/Add_member_style";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Add_member({ open, close, maxWidth }) {
  const location = useLocation();
  const [copy, setCopy] = useState(false);
  const { designs } = useStyle();

  return (
    <div>
      <ToastContainer />
      <Dialogform
        open={open}
        close={close}
        maxWidth={maxWidth}
        divider
        title="Add member"
      >
        {/* <Grid item xs={12}>
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
              boxShadow: 'none',
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
        </Grid> */}

        <Box
          sx={{
            padding: "0em 1.5em 1.5em 1.5em",
          }}
        >
          <Typography
            children="Copy the link of this room and share it with your class in order for them to join."
            sx={{
              color: "#8E8E8E",
              fontSize: "0.8em",
              fontWeight: "500",
            }}
          />
        </Box>
        <Stack sx={designs.Stack_Style}>
          <Box
            sx={{
              height: "auto",
              width: "relative",
              display: "flex",
              gap: "0.8em",
            }}
          >
            <Box sx={{ height: "auto", width: "relative" }}>
              <Typography
                sx={designs.TextFieldLabel_Style}
                children="Classroom ID"
              />
              <Input
                disableUnderline
                readOnly
                defaultValue={location.pathname.replace("/rooms/", "")}
                sx={{
                  width: "100%",
                  fontWeight: "500",
                  color: "white",
                  fontSize: "0.9em",
                  borderRadius: "0.2em",
                  padding: "0.1em 0.5em 0em 0.5em",
                  backgroundColor: "#C3C3C3",
                }}
              />
              {/* <TextField
                variant="standard"
                disabled
                sx={designs.TextField2_Style}
                defaultValue={location.pathname.replace("/rooms/", "")}
                inputProps={{ color: "white" }}
              /> */}
            </Box>

            <Box
              sx={{
                height: "auto",
                width: "relative",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <CopyToClipboard
                text={location.pathname.replace("/rooms/", "")}
                onCopy={() => {
                  setCopy(true);
                }}
              >
                <Button
                  variant="contained"
                  onClick={() =>
                    toast.info("Link copied!", {
                      position: "bottom-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    })
                  }
                  startIcon={<ContentCopy />}
                  sx={{
                    border: "1px solid transparent",
                    backgroundColor: "transparent",
                    height: "max-content",
                    boxShadow: "none",
                    color: "#0069D3",
                    fontSize: "0.8em",
                    fontWeight: "600",
                    textTransform: "Capitalize",
                    padding: "0.3em 1.5em",
                    "&: hover": {
                      border: "1px solid #005DC3",
                      backgroundColor: "transparent",
                      boxShadow: "none",
                    },
                  }}
                >
                  Copy Link
                </Button>
              </CopyToClipboard>
            </Box>
          </Box>
        </Stack>
      </Dialogform>
    </div>
  );
}

export default Add_member;
