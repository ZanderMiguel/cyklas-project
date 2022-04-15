import React from 'react';
import Dialogform from '../components/Dialogform';
import { Typography, Button, Divider } from '@mui/material';

function Privacy_policy({ open, close, btn }) {
  return (
    <Dialogform
      open={open}
      close={close}
      divider
      title="Privacy Policy"
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
    >
      <p style={{ padding: '1em 1.5em' }}>
        <div style = {{
          padding: "0em 1em",
          backgroundColor: "#FCFCFC"
        }}>
        <p style = {{ padding: "0.5em 0em", fontSize: "0.8em", fontWeight: "500", color: "#706E88", wordSpacing: "0.2em"}}>
          Effective Date: 01-03-2022
        </p>
        </div>

        <div style = {{
          padding: "0em 1em"
        }}>
        <p style = {{ fontSize: "0.9em", fontWeight: "500", color: "#706E88", wordSpacing: "0.2em"}}>
          Cycrowd <br />
          Bilibid Viejo Street, Quiapo Manila. , Philippines <br />
          +639484014538
        </p>
        </div>
        <br />

        <div style = {{
          padding: "0em 1em"
        }}>
          <p style = {{ fontSize: "1em", fontWeight: "600", color: "#3F3D56", wordSpacing: "0.2em"}}>
          Your privacy is important to us
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#3F3D56", wordSpacing: "0.2em"}}>
        It is Cycrowd's policy to respect your privacy regarding any information
        we may collect while operating our website. This Privacy Policy applies
        to www.cycklas.com (hereinafter, "us", "we", or "www.cycklas.com"). We
        respect your privacy and are committed to protecting personally
        identifiable information you may provide us through the Website. We have
        adopted this privacy policy ("Privacy Policy") to explain what
        information may be collected on our website, how we use this
        information, and under what circumstances we may disclose the
        information to third parties. This Privacy Policy applies only to
        information we collect through the Website and does not apply to our
        collection of information from other sources.
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#3F3D56", wordSpacing: "0.2em"}}>
        This Privacy Policy, together with the Terms of service posted on our
        Website, set forth the general rules and policies governing your use of
        our Website. Depending on your activities when visiting our Website, you
        may be required to agree to additional terms of service.
        </p>
        </div>
        <br />

        <div style = {{
          padding: "0em 1em"
        }}>
          <p style = {{ fontSize: "1em", fontWeight: "600", color: "#3F3D56", wordSpacing: "0.2em"}}>
          Contents
          </p>

          <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#3F3D56", wordSpacing: "0.2em"}}>
          1. Personally-Identifying Information <br />
          2. Security
          <br />
          3. Links To External Sites
          <br />
          4. Protection of Certain Personally-Identifying Information
          <br />
          5. Cookies
          <br />
          6. E-commerce
          <br />
          7. Business Transfers
          <br />
          8. Privacy Policy Changes
          <br />
          9. Contact Information & Credit
          </p>
        </div>
        <br />

        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <Typography children="1. Personally-Identifying Information" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        Certain visitors to Cycrowd's websites choose to interact with Cycrowd
        in ways that require Cycrowd to gather personally-identifying
        information. The amount and type of information that Cycrowd gathers
        depends on the nature of the interaction. For example, we ask visitors
        who leave a comment at https://www.cycklas.com to provide a username and
        email address.
        </p>
        </div>
        <br />

        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <Typography children="2. Security" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        The security of your Personal Information is important to us, but
        remember that no method of transmission over the Internet, or method of
        electronic storage is 100% secure. 
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "600", color: "#605F76", wordSpacing: "0.2em"}}>
        While we strive to use commercially
        acceptable means to protect your Personal Information, we cannot
        guarantee its absolute security.
        </p>
        </div>
        <br />

        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <Typography children="3. Links to External Sites" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        Our Service may contain links to external sites that are not operated by
        us. If you click on a third-party link, you will be directed to that
        third party's site. 
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "600", color: "#605F76", wordSpacing: "0.2em"}}>
        We strongly advise you to review the Privacy Policy
        and terms of service of every site you visit. We have no control over,
        and assume no responsibility for the content, privacy policies or
        practices of any third-party sites, products or services.
        </p>
        </div>
        <br />

        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <Typography children="4. Protection of Certain Personally-Identifying Information" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        Cycrowd discloses potentially personally-identifying and
        personally-identifying information only to those of its employees,
        contractors and affiliated organizations that (i) need to know that
        information in order to process it on Cycrowd's behalf or to provide
        services available at Cycrowd's website, and (ii) that have agreed not
        to disclose it to others. Some of those employees, contractors and
        affiliated organizations may be located outside of your home country; by
        using Cycrowd's website, you consent to the transfer of such information
        to them. Cycrowd will not rent or sell potentially
        personally-identifying and personally-identifying information to anyone.
        Other than to its employees, contractors and affiliated organizations,
        as described above, Cycrowd discloses potentially personally-identifying
        and personally-identifying information only in response to a subpoena,
        court order or other governmental request, or when Cycrowd believes in
        good faith that disclosure is reasonably necessary to protect the
        property or rights of Cycrowd, third parties or the public at large.
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        If you are a registered user of https://www.cycklas.com and have
        supplied your email address, Cycrowd may occasionally send you an email
        to tell you about new features, solicit your feedback, or just keep you
        up to date with what's going on with Cycrowd and our products. We
        primarily use our blog to communicate this type of information, so we
        expect to keep this type of email to a minimum. If you send us a request
        (for example via a support email or via one of our feedback mechanisms),
        we reserve the right to publish it in order to help us clarify or
        respond to your request or to help us support other users. 
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "600", color: "#605F76", wordSpacing: "0.2em"}}>
        Cycrowd takes
        all measures reasonably necessary to protect against the unauthorized
        access, use, alteration or destruction of potentially
        personally-identifying and personally-identifying information.
        </p>
        </div>
        <br />

        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <Typography children="5. Cookies" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        To enrich and perfect your online experience, Cycrowd uses "Cookies",
        similar technologies and services provided by others to display
        personalized content, appropriate advertising and store your preferences
        on your computer.
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        A cookie is a string of information that a website stores on a
        visitor's computer, and that the visitor's browser provides to the
        website each time the visitor returns. Cycrowd uses cookies to help
        Cycrowd identify and track visitors, their usage of
        https://www.cycklas.com, and their website access preferences. Cycrowd
        visitors who do not wish to have cookies placed on their computers
        should set their browsers to refuse cookies before using Cycrowd's
        websites, with the drawback that certain features of Cycrowd's websites
        may not function properly without the aid of cookies.
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "600", color: "#605F76", wordSpacing: "0.2em"}}>
        By continuing to navigate our website without changing your cookie
        settings, you hereby acknowledge and agree to Cycrowd's use of cookies.
        </p>
        </div>
        <br />

        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <Typography children="6. E-commerce" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        Those who engage in transactions with Cycrowd – by purchasing Cycrowd's
        services or products, are asked to provide additional information,
        including as necessary the personal and financial information required
        to process those transactions. In each case, Cycrowd collects such
        information only insofar as is necessary or appropriate to fulfill the
        purpose of the visitor's interaction with Cycrowd. 
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "600", color: "#605F76", wordSpacing: "0.2em"}}>
        Cycrowd does not
        disclose personally-identifying information other than as described
        below. And visitors can always refuse to supply personally-identifying
        information, with the caveat that it may prevent them from engaging in
        certain website-related activities.
        </p>
        </div>
        <br />

        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <Typography children="7. Business Transfers" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        If Cycrowd, or substantially all of its assets, were acquired, or in the
        unlikely event that Cycrowd goes out of business or enters bankruptcy,
        user information would be one of the assets that is transferred or
        acquired by a third party. You acknowledge that such transfers may
        occur, and that any acquirer of Cycrowd may continue to use your
        personal information as set forth in this policy.
        </p>
        </div>
        <br />

        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <Typography children="8. Privacy Policy Changes" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        Although most changes are likely to be minor, Cycrowd may change its
        Privacy Policy from time to time, and in Cycrowd's sole discretion.
        
        </p>

        <p style = {{ fontSize: "0.9em", fontWeight: "600", color: "#605F76", wordSpacing: "0.2em"}}>
        Cycrowd encourages visitors to frequently check this page for any
        changes to its Privacy Policy. Your continued use of this site after any
        change in this Privacy Policy will constitute your acceptance of such
        change.
        </p>
        </div>
        <br />

        <div style = {{
          padding: "0.8em 1.5em",
          backgroundColor: "#FCFCFC",
          borderRadius: "0.4em"
        }}>
          <Typography children="9. Contact Information & Credit" sx = {{
            color: "#007FFF",
            fontSize: "1.2em",
            fontWeight: "600"
          }}/>
        
        <p style = {{ fontSize: "0.9em", fontWeight: "400", color: "#605F76", wordSpacing: "0.2em"}}>
        If you have any questions about our Privacy Policy, please contact us
        via:
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

export default Privacy_policy;
