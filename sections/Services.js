import { Grid, Typography, Card, CardContent, CardMedia, CardActionArea, Divider, useMediaQuery, Stack } from "@mui/material";
import { useTheme } from "@mui/styles";


function Services({ serviceCard, heading, children }) {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('xs'))

  return (
    <>
      <Typography align="center" gutterBottom variant="h5">
        {heading}
      </Typography>
      <Divider />
      <Grid container justifyContent={matches ? "" : "center"} spacing={2} sx={{ pt: 2, pb: 2 }}>
        {serviceCard.map((card) => {
          return (
            <Grid key={card.id} item xs={6} sm={4}>
              <Card raised sx={{ maxWidth: 350, minWidth: 100 }}>
                <CardActionArea>
                  <CardMedia
                    sx={{ objectFit: "fill" }}
                    component="img"
                    height="150"
                    image={`/images/${card.img}`}
                    alt={card.type}
                  />
                  <CardContent>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="subtitle1">{card.type} </Typography>
                      <Typography variant="caption" sx={{ color: "green", textTransform: "uppercase" }}>{card.progress}</Typography>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Divider />
      {children}
    </>
  );
}

export default Services;
