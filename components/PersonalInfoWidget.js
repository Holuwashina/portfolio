import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const PersonalInfoWidget = () => {
  const PersonalInfoData = [
    {
      title: 'Name:',
      info: 'Hamzat Oluwashina',
    },
    {
      title: 'Sex:',
      info: 'Male',
    },
    {
      title: 'Age:',
      info: '25 Years',
    },
    {
      title: 'Nationality:',
      info: 'Nigeria',
    },
    {
      title: 'Current Job:',
      info: 'Freelancing',
    },
    {
      title: 'Phone:',
      info: '+2348062820377',
    },
    {
      title: 'Language:',
      info: 'English',
    },
  ];

  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {PersonalInfoData.map((data, index) => {
        return (
          <Grid key={index} item xs={6}>
            <Typography>{data.title}</Typography>
            <Typography variant='body2'>{data.info}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PersonalInfoWidget;
