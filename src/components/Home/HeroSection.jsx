import React from 'react'
import { Box, Container, Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';


// import BG from '../../assets/BG-World_map-1024x640.png'

import viacom from '../../assets/ANDELA_viacom.png';
import pluralsight from '../../assets/ANDELA_pluralsight.png';
import percolate from '../../assets/ANDELA_percolate.png';
import invision from '../../assets/ANDELA-invision.png';
import github from '../../assets/ANDELA_github.png';
import cloudfare from '../../assets/ANDELA_cloudflare.png';
import coursera from '../../assets/ANDELA_logo_coursera.png';
import linux from '../../assets/ANDELA-logo_theLinuxFoundation.png';
import foursquare from '../../assets/ANDELA-logo_foursquare.png';

const useStyle = makeStyles(theme => ({

  heroContainer: {
    background: 'rgb(16, 16, 138)',
    paddingTop: '4.3em',
    paddingBottom: '4em',
  },
  heroMain: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    letterSpacing: '2px',
    [theme.breakpoints.down('md')]: {
      textTransform: 'uppercase',
      fontSize: '1.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      textTransform: 'uppercase',
      fontSize: '1rem'
    }
  },
  heroButton: {
    ...theme.typography.getStarted,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(11),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(8),
    },
    '&:hover': {
      background: '#fff',
      color: theme.palette.common.Yellow,
    }
  },
  heroTrust: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
  },
}))



function HeroSection() {

  const theme = useTheme();
  const classes = useStyle();


  const images = [
    { name : 'viacom', url: viacom }, 
    { name: 'pluralsight', url: pluralsight},
    { name: 'percolate', url: percolate},
    { name: 'invision', url: invision},
    { name: 'github', url: github},
    { name: 'cloudfare', url: cloudfare},
    { name: 'coursera', url: coursera},
    { name: 'linux', url: linux},
    { name: 'foursquare', url: foursquare},
  ];

  
  return (
    <React.Fragment>
      <Box className={classes.heroContainer}>
        <Container maxWidth='xl'>
          <Grid container direction='column' align='center'>
            <Grid item>
              <Typography variant='h2' className={classes.heroMain}>
                Andela builds remote engineering teams
              </Typography>
              <Typography variant='h2' className={classes.heroMain}
                style={{color: theme.palette.common.Yellow,
                marginBottom: theme.spacing(2)}}>
                  {'< that work >'}
              </Typography>      
              <Typography variant='subtitle1' style={{color: '#fff'}}>
                Doing remote well is hard. We’ve helped hundreds of companies
                <br/>build and manage high performing teams.
              </Typography>
              <Button variant='contained' className={classes.heroButton}>
                get started
              </Button>
              <Typography variant='h6' className={classes.heroTrust}>
                TRUSTED BY LEADING TECH COMPANIES
              </Typography>
            </Grid>
            <Grid item>
              <Grid container justify='center' align='center' spacing={5}>
                {images.map(({name, url}) => (
                  <Grid item key={`${name}${url}`}>
                    <img src={`${url}`} alt={`${name}`} height='30px'/>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box style={{background: theme.palette.common.Yellow}} py={2}>
        <Container maxWidth='xl'>
          <Grid container justify='center'>
            <Grid item>
              <Typography variant='h6' style={{fontSize: '1.1rem', fontWeight: 'bold', color: '#000',textAlign: 'center'}}>

              In the News: Andela to Double Engineering Talent Pool With Pan-African Expansion {'>'}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default HeroSection;

