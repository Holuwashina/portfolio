import * as React from 'react';
import Link from 'next/link';
import { useTheme } from "@mui/styles";
import { Grid, Typography, Button, Stack, Divider, IconButton, useMediaQuery } from '@mui/material';
import { SiGithub, SiLinkedin } from 'react-icons/si';

function Hero() {

  const HeroData = {
    heading: "Hire Me",
    btn: "RESUME",
    link: "resume",

    icons: [
      {
        name: <SiGithub />,
        link: "https://www.google.com"
      },
      {
        name: <SiLinkedin />,
        link: "https://www.google.com"
      }
    ],

    topWidget: {
      title: "Coding : REACT",
      codes: ["HTML", "CSS", "JAVASCRIPT"],
      level: "80%"
    },

    mainWidget: [
      {
        id: 1,
        title: "FRONT-END",
        codes: ["REACT", "NEXT", "GATSBY", "ANGULAR"],
        level: "90%"
      },
      {
        id: 2,
        title: "BACK-END",
        codes: ["NODE", "EXPRESS", "FIREBASE", "CMS"],
        level: "70%"
      }
    ]
  };


  const { heading, btn, topWidget, mainWidget, link, icons } = HeroData;
  const { title, codes, level } = topWidget;

  return (
    <Grid container spacing={7} sx={{ mb: '80px' }} >

      {/* Hero Left Text */}
      <Grid item xs={12} md={7} sx={{ textAlign: 'center' }}>
        <Typography variant='h5'>{heading}</Typography>
        <Typography variant='body1' gutterBottom>I'm <span style={{ color: "red" }}>OLUWASHINA</span>, a creative, skilled and experienced <span style={{ color: "red" }}>Web and Mobile application developer</span> from NIGERIA. I design and develop <span style={{ color: "red" }}>Front-end</span> and implement <span style={{ color: "red" }}>Back-end </span>using <span style={{ color: "red" }}>JAVASCRIPT</span> and cutting edge technologies.</Typography>

        <Stack direction='row' spacing={1} justifyContent='center' mb={2}>
          {
            icons.map((icon) => {
              return (
                <React.Fragment key={icon.name}>
                <IconButton color="primary" size='small'>
                  <a href={icon.link} target="_blank" rel="noopener noreferrer">
                    {icon.name}
                  </a>
                </IconButton>
                </React.Fragment>
              )
            })
          }
        </Stack>

        {/* <Link href={link} passHref> */}
          <Button variant='contained'>{btn}</Button>
        {/* </Link> */}
      </Grid>

      {/* Hero Right Widget */}
      <Grid item xs={12} md={5}>
        <Stack direction='row' spacing={2}>
          {
            codes.map((basic, index) => <Typography key={index} variant='body2'>{basic}</Typography>)
          }
        </Stack>
        <HomeWidget heading={title} percentage={level} />
        <Stack spacing={2} sx={{ mt: 3 }}>
          {
            mainWidget.map((program, index) => {
              return (
                <React.Fragment key={index}>
                <HomeWidget heading={program.title} percentage={program.level}>
                  <Stack direction='row' spacing={1}>
                    {
                      program.codes.map((code) => <Typography key={code} variant='body2'>{code}</Typography>)
                    }
                  </Stack>
                  <Divider />
                </HomeWidget>
                </React.Fragment>
              )
            })
          }
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Hero;

// Left Widget Component 
const HomeWidget = ({ heading, percentage }) => {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Grid container>
      <Grid item xs={7}>
        <Typography variant='h5'>
          {heading}
        </Typography>
        {children}
      </Grid>
      <Grid item xs={5}>
        <Typography align={matches ? 'center' : 'right'} variant='h5'>
          {percentage}
        </Typography>
      </Grid>
    </Grid>
  )
}