import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'
import { Link } from 'gatsby-theme-material-ui'

import logo from '../../static/hsf-logomark.svg'

import { useTheme } from '@mui/material';

const Footer = () => {

  const theme = useTheme();

  return(
    <div style={{backgroundColor: theme.palette.primary.main }}>
      <Container as="footer" >
        <div style={{ display: "flex", justifyContent: "center", gap: "50px"}}>
          <img src={logo}
            style={{ width: "100px", height: "auto" }}
          />
          <p style={{width: "300px", color: "white"}}>
            The Husky Sailing Foundation is a 501(c)(3) nonprofit organization 
            dedicated to the betterment of competitive sailing at the University 
            of Washington.
          </p>
        </div>
        <div style={{ 
            display: "flex", justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <p style={{color: "white"}}>© 2021 Husky Sailing Foundation</p>
          <Link style={{color: "white"}}>Privacy Policy</Link>
          <Link style={{color: "white"}}>Terms of Service</Link>
          <p style={{color: "white"}}>117 East Louisa Street, Unit 208, Seattle, Washington, 98102</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;


/*
<div className={styles.container}>
      Built with <a href="https://contentful.com/">Contentful</a> and{' '}
      <a href="https://gatsbyjs.com">Gatsby</a> &middot;{' '}
      <a href="https://github.com/contentful/starter-gatsby-blog">Source</a>
    </div>
*/
