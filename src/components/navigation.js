import React from 'react'
import { Link, Button } from 'gatsby-theme-material-ui'
import Box from '@mui/material/Box'

import logo from '../../static/hsf-lockup.svg'

import * as styles from './navigation.module.css'

const Navigation = () => {

  let linkMenu = (
    <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/about/" activeClassName="active">
            About
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/" activeClassName="active">
            News
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/" activeClassName="active">
            Support
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/" activeClassName="active">
            Leadership
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/" activeClassName="active">
            Contact
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/" activeClassName="active">
            <Button variant="contained">Donate</Button>
          </Link>
        </li>  
      </ul>
  );
  

  return (
    <Box sx={{ boxShadow: 2}}>
      <nav role="navigation" className={styles.container} aria-label="Main">
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="Husky Sailing Foundation Logo" />
        </Link>
        {/* {linkMenu} */}
      </nav>
    </Box>
  );
};

export default Navigation
