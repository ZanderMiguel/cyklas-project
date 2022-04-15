import React from 'react';
import Dialogform from '../components/Dialogform';
import { Typography, Divider, Button } from '@mui/material';
import { CookieOutlined, FactCheckOutlined, Gavel, OpenInBrowser, Preview, NotInterested, RequestPageOutlined, RemoveModeratorOutlined, ReportOutlined, ContactSupportOutlined } from "@mui/icons-material";

function Terms_condition({ open, close, btn }) {
  return (
    <Dialogform
      open={open}
      close={close}
      btn={
            <Button onClick={close} variant="contained" sx = {{ 
                backgroundColor: "#0276EA",
                boxShadow: "none",
                color: "white",
                fontSize: "0.8em",
                fontWeight: "600",
                textTransform: "Capitalize",
                padding: "0.3em 3em",
                "&: hover": {
                  backgroundColor: "#056dd4",
                  boxShadow: "none",
                }
                }}>
              Agree
            </Button>
      }
      title="TERMS & CONDITIONS"
      divider
    >
      <p style={{ padding: '1em 1.5em' }}>

        <div style = {{
          padding: "0em 1em"
        }}>
            <p style = {{ fontSize: "1em", fontWeight: "600", color: "#3F3D56", wordSpacing: "0.2em"}}>
            These terms of service outline the rules and regulations for the use of
            Cycrowd's Website.
          </p>

          <p style = {{ fontSize: "0.9em", fontWeight: "500", color: "#3F3D56", wordSpacing: "0.2em"}}>
            Cycrowd is located at:
          </p>
          <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#3F3D56", wordSpacing: "0.2em"}}>
            Bilibid Viejo Street, Quiapo Manila., Philippines
          </p>
          <br />
          <Divider/>
          <p style = {{ fontSize: "0.9em", fontWeight: "600", color: "#3F3D56", wordSpacing: "0.2em"}}>
            By accessing this website, we assume you accept these terms of service in full. Do not
            continue to use Cycrowd's website if you do not accept all of the terms
            of service stated on this page.
          </p>
          
          <p style = {{ fontSize: "0.9em", fontWeight: "500", color: "#3F3D56", wordSpacing: "0.2em"}}>
            The following terminology applies to these Terms of Service, Privacy
            Statement and Disclaimer Notice and any or all Agreements: "Client",
            "You" and "“Your" refers to you, the person accessing this website and
            accepting the Company's terms of service. "The Company", "Ourselves",
            "We", "Our" and "Us", refers to our Company. "Party", "Parties", or
            "Us", refers to both the Client and ourselves, or either the Client or
            ourselves. All terms refer to the offer, acceptance and consideration of
            payment necessary to undertake the process of our assistance to the
            Client in the most appropriate manner, whether by formal meetings of a
            fixed duration, or any other means, for the express purpose of meeting
            the Client's needs in respect of provision of the Company's stated
            services/products, in accordance with and subject to, prevailing law of
            Philippines. Any use of the above terminology or other words in the
            singular, plural, capitalisation and/or he/she or they, are taken as
            interchangeable and therefore as referring to same.
          </p>
        </div>
        
        
        <br />
        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <div style = {{
          display: "flex",
          alignItems: "center",
          gap: "0.5em"
        }}>
          <CookieOutlined sx = {{
            color: "#007FFF",
            fontSize: "1.6em"
          }}/>
          <Typography children="Cookies" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        </div>
        
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
          We employ the use of cookies. By using Cycrowd's website you consent to
          the use of cookies in accordance with Cycrowd's privacy policy.
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
          Most of the modern-day interactive web sites use cookies to enable us to
          retrieve user details for each visit. Cookies are used in some areas of
          our site to enable the functionality of this area and ease of use for
          those people visiting. Some of our affiliate / advertising partners may
          also use cookies.
        </p>
        </div>
        
        <br />
        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <div style = {{
          display: "flex",
          alignItems: "center",
          gap: "0.8em"
        }}>
          <FactCheckOutlined sx = {{
            color: "#007FFF",
            fontSize: "1.6em"
          }}/>
          <Typography children="License" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        </div>
        
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
          Unless otherwise stated, Cycrowd and/or it's licensors own the
          intellectual property rights for all material on Cycrowd. All
          intellectual property rights are reserved. You may view and/or print
          pages from www.cycklas.com for your own personal use subject to
          restrictions set in these terms of service.
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "600", color: "#605F76", wordSpacing: "0.2em"}}>
          You must not:
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
          1. Republish material from www.cycklas.com <br />
          2. Sell, rent or sub-license material from www.cycklas.com <br />
          3. Reproduce, duplicate or copy material from www.cycklas.com
        </p>

        <p style = {{ fontSize: "0.8em", fontWeight: "600", color: "#605F76", wordSpacing: "0.2em"}}>
          Redistribute content from Cycrowd (unless content is specifically made
          for redistribution).
        </p>
        </div>

        <br />
        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <div style = {{
          display: "flex",
          alignItems: "center",
          gap: "0.8em"
        }}>
          <Gavel sx = {{
            color: "#007FFF",
            fontSize: "1.6em"
          }}/>
          <Typography children="User Comments" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        </div>

        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
          1. This Agreement shall begin on the date hereof. <br />
          2. Certain parts of this website offer the opportunity for users
          to post and exchange opinions, information, material and data
          ('Comments') in areas of the website. Cycrowd does not screen, edit,
          publish or review Comments prior to their appearance on the website and
          Comments do not reflect the views or opinions of Cycrowd, its agents or
          affiliates. Comments reflect the view and opinion of the person who
          posts such view or opinion. To the extent permitted by applicable laws
          Cycrowd shall not be responsible or liable for the Comments or for any
          loss cost, liability, damages or expenses caused and or suffered as a
          result of any use of and/or posting of and/or appearance of the Comments
          on this website. <br />
          3. Cycrowd reserves the right to monitor all Comments and to remove any
          Comments which it considers in its absolute discretion to be
          inappropriate, offensive or otherwise in breach of these Terms of
          Service. <br />
          4. You warrant and represent that: 
        </p>

        <p style = {{ marginLeft: "0.8em", fontSize: "0.8em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
          1. You are entitled to post the Comments on our website and have all
          necessary licenses and consents to do so; <br />
          2. The Comments do not infringe any intellectual property right,
          including without limitation copyright, patent or trademark, or other
          proprietary right of any third party; <br />
          3. The Comments do not contain any defamatory, libelous, offensive,
          indecent or otherwise unlawful material or material which is an invasion
          of privacy <br />
          4. The Comments will not be used to solicit or promote business or
          custom or present commercial activities or unlawful activity. <br />
          5. You hereby grant to Cycrowd a non-exclusive royalty-free license to
          use, reproduce, edit and authorize others to use, reproduce and edit any
          of your Comments in any and all forms, formats or media. 
        </p>
        </div>

        
        <br />
        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}> 
        <div style = {{
          display: "flex",
          alignItems: "center",
          gap: "0.8em"
        }}>
          <OpenInBrowser sx = {{
            color: "#007FFF",
            fontSize: "1.6em"
          }}/>
          <Typography children="Hyperlinking to our Content" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        </div>

        <p style = {{ fontSize: "0.9em", fontWeight: "600", color: "#605F76", wordSpacing: "0.2em"}}>
          The following organizations may link to our Web site without prior
          written approval: 
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        1. Government agencies;
        <br />
        2. Search engines;
        <br />
        3. News organizations;
        <br />
        4. Online directory distributors when they list us in the directory may
        link to our Web site in the same manner as they hyperlink to the Web
        sites of other listed businesses; and
        <br />
        5. Systemwide Accredited Businesses except soliciting non-profit
        organizations, charity shopping malls, and charity fundraising groups
        which may not hyperlink to our Web site.
        <br />
        <br />
        </p>
        <p style = {{ fontSize: "0.9em", fontWeight: "600", color: "#605F76", wordSpacing: "0.2em"}}>
          These organizations may link to our home page, to publications or to
          other Web site information so long as the link:
        </p>
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
          a. is not in any way
          misleading; <br />
          b. does not falsely imply sponsorship, endorsement or
          approval of the linking party and its products or services; and  <br />
          c. fits within the context of the linking party's site.
        </p>
        <br />
        <p style = {{ fontSize: "0.9em", fontWeight: "600", color: "#605F76", wordSpacing: "0.2em"}}>
          We may consider and approve in our sole discretion other link
          requests from the following types of organizations:
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        1. commonly-known consumer and/or business information sources such as
        Chambers of Commerce, American Automobile Association, AARP and
        Consumers Union; <br />
        2. dot.com community sites;
        <br />
        3. associations or other groups representing charities, including
        charity giving sites,
        <br />
        4. online directory distributors;
        <br />
        5. internet portals;
        <br />
        6. accounting, law and consulting firms whose primary clients are
        businesses; and
        <br />
        7. educational institutions and trade associations.
        <br />
        <br />
        We will approve link requests from these organizations if we determine
        that: 
        <p style = {{ marginLeft: "0.8em", fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
          a. the link would not reflect unfavorably on us or our accredited
          businesses (for example, trade associations or other organizations
          representing inherently suspect types of business, such as work-at-home
          opportunities, shall not be allowed to link); <br />
          b. the organization does not have an unsatisfactory record with us; <br />
          c. the benefit to us from the visibility associated with the hyperlink 
          outweighs the absence of Cycrowd; and <br />
          d. where the link is in the context of general resource
          information or is otherwise consistent with editorial content in a
          newsletter or similar product furthering the mission of the
          organization.
        </p>
        <br />
        <p style = {{ fontSize: "1em", fontWeight: "600", color: "#605F76", wordSpacing: "0.2em"}}>
          These organizations may link to our home page, to publications or to
          other Web site information so long as the link:
        </p>
        <p style = {{ fontSize: "1em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
          a. is not in any way
          misleading; <br />
          b. does not falsely imply sponsorship, endorsement or
          approval of the linking party and its products or services; and  <br />
          c. fits within the context of the linking party's site.
        </p>
        
        <br />
        <br />
        If you are among the organizations listed in paragraph 2 above and are
        interested in linking to our website, you must notify us by sending an
        e-mail to cycrowd@gmail.com. Please include your name, your organization
        name, contact information (such as a phone number and/or e-mail address)
        as well as the URL of your site, a list of any URLs from which you
        intend to link to our Web site, and a list of the URL(s) on our site to
        which you would like to link. Allow 2-3 weeks for a response.
        <br />
        <br />
        <p style = {{ fontSize: "1em", fontWeight: "600", color: "#605F76", wordSpacing: "0.2em"}}>
          Approved organizations may hyperlink to our Web site as follows:
        </p>

        <p style = {{ fontSize: "1em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
          1. By use of our corporate name; or <br />
          2. By use of the uniform resource locator (Web address) being linked to;
          or <br />
          3. By use of any other description of our Web site or material being
          linked to that makes sense within the context and format of content on
          the linking party's site.
        </p>
        
        <br />
        <p style = {{ fontSize: "1em", fontWeight: "600", color: "#605F76", wordSpacing: "0.2em"}}>
        No use of Cycrowd's logo or other artwork will be allowed for linking
        absent a trademark license agreement.
        </p>
        </p>
        </div>

        <br />
        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <div style = {{
          display: "flex",
          alignItems: "center",
          gap: "0.8em"
        }}>
          <Preview sx = {{
            color: "#007FFF",
            fontSize: "1.6em"
          }}/>
          <Typography children="Iframes" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        </div>
        
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
          Without prior approval and express written permission, you may not
          create frames around our Web pages or use other techniques that alter in
          any way the visual presentation or appearance of our Web site.
        </p>
        </div>
        <br />

        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <div style = {{
          display: "flex",
          alignItems: "center",
          gap: "0.8em"
        }}>
          <NotInterested sx = {{
            color: "#007FFF",
            fontSize: "1.6em"
          }}/>
          <Typography children="Content Liability" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        </div>
        
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
          We shall have no responsibility or liability for any content appearing
          on your Web site. You agree to indemnify and defend us against all
          claims arising out of or based upon your Website. No link(s) may appear
          on any page on your Web site or within any context containing content or
          materials that may be interpreted as libelous, obscene or criminal, or
          which infringes, otherwise violates, or advocates the infringement or
          other violation of, any third-party rights.
        </p>
        </div>
        <br />
        
        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <div style = {{
          display: "flex",
          alignItems: "center",
          gap: "0.8em"
        }}>
          <RequestPageOutlined sx = {{
            color: "#007FFF",
            fontSize: "1.6em"
          }}/>
          <Typography children="Reservation of Rights" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        </div>
        
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        We reserve the right at any time and in its sole discretion to request
        that you remove all links or any particular link to our Web site. You
        agree to immediately remove all links to our Web site upon such request.
        We also reserve the right to amend these terms of service and its
        linking policy at any time. By continuing to link to our Web site, you
        agree to be bound to and abide by these linking terms of service.
        </p>
        </div>
        <br />

        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <div style = {{
          display: "flex",
          alignItems: "center",
          gap: "0.8em"
        }}>
          <RemoveModeratorOutlined sx = {{
            color: "#007FFF",
            fontSize: "1.6em"
          }}/>
          <Typography children="Removal of links from our website" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        </div>
        
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        If you find any link on our Web site or any linked web site
        objectionable for any reason, you may contact us about this. We will
        consider requests to remove links but will have no obligation to do so
        or to respond directly to you.
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        Whilst we endeavor to ensure that the information on this website is
        correct, we do not warrant its completeness or accuracy; nor do we
        commit to ensuring that the website remains available or that the
        material on the website is kept up to date.
        </p>
        </div>
        <br />
        
        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <div style = {{
          display: "flex",
          alignItems: "center",
          gap: "0.8em"
        }}>
          <ReportOutlined sx = {{
            color: "#007FFF",
            fontSize: "1.6em"
          }}/>
          <Typography children="Disclaimer" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        </div>
        
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        To the maximum extent permitted by applicable law, we exclude all
        representations, warranties and conditions relating to our website and
        the use of this website (including, without limitation, any warranties
        implied by law in respect of satisfactory quality, fitness for purpose
        and/or the use of reasonable care and skill). Nothing in this disclaimer
        will:
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        1. limit or exclude our or your liability for death or personal injury
        resulting from negligence; <br />
        2. limit or exclude our or your liability for fraud or fraudulent
        misrepresentation;
        <br />
        3. limit any of our or your liabilities in any way that is not permitted
        under applicable law; or
        <br />
        4. exclude any of our or your liabilities that may not be excluded under
        applicable law.
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "600", color: "#605F76", wordSpacing: "0.2em"}}>
        The limitations and exclusions of liability set out in this Section and
        elsewhere in this disclaimer:
        <br />
        <p style = {{ fontSize: "1em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        a. are subject to the preceding
        paragraph; and <br />
        b. govern all liabilities arising under the disclaimer
        or in relation to the subject matter of this disclaimer, including
        liabilities arising in contract, in tort (including negligence) and for
        breach of statutory duty.
        </p>
        <br />
        <br />
        To the extent that the website and the information and services on the
        website are provided free of charge, we will not be liable for any loss
        or damage of any nature.
        </p>
        </div>
        <br />
        
        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <div style = {{
          display: "flex",
          alignItems: "center",
          gap: "0.8em"
        }}>
          <ContactSupportOutlined sx = {{
            color: "#007FFF",
            fontSize: "1.6em"
          }}/>
          <Typography children="Credit & Contact Information" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        </div>
        
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        If you have any queries regarding any of our terms, please contact us.
        </p>
        
        <div style = {{ display: "flex", gap: "2em" }}>
          <p style = {{ fontSize: "0.8em", fontWeight: "600", color: "#605F76", wordSpacing: "0.2em"}}>
          +639484014538
          </p>
          <Divider orientation = "vertical" flexItem sx = {{ margin: "1em 0em" }}/>
          <p style = {{ fontSize: "0.8em", fontWeight: "600", color: "#605F76", wordSpacing: "0.2em"}}>
          cycrowd@gmail.com
          </p>
        </div>
        
        </div>
      </p>
    </Dialogform>
  );
}

export default Terms_condition;
