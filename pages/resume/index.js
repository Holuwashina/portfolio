import * as React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useTheme } from '@mui/styles';
import {
  Typography,
  Box,
  Grid,
  Divider,
  Tab,
  Tabs,
  SpeedDialAction,
  SpeedDial,
  SpeedDialIcon,
  useMediaQuery,
} from '@mui/material';
import SkillWidget from '../../components/SkillWidget';
import EducationWidget from '../../components/EducationWidget';
import KnowledgeWidget from '../../components/KnowledgeWidget';
import ExperienceWidget from '../../components/ExperienceWidget';
import PersonalInfoWidget from '../../components/PersonalInfoWidget';
import sideImage from '../../public/images/side.svg';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import Download from '@mui/icons-material/Download';

const TabData = [
  {
    id: 0,
    name: 'Information',
    heading: 'Personal Information',
  },
  {
    id: 1,
    name: 'Education',
    heading: 'Education',
  },
  {
    id: 2,
    name: 'Knowledge',
    heading: 'Knowledge',
  },
  {
    id: 3,
    name: 'Skills',
    heading: 'My Skills',
  },
  {
    id: 4,
    name: 'Experience',
    heading: 'Experience',
  },
];

const Portfolio = () => {
  const [value, setValue] = React.useState(0);

  const shareData = {
    title: 'ZHINE',
    url: 'https://',
  };

  const theme = useTheme();
  const smMatches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Box sx={{ position: 'relative', height: 600, mx: 'auto' }}>
            <StyledTab tabValue={value} tabSetValue={setValue} tabs={TabData}>
              {TabData.map((tab, index) => {
                return (
                  <React.Fragment key={index}>
                    <TabPanel value={value} index={tab.id}>
                      <Typography gutterBottom variant='h6'>
                        {tab.heading}
                      </Typography>
                      <Divider />
                      {(value === 0 && <PersonalInfoWidget />) ||
                        (value === 1 && <EducationWidget />) ||
                        (value === 2 && <KnowledgeWidget />) ||
                        (value === 3 && <SkillWidget />) ||
                        (value === 4 && <ExperienceWidget />)}
                    </TabPanel>
                  </React.Fragment>
                );
              })}
            </StyledTab>
            <SpeedDial
              ariaLabel='SimpleDial basic example'
              direction='right'
              icon={<SpeedDialIcon sx={{ fontSize: 3 }} />}
              sx={{ position: 'absolute', bottom: 3, left: 30 }}
            >
              <SpeedDialAction
                icon={<Download />}
                tooltipTitle='Download CV'
                tooltipPlacement='bottom'
                href='/resume.pdf'
                download='resume'
              />
            </SpeedDial>
          </Box>
        </Grid>
        {smMatches && (
          <Grid item sm={12} md={6}>
            <Box
              sx={{
                height: 400,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              <Image
                src={sideImage}
                alt='side'
                width={300}
                height={300}
                priority
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
};
export default Portfolio;

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const StyledTab = ({ children, tabs, tabValue, tabSetValue }) => {
  const handleChange = (event, newValue) => {
    tabSetValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 350, sm: 600 } }}>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label='basic tabs example'
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.name} {...a11yProps(`${tab.id}`)} />
        ))}
      </Tabs>
      {children}
    </Box>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};
