import * as React from 'react'
import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text
} from '@react-email/components'

import { twm } from './static/tailwind/tw-merge'
import { theme } from './static/tailwind/theme'

const defaultValues = {
  intro: {
    heading: `Thank you, James Walker!`,
    body: `Welcome! We're thrilled that you've registered for our 12-Week Somatic Training Course. Your commitment to deepening your body awareness and personal growth means a lot to us, and we're excited to guide you through this transformative journey.`
  },
  main: {
    // image:
    //   'https://res.cloudinary.com/jameswalker-work/image/upload/v1712604374/ELI/email/training-1_pye9ya.png',
    heading: `Course Details`,
    body: `Your course will meet weekly on Mondays from 10:00AM to 12:00PM, beginning February 1st and concluding March 13th. All sessions will be conducted via Zoom.`,
    listItems: [
      'A quiet, private space where you can move freely',
      'Comfortable clothing that allows for easy movement',
      'A yoga mat or soft surface',
      'Water bottle'
    ]
  },
  zoom: {
    heading: 'Zoom Instructions',
    body: `To join the session, simply click the Zoom link below at your scheduled course time. You'll be prompted to enter the password provided. If you experience any technical difficulties, please email us for assistance.`,
    link_pwd: [`https://zoom.com`, `password1234`]
  }
}

const EliEventConfirmationEmail = ({
  intro = defaultValues.intro,
  main = defaultValues.main,
  zoom = defaultValues.zoom
}) => {
  return (
    <Html className='![&>*]:box-border'>
      <Tailwind config={theme}>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'
            rel='stylesheet'
          />
          <link
            rel='icon'
            type='image/png'
            href='https://res.cloudinary.com/jameswalker-work/image/upload/v1715176662/ELI/email/icon_mdn3i4.png'
          />
          <style type='text/css'>
            {`
            .fallback-font {
              font-family: 'Lato', Arial, sans-serif !important;
            }
              /* Mobile Styles */
            @media screen and (max-width: 600px) {
              .desktop-content {
                display: none !important;
                max-height: 0 !important;
                overflow: hidden !important;
              }
              .mobile-content {
                display: table !important;
                width: 100% !important;
                max-width: 100% !important;
              }
              .mobile-content td {
                width: 100% !important;
                display: block !important;
              }
              .responsive-image {
                width: 100% !important;
                height: auto !important;
                max-width: 100% !important;
              }
              .mobile-stack {
                display: block !important;
                width: 100% !important;
                padding-right: 0 !important;
                padding-left: 0 !important;
              }
              .mobile-padding {
                padding: 16px !important;
              }
            }
          `}
          </style>
        </Head>
        <Body
          style={{
            fontFamily: "'Lato', Arial, sans-serif",
            WebkitFontSmoothing: 'antialiased',
            backgroundColor: 'white'
          }}
          className='bg-white[&>*]:box-border text-inherit'
        >
          <Container className='w-full lg:w-[750px]'>
            <HeroSection content={intro} />
            <ContentSection content={main} />
            <ContentSectionZoom content={zoom} />
            <FooterSection />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default EliEventConfirmationEmail

const HeroSection = ({ content }) => {
  return (
    <Section
      className='HERO bg-slate-700 !relative h-[400px] mb-[7px] rounded-md'
      style={heroSection}
    >
      <table className='p-ms w-full h-full text-white'>
        <tr className=''>
          <td className='align-top'>
            <Img
              src={`https://res.cloudinary.com/jameswalker-work/image/upload/v1712604379/ELI/email/wordmark--sm_mlv8wf.png`}
              className='w-[270px]'
            />
          </td>
        </tr>
        <tr className='align-bottom'>
          <td className='align-bottom'>
            <Text className='text-3xl m-0 mb-4 font-bold italic text-[#CDDCE7]'>
              {content.heading}
            </Text>
            <Text className='PAR w-full lg:w-2/3 mb-4 text-[#CDDCE7] m-0'>
              {content.body}
            </Text>
          </td>
        </tr>
      </table>
    </Section>
  )
}

const ImageHeadingSection = ({ content }) => {
  return (
    <Section style={sectionStyle}>
      {/* Desktop Layout */}
      <div
        className='desktop-content'
        style={desktopLayoutStyle}
      >
        <div style={headingCellStyle}>
          <Heading style={headingStyle}>Course Details</Heading>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className='mobile-content' style={mobileLayoutStyle}>
        <div style={mobileHeadingCellStyle}>
          <Heading style={mobileHeadingStyle}>
            Course Details
          </Heading>
        </div>
      </div>
    </Section>
  )
}

const ContentSection = ({ content }) => {
  return (
    <Section className='CONTENT_SECTION p-ms lg:p-md gap-ms lg:gap-md bg-primary-100 mb-sm rounded-md'>
      {content?.heading && (
        <Heading className='text-primary-500 mb-sm m-0 text-2xl font-bold'>
          {content.heading}
        </Heading>
      )}
      <Text className='PAR text-primary-800 mb-sm w-full m-0'>
        {content.body}
      </Text>
      {content.listItems.map((item, index) => (
        <Text
          key={index}
          className='PAR text-primary-800 mb-sm w-full m-0'
        >
          • {item}
        </Text>
      ))}
    </Section>
  )
}

const ContentSectionZoom = ({ content }) => {
  return (
    <Section className='CONTENT_SECTION p-ms lg:p-md gap-ms lg:gap-md bg-primary-100 mb-sm rounded-md'>
      {content?.heading && (
        <Heading className='text-primary-500 mb-sm m-0 text-2xl font-bold'>
          {content.heading}
        </Heading>
      )}
      <Text className='PAR text-primary-800 mb-sm w-full m-0'>
        {content.body}
      </Text>
      <Hr className='mb-sm' />
      <Text className='PAR mb-sm text-primary-800 w-full m-0'>
        Your Password:{' '}
        <span className='text-primary-500 ml-1 font-bold'>
          {content.link_pwd[1]}
        </span>
      </Text>
      <Button
        className={twm(TWButtonStyles)}
        href={content.link_pwd[0]}
      >
        Join Zoom Meeting
      </Button>
    </Section>
  )
}

const FooterSection = () => {
  return (
    <Container className='FOOTER w-full h-[225px] relative text-center rounded-md bg-primary-800'>
      <div className='IMG_WRAP text-center w-full h-[20px] '>
        <Img
          src='https://res.cloudinary.com/jameswalker-work/image/upload/v1712604382/ELI/email/wordmark--xs_white_nfwwe5.png'
          className='LOGO_IMG inline-block w-[175px ]'
        />
      </div>
      <br className='block h-[15px]' />
      <div className='UNSUB text-[14px] text-center text-primary-100'>
        <span className='font-light mr-[1ch]'>
          No longer want to receive emails?
        </span>
        <a
          className='outline-0 font-bold text-gray-400 no-underline'
          href='https://www.embodiedlearninginstitute.com/'
        >
          Unsubscribe.
        </a>
      </div>
      <br className='inline-block h-[25px]' />
      <div className='w-full py-[10px]'>
        <Img
          src='https://res.cloudinary.com/jameswalker-work/image/upload/v1712604393/ELI/email/fb-icon_cflvow.png'
          className='w-[20px] mr-[15px] inline hover:opacity-50 cursor-pointer'
        />
        <Img
          src='https://res.cloudinary.com/jameswalker-work/image/upload/v1712604395/ELI/email/linkedin-icon_wzbezq.png'
          className='w-[20px] mr-[15px] inline hover:opacity-50 cursor-pointer'
        />
        <Img
          src='https://res.cloudinary.com/jameswalker-work/image/upload/v1712604397/ELI/email/pinterest-icon_p1lpdf.png'
          className='w-[20px] inline hover:opacity-50 cursor-pointer'
        />
      </div>
    </Container>
  )
}

const TWButtonStyles =
  'TW_BUTTON box-border px-[8px] py-[3px] bg-transparent border border-solid rounded-md text-[14px] tracking-[1px] uppercase border-primary-500 text-primary-500'

const heroSection = {
  backgroundImage: `url('https://res.cloudinary.com/jameswalker-work/image/upload/v1712604373/ELI/email/ocean-gradient_j4hu2k.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

const sectionStyle = {
  marginBottom: '8px'
}

const desktopLayoutStyle = {
  display: 'block'
}

const mobileLayoutStyle = {
  display: 'none'
}

const imageCellStyle = {
  verticalAlign: 'top',
  padding: 0
}

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '6px'
}

const headingCellStyle = {
  backgroundColor: '#CDDCE7',
  marginBottom: '16px',
}

const headingStyle = {
  margin: 0,
  fontSize: '30px',
  lineHeight: '36px',
  fontWeight: 'bold',
  color: '#2b5879'
}

const mobileHeadingCellStyle = {
  ...headingCellStyle,
  marginBottom: '8px'
}

const mobileHeadingStyle = {
  ...headingStyle,
}

const mobileImageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '6px'
}
