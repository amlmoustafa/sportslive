import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import footerStyles from "../assets/styles/footerStyles";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Link from "@mui/material/Link";

const Footer = () => {
  const classes = footerStyles();

  return (
    <AppBar position="static" className={classes.footerContainer}>
      <Toolbar className={classes.toolbar}>
        <SportsSoccerIcon fontSize="large" />
        <Typography variant="h5" color="inherit">
          SportsLive
        </Typography>
      </Toolbar>

      <Grid container className={classes.footerContentContainer}>
        <Grid item xs={12} md={6}>
          <Typography variant="body2" color="inherit">
            © Copyright SportsLive 2020. All rights reserved.
          </Typography>
        </Grid>
        <Grid className={classes.footerLinks} item xs={12} md={6}>
          <Link href="#" color="inherit" underline="none" variant={"body2"}>
            Career
          </Link>
          <Link href="#" color="inherit" underline="none" variant={"body2"}>
            Contact Us
          </Link>
          <Link href="#" color="inherit" underline="none" variant={"body2"}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" underline="none" variant={"body2"}>
            Terms and Conditions
          </Link>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Footer;
