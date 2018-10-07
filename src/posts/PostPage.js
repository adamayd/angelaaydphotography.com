import React from 'react';

class PostPage extends React.Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return(
      <div>
        <span>{data.markdownRemark.frontmatter.date}</span>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
          }}
        />
      </div>
    );
  }
}

export default PostPage;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
<<<<<<< HEAD
<<<<<<< HEAD
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      createdAt
      body {
        childMarkdownRemark {
          html
          excerpt
        }
      }
      slug
      id
=======
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
>>>>>>> parent of a4857d5... refactoring to move CMS to contentful
    }
=======
>>>>>>> parent of 73ce061... corrected queries and renders for contentful
  }
`;