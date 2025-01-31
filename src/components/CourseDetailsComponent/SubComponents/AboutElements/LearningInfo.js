import React from "react";
import {
  Box,
  Grid,
  makeStyles,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

function LearningInfo(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Typography variant="h4" color="textSecondary" gutterBottom>
          What you will learn
        </Typography>
        <Box mt={2} mb={2}>
          <Grid container item xs={12} spacing={2}>
            {[1, 2, 3].map((items, index) => (
              <Box key={index} component="div">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <CheckIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography variant="subtitle1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim{" "}
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    border: `2px solid ${theme.palette.text.secondary}`,
    borderRadius: "5px",
    marginRight: theme.spacing(2),
    background: "#fff",
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(0),
    },
  },
  container: {
    padding: theme.spacing(2),
  },
  avatar: {
    border: `2px dotted ${theme.palette.secondary.default}`,
    background: "#fff",
    color: theme.palette.secondary.default,
  },
}));

export default LearningInfo;
