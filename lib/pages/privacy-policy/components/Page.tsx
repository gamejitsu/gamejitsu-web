import React from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass"
import Head from "next/head"

import { AuthenticatedComponent } from "gamejitsu/interfaces"

import { Footer, Navbar } from "gamejitsu/components"

interface SecondaryTitleProps {
  color?: string
}

const Container = styled(Flex)`
  background-color: transparent;
`

const SecondaryTitle = styled.h2<SecondaryTitleProps>`
  font-family: "Japanese 3017";
  font-weight: normal;
  letter-spacing: 3px;
  font-size: 21px;
  color: ${(props) => props.color || props.theme.primaryColor};
`

const MainTitle = styled.h1`
  color: white;
  font-size: 35px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`

const ParagraphText = styled.p`
  font-size: 15px;
  margin-bottom: 5px;
  line-height: 20px;
`

const TextCard = styled(Box)`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-grow: 1;
  z-index: 1;
`

const ParagraphTitle = styled.h3`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 15px;
`

TextCard.defaultProps = {
  my: 4
}

const Page: AuthenticatedComponent = () => (
  <Box mt={4}>
    <Navbar />
    <Container alignItems="center" flexDirection="column">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Gamejitsu - Privacy Policy</title>
      </Head>
      <TextCard>
        <Box width="900px" mx="auto" my={4} style={{ position: "relative" }}>
          <Flex alignItems="center">
            <Box width="375px">
              <SecondaryTitle>Gamejitsu</SecondaryTitle>
              <MainTitle>Privacy Policy</MainTitle>
            </Box>
          </Flex>
          <Box width="900px">
            <ParagraphText>
This privacy policy applies between you, the User of this Website and Gamejitsu LTD, the owner and provider of this Website. Gamejitsu LTD takes the privacy of your information very seriously. This privacy policy applies to our use of any and all Data collected by us or provided by you in relation to your use of the Website.
This privacy policy should be read alongside, and in addition to, our Terms and Conditions, which can be found at: gamejitsu.gg/terms-of-use.
Please read this privacy policy carefully.
<ParagraphTitle>Definitions and interpretation</ParagraphTitle>
1.  In this privacy policy, the following definitions are used:
Data
collectively all information that you submit to Gamejitsu LTD via the Website. This definition incorporates, where applicable, the definitions provided in the Data Protection Laws;
Cookies
a small text file placed on your computer by this Website when you visit certain parts of the Website and/or when you use certain features of the Website. Details of the cookies used by this Website are set out in the clause below ( Cookies);
Data Protection Laws
any applicable law relating to the processing of personal Data, including but not limited to the Directive 96/46/EC (Data Protection Directive) or the GDPR, and any national implementing laws, regulations and secondary legislation, for as long as the GDPR is effective in the UK;
GDPR
the General Data Protection Regulation (EU) 2016/679;
Gamejitsu LTD,  
 we  or us
  Gamejitsu LTD, a company incorporated in England and Wales with registered number 12096404 whose registered office is at 20-22 Wenlock Road,   London,  N1 7GU; 
UK and EU Cookie Law
the Privacy and Electronic Communications (EC Directive) Regulations 2003 as amended by the Privacy and Electronic Communications (EC Directive) (Amendment) Regulations 2011;
User or you
any third party that accesses the Website and is not either (i) employed by Gamejitsu LTD and acting in the course of their employment or (ii) engaged as a consultant or otherwise providing services to Gamejitsu LTD and accessing the Website in connection with the provision of such services; and
Website
the website that you are currently using, gamejitsu.gg, and any sub-domains of this site unless expressly excluded by their own terms and conditions.
2.  In this privacy policy, unless the context requires a different interpretation:
a. the singular includes the plural and vice versa;
b. references to sub-clauses, clauses, schedules or appendices are to sub-clauses, clauses, schedules or appendices of this privacy policy;
c. a reference to a person includes firms, companies, government entities, trusts and partnerships;
d. "including" is understood to mean "including without limitation";
e. reference to any statutory provision includes any modification or amendment of it;
f. the headings and sub-headings do not form part of this privacy policy.
<ParagraphTitle>Scope of this privacy policy</ParagraphTitle>
3.  This privacy policy applies only to the actions of Gamejitsu LTD and Users with respect to this Website. It does not extend to any websites that can be accessed from this Website including, but not limited to, any links we may provide to social media websites.
4.  For purposes of the applicable Data Protection Laws, Gamejitsu LTD is the "data controller". This means that Gamejitsu LTD determines the purposes for which, and the manner in which, your Data is processed.
<ParagraphTitle>Data collected</ParagraphTitle>
5.  We may collect the following Data, which includes personal Data, from you:
a. name;
b. contact Information such as email addresses and telephone numbers;
c. game skill level;
in each case, in accordance with this privacy policy.
<ParagraphTitle>How we collect Data</ParagraphTitle>
6.  We collect Data in the following ways:
a. data is given to us by you  ; and
b. data is collected automatically.
<ParagraphTitle>Data that is given to us by you</ParagraphTitle>
7.  Gamejitsu LTD will collect your Data in a number of ways, for example:
a. when you contact us through the Website, by telephone, post, e-mail or through any other means;
b. when you register with us and set up an account to receive our products/services;
in each case, in accordance with this privacy policy.
<ParagraphTitle>Data that is collected automatically</ParagraphTitle>
8.  To the extent that you access the Website, we will collect your Data automatically, for example:
a. we automatically collect some information about your visit to the Website. This information helps us to make improvements to Website content and navigation, and includes your IP address, the date, times and frequency with which you access the Website and the way you use and interact with its content.
b. we will collect your Data automatically via cookies, in line with the cookie settings on your browser. For more information about cookies, and how we use them on the Website, see the section below, headed "Cookies".
<ParagraphTitle>Our use of Data</ParagraphTitle>
9.  Any or all of the above Data may be required by us from time to time in order to provide you with the best possible service and experience when using our Website. Specifically, Data may be used by us for the following reasons:
a. internal record keeping;
b. improvement of our products / services;
in each case, in accordance with this privacy policy.
10.  We may use your Data for the above purposes if we deem it necessary to do so for our legitimate interests. If you are not satisfied with this, you have the right to object in certain circumstances (see the section headed "Your rights" below).
11.  When you register with us and set up an account to receive our services, the legal basis for this processing is the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract.
<ParagraphTitle>Who we share Data with</ParagraphTitle>
12.  We may share your Data with the following groups of people for the following reasons:
a. any of our group companies or affiliates - to improve the quality of the service;
b. our employees, agents and/or professional advisors - to fit the coach with the customers;
in each case, in accordance with this privacy policy.
<ParagraphTitle>Keeping Data secure</ParagraphTitle>
13.  We will use technical and organisational measures to safeguard your Data, for example:
a. access to your account is controlled by a password and a user name that is unique to you.
b. we store your Data on secure servers.
14.  Technical and organisational measures include measures to deal with any suspected data breach. If you suspect any misuse or loss or unauthorised access to your Data, please let us know immediately by contacting us via this e-mail address: admin@gamejitsu.gg.
15.  If you want detailed information from Get Safe Online on how to protect your information and your computers and devices against fraud, identity theft, viruses and many other online problems, please visit www.getsafeonline.org. Get Safe Online is supported by HM Government and leading businesses.
<ParagraphTitle>Data retention</ParagraphTitle>
16.  Unless a longer retention period is required or permitted by law, we will only hold your Data on our systems for the period necessary to fulfil the purposes outlined in this privacy policy or until you request that the Data be deleted.
17.  Even if we delete your Data, it may persist on backup or archival media for legal, tax or regulatory purposes.
<ParagraphTitle>Your rights</ParagraphTitle>
18.  You have the following rights in relation to your Data:
a. Right to access - the right to request (i) copies of the information we hold about you at any time, or (ii) that we modify, update or delete such information. If we provide you with access to the information we hold about you, we will not charge you for this, unless your request is "manifestly unfounded or excessive." Where we are legally permitted to do so, we may refuse your request. If we refuse your request, we will tell you the reasons why.
b. Right to correct - the right to have your Data rectified if it is inaccurate or incomplete.
c. Right to erase - the right to request that we delete or remove your Data from our systems.
d. Right to restrict our use of your Data - the right to "block" us from using your Data or limit the way in which we can use it.
e. Right to data portability - the right to request that we move, copy or transfer your Data.
f. Right to object - the right to object to our use of your Data including where we use it for our legitimate interests.
19.  To make enquiries, exercise any of your rights set out above, or withdraw your consent to the processing of your Data (where consent is our legal basis for processing your Data), please contact us via this e-mail address: admin@gamejitsu.gg.
20.  If you are not satisfied with the way a complaint you make in relation to your Data is handled by us, you may be able to refer your complaint to the relevant data protection authority. For the UK, this is the Information Commissioner's Office (ICO). The ICO's contact details can be found on their website at https://ico.org.uk/.
21.  It is important that the Data we hold about you is accurate and current. Please keep us informed if your Data changes during the period for which we hold it.
<ParagraphTitle>Links to other websites</ParagraphTitle>
22.  This Website may, from time to time, provide links to other websites. We have no control over such websites and are not responsible for the content of these websites. This privacy policy does not extend to your use of such websites. You are advised to read the privacy policy or statement of other websites prior to using them.
<ParagraphTitle>Changes of business ownership and control</ParagraphTitle>
23.  Gamejitsu LTD may, from time to time, expand or reduce our business and this may involve the sale and/or the transfer of control of all or part of Gamejitsu LTD. Data provided by Users will, where it is relevant to any part of our business so transferred, be transferred along with that part and the new owner or newly controlling party will, under the terms of this privacy policy, be permitted to use the Data for the purposes for which it was originally supplied to us.
24.  We may also disclose Data to a prospective purchaser of our business or any part of it.
25.  In the above instances, we will take steps with the aim of ensuring your privacy is protected.
<ParagraphTitle>Cookies</ParagraphTitle>
26.  This Website may place and access certain Cookies on your computer.     Gamejitsu LTD uses Cookies to improve your experience of using the Website and to improve our range of services.  Gamejitsu LTD has carefully chosen these Cookies and has taken steps to ensure that your privacy is protected and respected at all times.
27.  All Cookies used by this Website are used in accordance with current UK and EU Cookie Law.
28.  Before the Website places Cookies on your computer, you will be presented with a message bar requesting your consent to set those Cookies. By giving your consent to the placing of Cookies, you are enabling Gamejitsu LTD to provide a better experience and service to you. You may, if you wish, deny consent to the placing of Cookies; however certain features of the Website may not function fully or as intended.
29.  This Website may place the following Cookies:
Type of Cookie
Purpose
Strictly necessary cookies
These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services.
30.  You can find a list of Cookies that we use in the Cookies Schedule.
31.  You can choose to enable or disable Cookies in your internet browser. By default, most internet browsers accept Cookies but this can be changed. For further details, please consult the help menu in your internet browser.
32.  You can choose to delete Cookies at any time; however you may lose any information that enables you to access the Website more quickly and efficiently including, but not limited to, personalisation settings.
33.  It is recommended that you ensure that your internet browser is up-to-date and that you consult the help and guidance provided by the developer of your internet browser if you are unsure about adjusting your privacy settings.
34.  For more information generally on cookies, including how to disable them, please refer to aboutcookies.org. You will also find details on how to delete cookies from your computer.
<ParagraphTitle>General</ParagraphTitle>
35.  You may not transfer any of your rights under this privacy policy to any other person. We may transfer our rights under this privacy policy where we reasonably believe your rights will not be affected.
36.  If any court or competent authority finds that any provision of this privacy policy (or part of any provision) is invalid, illegal or unenforceable, that provision or part-provision will, to the extent required, be deemed to be deleted, and the validity and enforceability of the other provisions of this privacy policy will not be affected.
37.  Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy will be deemed a waiver of that, or any other, right or remedy.
38.  This Agreement will be governed by and interpreted according to the law of England and Wales. All disputes arising under the Agreement will be subject to the exclusive jurisdiction of the English and Welsh courts.
<ParagraphTitle>Changes to this privacy policy</ParagraphTitle>
39.  Gamejitsu LTD reserves the right to change this privacy policy as we may deem necessary from time to time or as may be required by law. Any changes will be immediately posted on the Website and you are deemed to have accepted the terms of the privacy policy on your first use of the Website following the alterations.  
   
  You may contact Gamejitsu LTD by email at admin@gamejitsu.gg.
<ParagraphTitle>Attribution</ParagraphTitle>
40.  This privacy policy was created using a document from Rocket Lawyer (https://www.rocketlawyer.com/gb/en).
19 July 2020 
 
Cookies
Below is a list of the cookies that we use. We have tried to ensure this is complete and up to date, but if you think that we have missed a cookie or there is any discrepancy, please let us know.
Strictly necessary
We use the following strictly necessary cookies:
Description of Cookie
Purpose
authToken
User authentication
              </ParagraphText>
          </Box>
        </Box>
      </TextCard>

      <Footer />

    </Container>
  </Box>
)

Page.skipAuthentication = true

export default Page
