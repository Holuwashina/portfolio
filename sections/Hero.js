import * as React from "react";
import Link from "next/link";
import { useTheme } from "@mui/styles";
import {
  Paper,
  Grid,
  Typography,
  Stack,
  Divider,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

const HeroData = {
  heading: "HIRE ME",
  btn: "RESUME",
  link: "resume",

  icons: [
    {
      name: <SiGithub />,
      link: "https://github.com/Holuwashina",
    },
    {
      name: <SiLinkedin />,
      link: "https://www.linkedin.com/in/hamzat-oluwashina-681986169",
    },
  ],

  firstWidget: {
    title: "Coding : REACT",
    codes: ["HTML", "CSS", "JAVASCRIPT"],
  },

  secondWidget: {
    title: "FRONT-END",
    codes: ["REACT", "NEXT JS", "GATSBY", "..."],
    level: "95%",
  },

  thirdWidget: {
    title: "BACK-END",
    codes: ["NODE", "EXPRESS", "MONGO DB", "..."],
    level: "90%",
  },
  scramble: ["JAVASCRIPT", "NODE JS"],
};

const HeroSection = () => {
  const {
    heading,
    icons,
    link,
    btn,
    firstWidget,
    secondWidget,
    thirdWidget,
    scramble,
  } = HeroData;

  return (
    <>
      <Grid
        container
        spacing={10}
        sx={{ justifyContent: "center", py: "70px" }}
      >
        {/* Hero Left Text */}
        <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            {heading}
          </Typography>
          <Typography gutterBottom>
            I'm <span style={{ color: "red" }}>OLUWASHINA</span>, a creative,
            skilled and experienced Web and Mobile application developer from
            NIGERIA. I design and develop Front-end and implement Back-end using
            JAVASCRIPT and cutting edge technologies.
          </Typography>

          <Stack direction="row" spacing={1} justifyContent="center" mb={2}>
            {icons.map((icon, index) => {
              return (
                <React.Fragment key={index}>
                  <IconButton
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    color="primary"
                  >
                    {icon.name}
                  </IconButton>
                </React.Fragment>
              );
            })}
          </Stack>

          <Link href={link}>
            <Button variant="text">{btn}</Button>
          </Link>
        </Grid>

        {/* Hero Right Widget */}
        <Grid item xs={12} md={5}>
          {/* 1st Widget */}
          <HomeWidget
            heading={
              <Typography sx={{ color: "red", textTransform: "uppercase" }}>
                <Typewriter words={scramble} loop={1000}></Typewriter>
              </Typography>
            }
            widget={firstWidget}
          >
            {<Typography>CODING: </Typography>}
          </HomeWidget>

          <Divider />

          {/* 2nd Widget */}
          <HomeWidget
            heading={secondWidget.title}
            percentage={secondWidget.level}
            widget={secondWidget}
          />

          <Divider />

          {/* 3rd Widget */}
          <HomeWidget
            heading={thirdWidget.title}
            percentage={thirdWidget.level}
            widget={thirdWidget}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HeroSection;

// Left Widget Component
const HomeWidget = ({ heading, percentage, widget, children }) => {
  const { codes } = widget;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Paper elevation={0} sx={{ mt: 1, mb: 1 }}>
      <Stack direction="row" spacing={2}>
        {codes.map((code, index) => (
          <Typography variant="body2" key={index}>
            {code}
          </Typography>
        ))}
      </Stack>

      <Grid container>
        <Grid item xs={7}>
          <Stack direction="row" spacing={2}>
            {children}
            {heading}
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <Typography align={matches ? "center" : "right"}>
            {percentage}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
