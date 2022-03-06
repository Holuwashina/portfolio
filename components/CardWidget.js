import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';


const CardWidget = ({cardData}) => {
    return (
        <Grid xs={12} container spacing={3}>
            {
                cardData.map((data) => {
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

export default CardWidget;