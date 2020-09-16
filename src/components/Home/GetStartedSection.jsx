import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
;

const useStyle = makeStyles(theme => ({
  getStartedContainer: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(13),
    background: 'rgb(12, 12, 209)',
    clipPath: `polygon(0% 0%, 100% 20%,100% 100%, 0% 100%)`
  },
  text: {
    fontSize: '2.1rem',
    fontWeight: 700,
    color: '#fff',
    fontFamily: 'pacifico'
  },
  getStartedButton: {
    ...theme.typography.getStarted,
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3),
    },
    '&:hover': {
      background: '#fff',
      color: theme.palette.common.Yellow,
    }
  },
  
}))

function GetStartedSection() {


  const classes = useStyle();

  return (
    <React.Fragment>
      <Box className={classes.getStartedContainer}>
      <Container maxWidth='xl'>
          <Grid container direction='column' align='center'>
            <Grid item>
            <Typography variant='h2' className={classes.text}>
              Andela builds remote engineering teams <br/>{'< that work >'}
            </Typography>
            <Button variant='contained' className={classes.getStartedButton}>
              get started
            </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default GetStartedSection;
