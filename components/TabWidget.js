import * as React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/Image';
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery"
import {Typography, Box, Grid, Button, Divider, Tab, Tabs, SpeedDialAction, Zoom, Fab, SpeedDial, SpeedDialIcon} from '@mui/material';
import SkillWidget from './SkillWidget';
import EducationWidget from './EducationWidget';
import KnowlegeWidget from './KnowlegeWidget';
import ExperienceWidget from './ExperienceWidget';
import PersonalInfoWidget from "../components/PersonalInfoWidget"
import sideImage from "../public/images/8.svg"
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import { Download } from '@mui/icons-material';


const fabStyle = {
  position: "absolute",
  bottom: 10,
  left: 30
}

const actions = [
  { icon: <FileCopyIcon />, name: "Copy Link" },
  { icon: <Download />, name: "Download CV" },
]

function TabWidget() {

  const [value, setValue] = React.useState(0);

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const smMatches = useMediaQuery(theme.breakpoints.up('md'))

  const TabData = [
    {
      id: 0,
      name: "Information",
      heading: "Personal Information",

    },
    {
      id: 1,
      name: "Education",
      heading: "Education",
    },
    {
      id: 2,
      name: "Knowlege",
      heading: "Knowlege",
    },
    {
      id: 3,
      name: "Skills",
      heading: "My Skills",
    },
    {
      id: 4,
      name: "Experience",
      heading: "Experience",
    },
  ]

  return (
    <Grid direction={matches ? "column-reverse" : ""} container spacing={2} >
      <Grid item sm={12} md={6}>
        <Box sx={{ position: "relative", height: 500 }}>
          <StyledTab tabValue={value} tabSetValue={setValue} tabs={TabData}>
            {
              TabData.map((tab) => {
                return (
                  <TabPanel key={tab.id} value={value} index={tab.id}>
                    <Typography gutterBottom variant='h5'>{tab.heading}</Typography>
                    <Divider />
                    {
                      value === 0 && <PersonalInfoWidget /> ||
                      value === 1 && <EducationWidget /> ||
                      value === 2 && <KnowlegeWidget /> ||
                      value === 3 && <SkillWidget /> ||
                      value === 4 && <ExperienceWidget />
                    }
                  </TabPanel>
                )
              })
            }
          </StyledTab>
          <SpeedDial 
          ariaLabel = "SImpleDial basic example"
          direction= "right"
          icon={<SpeedDialIcon sx={{fontSize: 3}} />}
          sx={{ position: "absolute", bottom: 10, left: 30 }}
          >
            {
              actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  tooltipPlacement="bottom"
                />
              ))
            }
          </SpeedDial>
        </Box>
      </Grid>
      {
        smMatches &&
        <Grid item sm={12} md={6} >
          <Box sx={{ height: 400, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
            <Image src={sideImage} width={300} height={300} priority />
          </Box>
        </Grid>
      }

    </Grid>
  );
}
export default TabWidget;


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


const StyledTab = (props) => {
  const { children, tabs, tabValue, tabSetValue } = props

  const handleChange = (event, newValue) => {
    tabSetValue(newValue);
  };

  return (
    <>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label='basic tabs example'
        variant="scrollable"
        scrollButtons="auto"
      >
        {
          tabs.map((tab) => <Tab key={tab.id} label={tab.name} {...a11yProps(`${tab.id}`)} />)
        }
      </Tabs>
      {children}
    </>
  )
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}