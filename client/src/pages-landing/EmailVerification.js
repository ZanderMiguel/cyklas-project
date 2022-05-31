import React from "react";
import Logo from "../assets/ImageJaven/CyklasLogo.png";
import EmailVer from "../assets/ImageJaven/EmailVerification.png";

function EmailVerification() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1em",
        height: "100vh",
        padding: "2em 0em",
        width: "100%",
      }}
    >
      <img src={Logo} alt="Logo" style={{ height: "3em" }} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1em",
          backgroundColor: "white",
          width: "auto",
          height: "auto",
          padding: "4em 0em 1.5em 0em",
          borderRadius: "0.3em",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "auto",
            width: "60%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={EmailVer}
              alt="EmailVer"
              style={{ height: "5em", width: "6em" }}
            />
          </div>

          <div
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h6
              style={{
                width: "max-content",
                color: "#3F3D56",
                fontSize: "1.1em",
                fontFamily: "Poppins",
                fontWeight: "500",
                textAlign: "center",
                marginBottom: "1em",
                paddingBottom: "0.5em",
                borderBottom: "1px solid #DBDBDB",
              }}
            >
              Verify your email address
            </h6>
          </div>

          <p
            style={{
              color: "#3F3D56",
              fontSize: "0.8em",
              fontFamily: "Poppins",
              fontWeight: "400",
              textAlign: "center",
              margin: "0.3em 0em 2.5em 0em",
            }}
          >
            In order for you to create a new password, you need to confirm your
            email address first.
          </p>

          <button
            style={{
              backgroundColor: "#007FFF",
              color: "white",
              fontSize: "0.8em",
              fontFamily: "Poppins",
              fontWeight: "600",
              border: "none",
              padding: "0.7em 0em",
              borderRadius: "0.3em",
              //   "&: hover": {
              //     transition: "all 250ms",
              //     cursor: "pointer",
              //     backgroundColor: "#0058B2",
              //   },
            }}
          >
            Verify Email Address
          </button>
        </div>
        <p
          style={{
            color: "#8E8E8E",
            fontSize: "0.7em",
            fontFamily: "Poppins",
            fontWeight: "500",
            fontStyle: "italic",
            textAlign: "center",
            margin: "3em 0em 0em 0em",
            borderTop: "1px dashed #DBDBDB",
            width: "80%",
            padding: "2em 0em 0em 0em",
          }}
        >
          If you did not sign up for this account or requested <br /> a password
          reset, you can ignore this message.
        </p>
      </div>

      <p
        style={{
          color: "#3F3D56",
          fontSize: "0.7em",
          fontFamily: "Poppins",
          fontWeight: "500",
          textAlign: "center",
          margin: "1.5em 0em 0em 0em",
          padding: "0em 0em 0em 0em",
        }}
      >
        This is a generated email, so you do not have to reply. <br />
        Bilibid Viejo Street, Quiapo Manila <br />
        CyKlas, CyCrowd co.
      </p>

      <a
        href="https://cyklas.tech/"
        style={{
          color: "#007FFF",
          fontSize: "0.7em",
          fontFamily: "Poppins",
          fontWeight: "500",
          textAlign: "center",
          margin: "0em 0em 0em 0em",
          padding: "0em 0em 0em 0em",
          textDecoration: "none",
        }}
      >
        www.cyklas.tech
      </a>
    </div>
  );
}

export default EmailVerification;
