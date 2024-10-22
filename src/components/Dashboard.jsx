import Grid2 from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardContent";
import Typography from "@mui/material/CardContent";
import React from "react";

export default function Dashboard() {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Sales
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <button size="small">Learn More</button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={8}>{card}</Grid2>
      <Grid2 xs={4}>{card}</Grid2>
      <Grid2 xs={4}>{card}</Grid2>
      <Grid2 xs={8}>{card}</Grid2>
    </Grid2>
  );
}
