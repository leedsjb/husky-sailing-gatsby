import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { css } from '@emotion/react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import HeroCard from '../components/HeroCard'
// import ArticlePreview from '../components/article-preview'

// images
import recruitmentImage from '../../static/austin-kids.jpeg'
import financialImage from '../../static/Fleet.jpeg'
import legacyImage from '../../static/GirlsWatch.jpeg'
import leadershipImage from '../../static/BigWPose.jpeg'
import alumniImage from '../../static/alumni-regatta.jpeg'



import BlogHighlight from '../components/BlogHighlight'
import newsImage1 from '../../static/1-carl-buchan.jpeg'
import newsImage2 from '../../static/2-DerekCampbell.jpeg'
import newsImage3 from '../../static/3-FJ-fleet.jpeg'


// import heroBackground from '../../static/dinghy-harbor-drone-photo.jpeg'

class RootIndex extends React.Component {


  // bgImageStyles = css`background-image: url(${heroBackground})`;

   constructor(props){
     super(props);
   }

  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <Layout location={this.props.location}>
        <div id="hero" 
          style={{
            display: "flex", flexDirection: "column", justifyContent: "center",
            alignItems: "center", gap: "100px"
          }}
        >
          <h1 style={{ }}>
            Building a diverse, inclusive, and highly competitive University of
            Washington sailing team.
          </h1>

          <div id="hero-cards" style={{
            display: "flex", flexDirection: "row", gap: "15px"  
          }}>
            <HeroCard 
              image={recruitmentImage}
              title="Recruitment"
              body="Effective reruitment of junior and high school sailors and
                consistent organizational support."
            />
            <HeroCard 
              image={financialImage}
              title="Financial Support"
              body="Encourage and financially support Washington Husky student 
                athletes in their pursuit of a challenging and successful 
                collegiate sailing experience."
            />
            <HeroCard 
              image={legacyImage}
              title="Legacy"
              body="Maintain a lasting legacy of excellence in college sailing 
                at Washington."
            />
            <HeroCard 
              image={leadershipImage}
              title="Leadership"
              body="Student run organizations at Washington provide 
                opportunities to build leadership skills that will empower 
                student athletes to excel in their pursuit of excellence on and 
                off the water."
            />
            <HeroCard 
              image={alumniImage}
              title="Alumni"
              body="Maintain connections with past Husky sailors and current 
                team members."
            />

          </div>

          <div id="blog-highlights"
            style={{ display: "flex", justifyContent: "center", gap: "50px"}}
          >
            <BlogHighlight 
              image={newsImage1}
              date="October 2, 2021"
              title="Husky Sailor Carl Buchan will be inducted into the National 
                Sailing Hall of Fame"
              body="Carl arrived on the University of Washington campus as a 
                freshman in the fall of 1975..."
            />
            <BlogHighlight 
              image={newsImage2}
              date="October 5, 2021"
              title="8 Bells: Bruce Gage, Derek Campbell, Scott Gilbert"
              body="Carl arrived on the University of Washington campus as a 
                freshman in the fall of 1975..."
            />
            <BlogHighlight 
              image={newsImage3}
              date="October 7, 2021"
              title="Husky Sailing Foundation purchases new fleet of 10 FJs for 
                the Husky Sailing Team"
              body="Thanks to a generous donation to the University of 
                Washington Recreational Sports Department, in support of the 
                Husky Sailing Team, a fleet of ten new Collegiate FJ’s built by 
                Zim will be delivered in January 2022..."
            />

          </div>
       
        </div>
      </Layout>
    )
  }
}

{/* <Hero
      image={author.heroImage.gatsbyImageData}
      title={author.name}
      content={author.shortBio.shortBio}
  /> */}    
{/* <ArticlePreview posts={posts} /> */}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          shortBio
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }
  }
`
