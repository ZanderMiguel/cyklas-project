import React from "react";
import Dialogform from "../components/Dialogform";
import { Grid, Box, Typography, Button } from "@mui/material";
import { CallEnd } from "@mui/icons-material";

function DeletingActivityConfirmation({ open, close, maxWidth }) {
  return (
    <div>
      <Dialogform
        open={open}
        close={close}
        maxWidth={maxWidth}
        btn={
          <Box
            sx={{
              display: "flex",
              gap: "1em",
              height: "auto",
              width: "relative",
            }}
          >
            <Button
              onClick={close}
              variant="contained"
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                color: "#3F3D56",
                fontSize: "0.8em",
                fontWeight: "600",
                textTransform: "Capitalize",
                padding: "0.3em 3em",
                boxShadow: "none",
                "&: hover": {
                  backgroundColor: "transparent",
                  boxShadow: "none",
                },
              }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F74747",
                color: "white",
                fontSize: "0.8em",
                fontWeight: "600",
                textTransform: "Capitalize",
                padding: "0.3em 3em",
                boxShadow: "none",
                "&: hover": {
                  backgroundColor: "#F02D2D",
                },
              }}
            >
              Delete
            </Button>
          </Box>
        }
      >
        <Grid item xs={12} sx={{ padding: "0em 2em" }}>
          <Typography
            sx={{
              color: "3F3D56",
              fontSize: "1.1em",
              fontWeight: "600",
              width: "relative",
              height: "max-content",
            }}
          >
            Deleting this activity will also delete any file attachments
          </Typography>

          <Typography
            sx={{
              margin: "0.5em 0em 2em 0em",
              color: "3F3D56",
              fontSize: "0.8em",
              fontWeight: "500",
              width: "relative",
              height: "max-content",
            }}
          >
            Are you sure you want to delete this activity?
          </Typography>
        </Grid>
      </Dialogform>
    </div>
  );
}

export default DeletingActivityConfirmation;
