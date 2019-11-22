import React from "react";
import { SvgIcon, Typography, Grid, useMediaQuery } from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
  makeStyles
} from "@material-ui/core/styles";
import "./Skill.css";

const useStyles = makeStyles({
  umbrellaTextRoot: {
    margin: "-4px 0 0 0",
    fontWeight: "400"
  }
});

function SkillContents({ skill }) {
  const theme = useTheme(); // taking theme from parent <ThemeProvider>
  const matches = useMediaQuery(theme.breakpoints.down("xs")); // breakpoint
  const classes = useStyles();

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: `${matches ? "center" : "flex-start"}` // using media query
        }}
      >
        <SvgIcon
          className="svg-icon"
          viewBox="0 0 24 24"
          style={{ height: "64px", width: "auto" }}
          color="primary"
        >
          <path d={skill.svgPath} />
        </SvgIcon>
      </div>
      <Typography
        variant="h6"
        component="h3"
        classes={{ root: classes.umbrellaTextRoot }}
        className="umbrellaText one-line"
        style={{ textAlign: `${matches ? "center" : "left"}` }}
      >
        {skill.umbrella}
      </Typography>
      <Typography
        variant="body2"
        component="h4"
        className="des"
        style={{ textAlign: `${matches ? "center" : "left"}` }}
      >
        {skill.des}
      </Typography>
    </React.Fragment>
  );
}

const theme = createMuiTheme(); // creates the theme that is provided to <ThemeProvider>
export default function Skill({ skill }) {
  return (
    <Grid item xs={12} sm={6} md={3} className="skill">
      <ThemeProvider theme={theme}>
        <SkillContents skill={skill} />
      </ThemeProvider>
    </Grid>
  );
}
