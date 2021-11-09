import React from "react";
import { CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";

const styles = {
  defaultColor: {
    color: "#232960",
  },
  progressContainer: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
};

const useStyles = makeStyles(styles);

const LoadingCircle = ({ containerClass, size = 40, ...restProps }) => {
  const classes = useStyles();
  return (
    <div
      className={containerClass ? containerClass : classes.progressContainer}
    >
      <CircularProgress
        className={classes.defaultColor}
        size={size}
        {...restProps}
      />
    </div>
  );
};

export default LoadingCircle;
