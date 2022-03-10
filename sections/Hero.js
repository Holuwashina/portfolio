import * as React from 'react';
import Link from "next/link";
import { useTheme } from "@mui/styles";
import { Paper, Grid, Typography, Button, Stack, Divider, IconButton, useMediaQuery } from '@mui/material';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const HeroData = {
    heading: "Hire Me",
    btn: "RESUME",
    link: "resume",

    icons: [
        {
            name: <SiGithub />,
            link: "https://github.com/Holuwashina"
        },
        {
            name: <SiLinkedin />,
            link: "https://www.linkedin.com/in/hamzat-oluwashina-681986169"
        }
    ],

    firstWidget: {
        title: "Coding : REACT",
        codes: ["HTML", "CSS", "JAVASCRIPT"],
        level: "80%"
    },

    secondWidget: {
        title: "FRONT-END",
        codes: ["REACT", "NEXT", "GATSBY", "ANGULAR"],
        level: "90%"
    },

    thirdWidget: {
        title: "BACK-END",
        codes: ["NODE", "EXPRESS", "FIREBASE", "CMS"],
        level: "70%"
    }
};


const HeroSection = () => {

    const { heading, icons, link, btn, firstWidget, secondWidget, thirdWidget } = HeroData;

    return (
        <>
            <Grid container spacing={7} sx={{ mb: '80px' }} >
                {/* Hero Left Text */}
                <Grid item xs={12} md={7} sx={{ textAlign: 'center' }}>
                    <Typography variant='h5'>{heading}</Typography>
                    <Typography variant='body1' gutterBottom>I'm <span style={{ color: "red" }}>OLUWASHINA</span>, a creative, skilled and experienced Web and Mobile application developer from NIGERIA. I design and develop Front-end and implement Back-end using JAVASCRIPT and cutting edge technologies.</Typography>

                    <Stack direction='row' spacing={1} justifyContent='center' mb={2}>
                        {
                            icons.map((icon, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <IconButton href={icon.link} target="_blank" rel="noopener noreferrer" size='small' color="primary" >
                                            {icon.name}
                                        </IconButton>
                                    </React.Fragment>
                                )
                            })
                        }
                    </Stack>

                    <Link href={link} passHref>
                        <Button variant='contained'>{btn}</Button>
                    </Link>
                </Grid>

                {/* Hero Right Widget */}
                <Grid item xs={12} md={5}>

                    {/* 1st Widget */}
                    <HomeWidget heading={firstWidget.title} percentage={firstWidget.level} widget={firstWidget} />
                    <Divider />

                    {/* 2nd Widget */}
                    <HomeWidget heading={secondWidget.title} percentage={secondWidget.level} widget={secondWidget} />
                    <Divider />

                    {/* 3rd Widget */}
                    <HomeWidget heading={thirdWidget.title} percentage={thirdWidget.level} widget={thirdWidget} />

                </Grid>

            </Grid>
        </>
    )
}

export default HeroSection;


// Left Widget Component 
const HomeWidget = ({ heading, percentage, widget }) => {

    const { codes } = widget;

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <Paper elevation={0} sx={{ mt: 1, mb: 1 }}>
            <Stack direction='row' spacing={2}>
                {
                    codes.map((code, index) => <Typography key={index} variant='body2'>{code}</Typography>)
                }
            </Stack>

            <Grid container>
                <Grid item xs={7}>
                    <Typography variant='h5'>
                        {heading}
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography align={matches ? 'center' : 'right'} variant='h5'>
                        {percentage}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}