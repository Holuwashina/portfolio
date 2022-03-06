import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { SiTypescript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiGatsby } from 'react-icons/si';
import { SiAngular } from 'react-icons/si';
import { SiVuedotjs } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import { DiAndroid } from 'react-icons/di';
import { SiIos } from 'react-icons/si';
import { SiMaterialui } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiChakraui } from 'react-icons/si';
import Chip from '@mui/material/Chip';

const SkillData = [
    {
        id: 1,
        title: "Coding SKills",
        chip: [
            {
                icon: <SiHtml5 />,
                title: "HTML"
            },
            {
                icon: <SiCss3 />,
                title: "CSS"
            },
            {
                icon: <SiJavascript />,
                title: "Javascript"
            },
            {
                icon: <SiTypescript />,
                title: "Typescript"
            }
        ]
    },
    {
        id: 2,
        title: "Frame-work Skills",
        chip: [
            {
                icon: <SiReact />,
                title: "React"
            },
            {
                icon: <SiReact />,
                title: "React Native"
            },
            {
                icon: <SiNextdotjs />,
                title: "Next js"
            },
            {
                icon: <SiGatsby />,
                title: "Gatsby"
            },
            {
                icon: <SiAngular />,
                title: "Angular"
            },
            {
                icon: <SiVuedotjs />,
                title: "Vue js"
            },
            {
                icon: <SiMaterialui />,
                title: "Material UI"
            },
            {
                icon: <SiBootstrap />,
                title: "Bootstrap"
            },
            {
                icon: <SiChakraui />,
                title: "Chakra UI"
            },
        ]
    },
    {
        id: 3,
        title: "Design Skills",
        chip: [
            {
                icon: <CgWebsite />,
                title: "Web Design"
            },
            {
                icon: <DiAndroid />,
                title: "Android Application Design"
            },
            {
                icon: <SiIos />,
                title: "Javascript"
            },
            {
                icon: <SiTypescript />,
                title: "IOS Application Design"
            }
        ]
    },
]


const SkillWidget = () => {
    return (
        <Grid xs={12} container>
            {
                SkillData.map((skill) => {
                    return (
                        <Grid key={skill.id} xs={12} item sx={{ mt: "15px" }}>
                            <Typography variant='subtitle1'>{skill.title}</Typography>
                            {
                                skill.chip.map((data) => <Chip key={data.title} icon={data.icon} label={data.title} color="primary" variant="outlined" sx={{ m: "10px 0 0 10px" }} />)
                            }
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default SkillWidget;


