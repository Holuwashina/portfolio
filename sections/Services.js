import * as React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Divider,
  Stack,
} from "@mui/material";
import Link from "next/link";

function Services({ serviceCard, heading, imgSize = "100%", url, children }) {
  return (
    <>
      <Divider textAlign="center" sx={{ textTransform: "uppercase" }}>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          {heading}
        </Typography>
      </Divider>

      <Grid container spacing={2} sx={{ py: 5, textAlign: "-webkit-center" }}>
        {serviceCard.map((card) => {
          return (
            <Grid key={card.id} item xs={6} sm={4} md={3}>
              <Link href={`${card.url}`} style={{ textDecoration: "none" }}>
                <Card raised sx={{ maxWidth: 350, minWidth: 100 }}>
                  <CardActionArea>
                    <CardMedia
                      sx={{ objectFit: "fill", width: imgSize }}
                      component="img"
                      image={`/images/${card.img}`}
                      alt={card.type}
                    />
                    <CardContent>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography variant="subtitle1">
                          {card.type}{" "}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "gray",
                            textTransform: "uppercase",
                          }}
                        >
                          {card.progress}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
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
