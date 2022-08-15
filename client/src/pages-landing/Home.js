import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import "./Styles/Landingpage.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { Typography, Box, Paper, Grid } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Flatimage from "../assets/Images/illustration.svg";
import MaleLogo from "../assets/Images/avatar_male.png";
import Register from "../Form_content/Register";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStyle from "./Styles/Home_styles";

function Home() {
  const [isPending, setIsPending] = useState(false);
  const [opendialog, setOpenDialog] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState(null);

  const { designs } = useStyle();

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailAddress && password) {
      setIsPending(true);
      axios
        .post("http://localhost:5000/login", {
          emailAddress: emailAddress,
          password: password,
        })
        .then((response) => {
          if (response.data.status === "error") {
            setNotif(
              toast.error("Invalid Username or Password!", {
                position: toast.POSITION.TOP_CENTER,
              })
            );
            setIsPending(false);
          } else {
            response.data.token &&
              localStorage.setItem("token", response.data.token);
            localStorage.setItem("userData", JSON.stringify(response.data));
            axios.post("http://localhost:5000/user/update", {
              userID: response.data.data.user._id,
              imageUrl: response.data.data.imageUrl,
            });
            setIsPending(false);
          }
        })
        .catch((err) => {
          setIsPending(false);
          setNotif(
            toast.error(`${err.message}`, {
              position: toast.POSITION.TOP_CENTER,
            })
          );
        });
    }
  };

  return (
    <>
      {localStorage.userData && localStorage.token ? (
        <Redirect from="/home/login" to="/dashboard" />
      ) : (
        <>
          <ToastContainer />
          {/* Left Side */}
          <Box sx={designs.firstBox}>
            <Box className="left">
              <Typography variant="h4" sx={designs.left_first}>
                Can't go to school? <br />
                No problem! We can <br />
                bring school to you.
              </Typography>
              <Typography
                children="The best Website for Virtual Class"
                sx={designs.left_second}
              />
              <Button
                content="Create your account now"
                variant="contained"
                sx={designs.btn_Create}
                startIcon={<AddCircleOutlineOutlinedIcon />}
                onClick={handleClickOpen}
              />

              <img src={Flatimage} alt="flat" style={designs.left_Image} />
            </Box>

            {opendialog && (
              <Register
                open={opendialog}
                close={handleClose}
                setOpenDialog={setOpenDialog}
                setNotif={setNotif}
              />
            )}

            {/* Right Side */}
            <Paper
              elevation={3}
              sx={designs.paper_Style}
              type="submit"
              form="loginForm"
            >
              <form onSubmit={handleSubmit} id="loginForm">
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <img
                      src={MaleLogo}
                      alt="avatar"
                      style={designs.paper_Logo}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      type="email"
                      placeholder="Enter email address"
                      value={emailAddress}
                      onChange={(event) => setEmailAddress(event.target.value)}
                      autoFocus
                      required
                      size="medium"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      name="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder=" Enter password"
                      type={showPassword ? "text" : "password"}
                      handleShowPassword={handleShowPassword}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">
                      <Link to="/forgotpassword" style={designs.paper_Link}>
                        Forgot password?
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      borderRadius="10px"
                      children="login"
                      type="submit"
                      sx={designs.paper_btn_Submit}
                    />
                  </Grid>
                </Grid>
              </form>
            </Paper>
            <Footer />
          </Box>
        </>
      )}
    </>
  );
}

export default Home;
