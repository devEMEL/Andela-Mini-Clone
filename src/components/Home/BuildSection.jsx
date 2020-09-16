import React from 'react';
import { Box, Container, Grid, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import img1 from '../../assets/ANDELAimg1-1.png';
import img2 from '../../assets/ANEimg2.png';
import img3 from '../../assets/Andela-img9.png';

const useStyle = makeStyles(theme => ({
  buildContainer: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(20),
  },
  buildHeader: {
    fontSize: '6rem',
    fontWeight: 700,
    color: 'rgb(16, 16, 138)',
    lineHeight: 1.15,
    [theme.breakpoints.down('lg')]: {
      fontSize: '2.1rem',
    },
  },
  buildHeaderSub: {
    color: theme.palette.common.Yellow,
  },
  hoetContainer: {
    
    [theme.breakpoints.down('md')]: {
      marginTop: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
      marginBottom: theme.spacing(4),
    },
  },
  hoet: {
    color: 'rgb(16, 16, 138)',
    fontWeight: 700,

    [theme.breakpoints.down('lg')]: {
      fontSize: '.9rem',
      textTransform: 'capitalize',
    },
    
    
  },
  applications: {
    paddingTop: theme.spacing(4),
    fontWeight: 700,
    fontSize: '1.3rem',
    letterSpacing: '1px',
    maxWidth: '70%',

  },
  image1: {
    maxWidth: '70%',
    marginLeft: '70px',
    boxShadow: theme.shadows[3],
    [theme.breakpoints.down('md')]: {

    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-20px',
    },
  },
  image2: {
    maxWidth: '80%',
    marginTop: '-37px',
    marginLeft: '195px',
    boxShadow: theme.shadows[3],
    [theme.breakpoints.only('md')]: {
      marginLeft: '130px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '100px',
      maxWidth: '90%',
    },
  },
  image3: {
    maxWidth: '80%',
    marginTop: '-40px',
    marginLeft: '110px',
    boxShadow: theme.shadows[3],
    [theme.breakpoints.only('md')]: {
      marginLeft: '80px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '40px',
      maxWidth: '85%',
    },

  },
  itemFirst: {
    [theme.breakpoints.up('lg')]: {
      marginTop: '90px'
    },
    [theme.breakpoints.only('md')]: {
      marginTop: 0
    },
  },
}));

function BuildSection() {

  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('lg'));


  const classes = useStyle();


  return (
    <React.Fragment>
      <Box className={classes.buildContainer}>
        <Container maxWidth='xl'>
          <Grid container direction='column'>

            {/* First row */}
            <Grid item>
              <Grid container direction='row'>
                <Grid item md={7} xl={6}>
                  <Typography className={classes.buildHeader}>
                    WE BUILD BETTER <span className={classes.buildHeaderSub}>REMOTE TEAMS</span>
                  </Typography>
                </Grid>
                {/* <Grid item xl={1}/> */}
                <Grid item md={5} xl={6} >
                  <Box className={classes.hoetContainer} ml={ match ? 3 : 0} mt={ match ? 0 : 3} mb={5}>
                    <Typography variant='h5' className={classes.hoet}>
                      HUNDREDS OF ENGINEERING TEAMS SCALE SMARTER WITH ANDELA.
                    </Typography>
                    </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* Second row */}
            <Grid item>
              <Grid container direction='row'>
                {/* //// */}
                <Grid item md={6} lg={7} className={classes.itemFirst}>
                  <Grid container direction='row' spacing={2}>

                    <Grid item md={6} sm={12}>
                      <Box mb={6}>
                        <Divider/>
                        <Typography variant='h6' className={classes.applications}>
                          Global talent sourcing
                        </Typography>
                        <Typography variant='h1' style={{fontWeight: 700,
                        color: '#49AAAF', letterSpacing: '1px', marginTop: '.7rem'}}>
                          200,000
                        </Typography>
                        <Typography variant='subtitle1' style={{color: '#49AAAF', fontWeight: 700, lineHeight: .4}}>
                          applications
                        </Typography>
                        <Typography variant='subtitle1' style={{marginTop: '1.7rem', color: 'gray'}}>
                        Our expert talent team ensures we source the right talent at the right time.
                        </Typography>
                      </Box>
                    </Grid>
                    
                    <Grid item md={6} sm={12}>
                      <Box mb={6}>
                        <Divider/>
                        <Typography variant='h6' className={classes.applications}>
                          Global talent sourcing
                        </Typography>
                        <Typography variant='h1' style={{fontWeight: 700,
                        color: '#49AAAF', letterSpacing: '1px', marginTop: '.7rem'}}>
                          200,000
                        </Typography>
                        <Typography variant='subtitle1' style={{color: '#49AAAF', fontWeight: 700, lineHeight: .4}}>
                          applications
                        </Typography>
                        <Typography variant='subtitle1' style={{marginTop: '1.7rem', color: 'gray'}}>
                        Our expert talent team ensures we source the right talent at the right time.
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item md={6} sm={12}>
                      <Box mb={6}>
                        <Divider/>
                        <Typography variant='h6' className={classes.applications}>
                          Global talent sourcing
                        </Typography>
                        <Typography variant='h1' style={{fontWeight: 700,
                        color: '#49AAAF', letterSpacing: '1px', marginTop: '.7rem'}}>
                          200,000
                        </Typography>
                        <Typography variant='subtitle1' style={{color: '#49AAAF', fontWeight: 700, lineHeight: .4}}>
                          applications
                        </Typography>
                        <Typography variant='subtitle1' style={{marginTop: '1.7rem', color: 'gray'}}>
                        Our expert talent team ensures we source the right talent at the right time.
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item md={6} sm={12}>
                      <Box mb={6}>
                        <Divider/>
                        <Typography variant='h6' className={classes.applications}>
                          Global talent sourcing
                        </Typography>
                        <Typography variant='h1' style={{fontWeight: 700,
                        color: '#49AAAF', letterSpacing: '1px', marginTop: '.7rem'}}>
                          200,000
                        </Typography>
                        <Typography variant='subtitle1' style={{color: '#49AAAF', fontWeight: 700, lineHeight: .4}}>
                          applications
                        </Typography>
                        <Typography variant='subtitle1' style={{marginTop: '1.7rem', color: 'gray'}}>
                        Our expert talent team ensures we source the right talent at the right time.
                        </Typography>
                      </Box>
                    </Grid>

                  </Grid>
                </Grid>
                {/* //// */}
                <Grid item md={6} lg={5}>
                  <Box>       
                    <img src={`${img1}`} alt='imgage one' className={classes.image1}/>
                    <img src={`${img2}`} alt='imgage two' className={classes.image2}/>
                    <img src={`${img3}`} alt='imgage three' className={classes.image3}/>
                  </Box>           
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default BuildSection;
