import React from 'react'
import { Box, Container, Grid, Typography, useMediaQuery } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import LOGO from '../../assets/Andela-logo@2x.png';
import SOC from '../../assets/ANDELA-21972-312_SOC_NonCPA.png';

const useStyle = makeStyles(theme => ({

  footerContainer: {
    background: 'rgb(2, 2, 51)',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(10),
  },
  heading: {
    fontWeight: 700,
    color: '#fff',
    paddingBottom: theme.spacing(1),
    borderBottom: '1px solid rgba(52,82,225,0.65)',
  },
  headingItems: {
    color: '#fff',
    marginTop: theme.spacing(2),
    fontSize: '.8rem',
  },
  box: {
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    }
  },
  other: {
    background: 'rgb(9, 9, 71)',
    paddingTop: theme.spacing(3),
  }
}));

function Footer() {

  const theme = useTheme();
  const classes = useStyle();

  const match = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <React.Fragment>
      <Box className={classes.footerContainer}>
        <Box style={{paddingBottom: theme.spacing(6)}}>
        <Container maxWidth='xl'>
          <Grid container direction='column'>

            <Grid item>
              <Grid container direction='row' spacing={4}>

                <Grid item xs={12} md={4} lg={3}>
                  <Box className={classes.box}>
                  <Typography variant='subtitle1' className={classes.heading}>
                    Company
                  </Typography>
                  {['Services','Case Studies','Resources','Blog','About Us'].map(el => (
                    <Typography variant='subtitle1' className={classes.headingItems}>
                      {el}
                    </Typography>
                  ))}
                  </Box>
                </Grid>

                <Grid item xs={12} md={4} lg={6}>
                  <Box className={classes.box}>
                    <Typography variant='subtitle1' className={classes.heading}>
                      Join Andela
                    </Typography>
                    {['Careers','Apply as an experienced software engineer','Become a software engineer - Rwanda','Andela Learning Community','Featured Software Engineers'].map(el => (
                      <Typography variant='subtitle1' className={classes.headingItems}>
                      {el}
                    </Typography>
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12} md={4} lg={3}>
                  <Box className={classes.box}>
                    <Typography variant='subtitle1' className={classes.heading}>
                      Locations
                    </Typography>
                    <Grid container direction='row'>
                      {['Lagos','Accra','Nairobi','New York','Kampala','San Francisco','Kigali','Austin','Cairo'].map(el => (
                        <Grid item style={{width: '50%'}}>
                          <Typography style={{fontSize: '.8rem',color: '#fff', marginTop: theme.spacing(2)}}>
                            {el}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        </Box>

        <Box style={{borderTop:  '1px solid rgba(52,82,225,0.65)',paddingTop: theme.spacing(2)}}>
        <Grid container  direction='row' justify='space-between' alignItems='center'>
          <Grid item lg={2} style={{marginLeft: '20px',marginRight: '20px', marginBottom: match ? '20px' : undefined, marginTop: match ? '20px' : undefined}}>
          <img src={`${LOGO}`} alt='logo' width='120px'/>
          </Grid>
          <Grid item lg={2} style={{marginLeft: !match ?'-50px' : '20px', width: match ? '100%' : undefined, marginBottom: match ? '20px' : undefined}}>
            <img src={`${SOC}`} alt='alt' height='60px'/>
          </Grid>
          <Grid item md={12} lg={8}>
            <Grid container spacing={match ? 2 : undefined}>
              {['Copyright © Andela 2020',' Modern Slavery Statement',' Master Services Agreement',' Data Processing Agreement',' Terms of Use', 'Privacy Policy'].map(el => (
                <Grid item style={{width: match ? '100%' : undefined, marginLeft: match ? '20px' : undefined}}>
                  <Typography style={{color: '#fff', fontSize: '.88rem',fontWeight: 700,marginRight: '20px'}}>
                    {el}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        </Box>
      </Box>
      <Box className={classes.other}>
        
      </Box>
    </React.Fragment>
  )
}

export default Footer;
