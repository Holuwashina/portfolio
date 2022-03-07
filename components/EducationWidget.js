import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const EduData = [
    {
        id: 1,
        contents: [
            {
                css: "subtitle1",
                text: "University"
            },
            {
                css: "caption",
                text: "2017 - 2021"
            },
            {
                css: "subtitle1",
                text: "Tai Solarin University, Ijebu-Ode Nigeria."
            },
            {
                css: "subtitle1",
                text: "B.Ed in Computer Science"
            },
        ]
    },
    {
        id: 2,
        contents: [
            {
                css: "subtitle1",
                text: "University"
            },
            {
                css: "caption",
                text: "2017 - 2021"
            },
            {
                css: "subtitle1",
                text: "Tai Solarin University, Ijebu-Ode Nigeria."
            },
            {
                css: "subtitle1",
                text: "B.Ed in Computer Science"
            },
        ]
    },
]


const EducationWidget = () => {
    return (
        <Grid xs={12} container spacing={3}>
            {
                EduData.map((data) => {
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

export default EducationWidget;