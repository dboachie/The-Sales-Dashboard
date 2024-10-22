import Typography from "@mui/material/Typography";

export default function Heading({ title }) {
  return (
    <Typography variant="h1" component="h1">
      {title}
    </Typography>
  );
}
