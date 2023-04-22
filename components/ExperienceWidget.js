import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const ExperienceData = [
  {
    id: 1,
    contents: [
      {
        css: 'body1',
        text: 'Passaggregate',
      },
      {
        css: 'body2',
        text: '2017 - 2022',
      },
      {
        css: 'body1',
        text: 'Passaggregate Nig ltd',
      },
      {
        css: 'body1',
        text: 'Development and execution of Passaggregate Ideas.',
      },
    ],
  },
  {
    id: 2,
    contents: [
      {
        css: 'body1',
        text: 'Freelancing',
      },
      {
        css: 'body2',
        text: '2022 - Present',
      },
      {
        css: 'body1',
        text: 'Series of job related to programming',
      },
      {
        css: 'body1',
        text: 'Development of mobile and web application',
      },
    ],
  },
];

const ExperienceWidget = () => {
  return (
    <Grid container spacing={3}>
      {ExperienceData.map((data, index) => {
        return (
          <Grid key={index} item xs={12}>
            <Card sx={{ mt: 1 }}>
              <CardContent>
                {data.contents.map((content, index) => (
                  <Typography key={index} variant={content.css}>
                    {content.text}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ExperienceWidget;
