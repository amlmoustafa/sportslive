import { Paper } from "@material-ui/core";
import { Typography } from "@mui/material";
import paperImgStyles from "../styles/paperImgStyles";

const PaperImg = () => {
  const classes = paperImgStyles();

  return (
    <Paper className={classes.paperContainer}>
      <div className={classes.overlay}>
        <Typography gutterBottom variant="h3">
          Match 23
        </Typography>
        <Typography variant="h4">T20 world cup 2020</Typography>
      </div>
    </Paper>
  );
};

export default PaperImg;
