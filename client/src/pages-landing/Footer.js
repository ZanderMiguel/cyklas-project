import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Divider,
  CssBaseline,
  IconButton,
  Button,
} from '@mui/material';
import useStyle from './Styles/Contacts_style';
import CyklasLogo from '../assets/ImageJaven/CyklasLogo.png';
import Facebook from '../assets/ImageJaven/Facebook.png';
import Instagram from '../assets/ImageJaven/Instagram.png';
import Twitter from '../assets/ImageJaven/Twitter.png';
import Youtube from '../assets/ImageJaven/Youtube.png';
import Terms_condition from './Terms_condition';
import Privacy_policy from './Privacy_policy';

function Footer() {
  const { designs } = useStyle();
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  return (
    <>
      <CssBaseline />
      <Box className="Footer" sx={designs.Footer_Style}>
        <Divider sx={designs.Divider_Style} />

        <Box className="Content" sx={designs.Content_Style}>
          <Box className="Content-sub" sx={designs.Content_Sub_Style}>
            <Box
              className="CyklasLogo-Cyklas"
              sx={designs.CyklasLogo_Cyklas_Style}
            >
              <Box className="Cyklas-logo" sx={designs.Cyklas_Logo_Style}>
                <Box
                  className="Cyklas-logo-image"
                  sx={designs.Cyklas_Logo_Image_Style}
                >
                  <img
                    src={CyklasLogo}
                    style={{
                      height: '70px',
                    }}
                  />

                  <Typography sx={designs.CompanyAddress_Typography_Style}>
                    Bilibid Viejo Street, Quiapo Manila.
                  </Typography>

                  <Typography sx={designs.CompanyEmailAddress_Typography_Style}>
                    cycrowd@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box className="Cyklas" sx={designs.Cyklas_Style}>
                <Typography sx={designs.Cyklas_Typography_Style}>
                  CykLas
                </Typography>

                <Typography sx={designs.Home_TypographyButton_Style}>
                  Home
                </Typography>

                <Typography sx={designs.Services_TypographyButton_Style}>
                  Services
                </Typography>

                <Typography sx={designs.About_TypographyButton_Style}>
                  About
                </Typography>

                <Typography sx={designs.Contacts_TypographyButton_Style}>
                  Contacts
                </Typography>
              </Box>
            </Box>

            <Box
              className="Services-Socials"
              sx={designs.Services_Socials_Style}
            >
              <Box className="Services" sx={designs.Services_Style}>
                <Typography sx={designs.Services_Typography_Style}>
                  Services
                </Typography>

                <Typography sx={designs.Classroom_TypographyButton_Style}>
                  CyClassroom
                </Typography>

                <Typography sx={designs.Quizlit_TypographyButton_Style}>
                  QuizLit
                </Typography>

                <Typography sx={designs.Telecon_TypographyButton_Style}>
                  Telecon (Video Conference)
                </Typography>
              </Box>

              <Box className="Socials" sx={designs.Socials_Style}>
                <Typography sx={designs.FollowUs_Typography_Style}>
                  Follow us on
                </Typography>

                <Box
                  className="Social-buttons"
                  sx={designs.SocialButtons_Style}
                >
                  <IconButton
                    aria-label="facebook"
                    sx={designs.Facebook_IconButton_Style}
                  >
                    <img
                      src={Facebook}
                      alt="Facebook"
                      style={{
                        height: '30px',
                        width: '30px',
                      }}
                    />
                  </IconButton>

                  <IconButton
                    aria-label="instagram"
                    sx={designs.Instagram_IconButton_Style}
                  >
                    <img
                      src={Instagram}
                      alt="Instagram"
                      style={{
                        height: '30px',
                        width: '30px',
                      }}
                    />
                  </IconButton>

                  <IconButton
                    aria-label="twitter"
                    sx={designs.Twitter_IconButton_Style}
                  >
                    <img
                      src={Twitter}
                      alt="Twitter"
                      style={{
                        height: '31px',
                        width: '31px',
                      }}
                    />
                  </IconButton>

                  <IconButton
                    aria-label="youtube"
                    sx={designs.Youtube_IconButton_Style}
                  >
                    <img
                      src={Youtube}
                      alt="Youtube"
                      style={{
                        height: '34px',
                        width: '34px',
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="Content2" sx={designs.Content2_Style}>
        <Box className="Content2-sub" sx={designs.Content2_Sub_Style}>
          <Box className="TC-PP" sx={designs.TC_PP_Style}>
            <Typography
              onClick={() => setTerms(true)}
              sx={designs.TermsCondition_Typography_Style}
            >
              Terms & Conditions
            </Typography>
            {terms && (
              <Terms_condition
                open={terms}
                close={() => setTerms(false)}
                btn={
                  <Button variant="text" onClick={() => setTerms(false)}>
                    Agree
                  </Button>
                }
              />
            )}

            <Divider
              orientation="vertical"
              flexItem
              sx={designs.DividerV_Style}
            />

            <Typography
              onClick={() => setPrivacy(true)}
              sx={designs.PrivacyPolicy_Typography_Style}
            >
              Privacy Policy
            </Typography>
            {privacy && (
              <Privacy_policy
                open={privacy}
                close={() => setPrivacy(false)}
                btn={
                  <Button variant="text" onClick={() => setPrivacy(false)}>
                    Agree
                  </Button>
                }
              />
            )}
          </Box>

          <Box
            className="All-rights-reserved"
            sx={designs.All_Rights_Reserved_Style}
          >
            <Box
              className="All-rights-reserved-sub"
              sx={designs.All_Rights_Reserved_Sub_Style}
            >
              <Typography sx={designs.All_Rights_Reserved_Typography_Style}>
                &copy; 2022 CyKlas. All rights reserved.
              </Typography>
            </Box>

            <Typography sx={designs.Cycrowd_Typography_Style}>
              Website by CyCrowd
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
