import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const ExperienceData = [
    {
        id: 1,
        contents: [
            {
                css: "subtitle1",
                text: "Passaggregate"
            },
            {
                css: "caption",
                text: "2017 - 2022"
            },
            {
                css: "subtitle1",
                text: "Passaggregate Nig ltd"
            },
            {
                css: "subtitle1",
                text: "Development and execution of Passaggregate Ideas."
            },
        ]
    },
    {
        id: 2,
        contents: [
            {
                css: "subtitle1",
                text: "Freelancing"
            },
            {
                css: "caption",
                text: "2022 - Present"
            },
            {
                css: "subtitle1",
                text: "Series of job related to programming"
            },
            {
                css: "subtitle1",
                text: "Development of mobile and web application"
            },
        ]
    },
]


const ExperienceWidget = () =>   {
    return (
        <Grid xs={12} container spacing={3}>
            {
                ExperienceData.map((data) => {
                    return (
                        <Grid key={data.id} item xs={12}>
                            <Card sx={{mt: 1}}>
                                <CardContent>
                                    {
                                        data.contents.map((content) => <Typography key={content.text} variant={content.css}>{content.text}</Typography>)
                                    }
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }

        </Grid>
    )
}


export default ExperienceWidget;