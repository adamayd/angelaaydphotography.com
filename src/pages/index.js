import React from 'react';
import PostListing from '../components/postlisting';

const IndexPage = ({data}) => (
  <div>
    {/* <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p> */}
    <h2>Posts</h2>
    {data.allContentfulBlogPost.edges.map(({node}) => (
      <PostListing key= {node.id} post={node} />
    ))}
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          title
          createdAt(formatString: "MMMM DD, YYYY")
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          slug
          id
        }
      }
    }
  }
`;