import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const PersonalInfoData = [
    {
        title: "Name:",
        info: "Hamzat Oluwashina"
    },
    {
        title: "Residence:",
        info: "Ibadan, Nigeria"
    },
    {
        title: "Current Job:",
        info: "Freelancing"
    },
    {
        title: "Name:",
        info: "Hamzat Oluwashina"
    },
    {
        title: "Age:",
        info: 25
    },
    {
        title: "Language:",
        info: "English"
    },
    {
        title: "Sex:",
        info: "Male"
    }
]

const PersonalInfoWidget = () => {
    return (
        <Grid container spacing={2} sx={{ mt: 1 }}>
            {
                PersonalInfoData.map((data) => {
                    return (
                        <Grid key={data.title} item xs={6}>
                            <Typography variant='subtitle1'>{data.title}</Typography>
                            <Typography variant='subtitle2'>{data.info}</Typography>
                        </Grid>
                    )
                })
            }

        </Grid>
    )
}

export default PersonalInfoWidget;