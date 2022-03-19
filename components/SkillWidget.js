import Typography from '@mui/material/Typography';
import { Grid, Chip } from '@mui/material';
import {
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiGatsby,
  SiAngular,
  SiVuedotjs,
  SiIos,
  SiMaterialui,
  SiBootstrap,
  SiChakraui,
} from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import { DiAndroid } from 'react-icons/di';

const SkillData = [
  {
    id: 1,
    title: 'Coding SKills',
    chip: [
      {
        icon: <SiHtml5 />,
        title: 'HTML',
      },
      {
        icon: <SiCss3 />,
        title: 'CSS',
      },
      {
        icon: <SiJavascript />,
        title: 'Javascript',
      },
      {
        icon: <SiTypescript />,
        title: 'Typescript',
      },
    ],
  },
  {
    id: 2,
    title: 'Frame-work Skills',
    chip: [
      {
        icon: <SiReact />,
        title: 'React',
      },
      {
        icon: <SiReact />,
        title: 'React Native',
      },
      {
        icon: <SiNextdotjs />,
        title: 'Next js',
      },
      {
        icon: <SiGatsby />,
        title: 'Gatsby',
      },
      {
        icon: <SiAngular />,
        title: 'Angular',
      },
      {
        icon: <SiVuedotjs />,
        title: 'Vue js',
      },
      {
        icon: <SiMaterialui />,
        title: 'Material UI',
      },
      {
        icon: <SiBootstrap />,
        title: 'Bootstrap',
      },
      {
        icon: <SiChakraui />,
        title: 'Chakra UI',
      },
    ],
  },
  {
    id: 3,
    title: 'Design Skills',
    chip: [
      {
        icon: <CgWebsite />,
        title: 'Web Design',
      },
      {
        icon: <DiAndroid />,
        title: 'Android Application Design',
      },
      {
        icon: <SiIos />,
        title: 'Javascript',
      },
      {
        icon: <SiTypescript />,
        title: 'IOS Application Design',
      },
    ],
  },
];

const SkillWidget = () => {
  return (
    <Grid container>
      {SkillData.map((skill, index) => {
        return (
          <Grid key={index} item xs={12} sx={{ mt: '15px' }}>
            <Typography>{skill.title}</Typography>
            {skill.chip.map((data, index) => (
              <Chip
                key={index}
                icon={data.icon}
                label={data.title}
                color='primary'
                variant='outlined'
                sx={{ m: '10px 0 0 10px' }}
              />
            ))}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SkillWidget;
