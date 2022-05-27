import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function Dialogform({
  children,
  title,
  btn,
  open,
  close,
  maxWidth,
  divider,
  ...rest
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Dialog
        fullScreen={fullScreen && false}
        open={open}
        onClose={close}
        maxWidth={maxWidth}
        {...rest}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            padding: "0.8em 1em 1.5em 1.8em",
          }}
        >
          {divider && (
            <DialogTitle
              sx={{
                fontWeight: "600",
                fontSize: "1.1em",
                color: "#3F3D56",
                height: "max-content",
                padding: "0em",
              }}
            >
              {title}
            </DialogTitle>
          )}
          <div style={{ flexGrow: 1 }} />
          <IconButton
            onClick={close}
            sx={{
              height: "1.2em",
              width: "1.2em",
            }}
          >
            <CloseIcon sx={{ fontSize: "0.8em" }} />
          </IconButton>
        </Grid>

        <DialogContent sx={{ padding: "0em", height: "auto" }}>
          {children}
        </DialogContent>
        {btn && (
          <DialogActions sx={{ padding: "0.5em 1.5em 1.5em 0.8em" }}>
            {btn}
          </DialogActions>
        )}
      </Dialog>
    </>
  );
}

export default Dialogform;
