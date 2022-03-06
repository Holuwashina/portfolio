import * as React from "react";
import Link from 'next/link';
import { useTheme } from "@mui/styles";
import { Grid, Typography, Button, Stack, Divider, IconButton, useMediaQuery } from '@mui/material';
import { SiGithub, SiLinkedin } from 'react-icons/si';

function Hero() {

 const HeroData= {
    heading: "Hire Me",
    text: `I'm OLUWASHINA, a creative, skilled and experienced Web and Mobile application developer   from NIGERIA. I design and develop Front-end and implement Back-end using JAVASCRIPT and cutting edge technologies.`,
    btn: "RESUME",
    link: "resume",

    icons: [
      {
        name: <SiGithub />,
        link: "www.google.com"
      },
      {
        name: <SiLinkedin />,
        link: "www.google.com"
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


  const { heading, text, btn, topWidget, mainWidget, link, icons } = HeroData;
  const { title, codes, level } = topWidget;

  return (
    <Grid
      container
      spacing={7}
      sx={{ mb: '80px' }}
    >

      {/* Hero Left Text */}
      <Grid item xs={12} md={7} sx={{ textAlign: 'center' }}>
        <Typography variant='h5'>{heading}</Typography>
        <Typography variant='body1' gutterBottom>{text}</Typography>
        <Stack direction='row' spacing={1} justifyContent='center' mb={2}>
          {
            icons.map((icon) => {
              return (
                <IconButton key={icon.name} color="primary" size='small'>
                  <Link href={icon.link}>
                    {icon.name}
                  </Link>
                </IconButton>
              )
            })
          }
        </Stack>
        <Link href={link}>
          <Button variant='contained'>{btn}</Button>
        </Link>
      </Grid>

      {/* Hero Right Widget */}
      <Grid item xs={12} md={5}>
        <Stack direction='row' spacing={2}>
          {
            codes.map((basic) => <Typography key={basic} variant='body2'>{basic}</Typography>)
          }
        </Stack>
        <HomeWidget heading={title} percentage={level} />
        <Stack spacing={2} sx={{ mt: 3 }}>
          {
            mainWidget.map((program) => {
              return (
                <HomeWidget key={program.id} heading={program.title} percentage={program.level}>
                  <Stack direction='row' spacing={1}>
                    {
                      program.codes.map((code) => <Typography key={code} variant='body2'>{code}</Typography>)
                    }
                  </Stack>
                  <Divider />
                </HomeWidget>
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
const HomeWidget = ({ heading, percentage, children }) => {
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