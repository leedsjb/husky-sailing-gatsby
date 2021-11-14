import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import { ThemeProvider } from '@mui/material'
import theme from '../gatsby-theme-material-ui-top-layout/theme.js'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <ThemeProvider theme={theme}>
          <Navigation />
          <main style={{marginBottom: "50px"}}>{children}</main>
          <Footer />
        </ThemeProvider>
      </>
    )
  }
}

export default Template
