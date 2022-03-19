import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const EduData = [
  {
    id: 1,
    contents: [
      {
        css: 'body1',
        text: 'University',
      },
      {
        css: 'body2',
        text: '2017 - 2021',
      },
      {
        css: 'body1',
        text: 'Tai Solarin University, Ijebu-Ode Nigeria.',
      },
      {
        css: 'body1',
        text: 'B.Ed in Computer Science',
      },
    ],
  },
];

const EducationWidget = () => {
  return (
    <Grid container spacing={3}>
      {EduData.map((data, index) => {
        return (
          <Grid key={index} item xs={12}>
            <Card sx={{ mt: 1 }}>
              <CardContent>
                {data.contents.map((content, index) => (
                  <Typography variant={content.css} key={index}>
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

export default EducationWidget;
