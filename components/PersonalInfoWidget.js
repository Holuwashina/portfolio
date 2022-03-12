import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const PersonalInfoWidget = () => {

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

    
    return (
        <Grid container spacing={2} sx={{ mt: 1 }}>
            {
                PersonalInfoData.map((data, index) => {
                    return (
                        <Grid key={index} item xs={6}>
                            <Typography>{data.title}</Typography>
                            <Typography sx={{color: "red"}}>{data.info}</Typography>
                        </Grid>
                    )
                })
            }

        </Grid>
    )
}

export default PersonalInfoWidget;