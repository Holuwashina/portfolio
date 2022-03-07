import * as React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, CardActionArea, Divider, Stack } from "@mui/material";



function Services({serviceCard, heading, handleProjectClick, children}) {

  // const handleProjectLink = (event, link) => {
  //   event.preventDefault(); 
  //   window.open(link);
  // }

  return (
    <>
      <Typography align="center" gutterBottom variant="h5">
        {heading}
      </Typography>

      <Divider />
      
      <Grid container spacing={2} sx={{ pt: 2, pb: 2, textAlign: "-webkit-center"}}>
        {serviceCard.map((card) => {
          return (
            <Grid key={card.id} item xs={12} sm={6} md={4}>
              <Card raised sx={{ maxWidth: 350, minWidth: 100 }} onClick= {handleProjectClick} >
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
                      <Typography variant="caption" sx={{ color: "red", textTransform: "uppercase" }}>{card.progress}</Typography>
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
