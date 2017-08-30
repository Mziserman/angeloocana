import React from 'react';
import Index from './_index';
import graphql from 'graphql';

export default (props) => <Index {...props} />;

export const pageQuery = graphql`
  query IndexFrQuery {
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { ne: true } },
        fields: { langKey: { regex: "/(en|any)/" } }
      },
    ) {
      edges {
        node{
          frontmatter{
            title,
            date
          },
          fields{
            slug
          },
          excerpt
        }
      }
    }
  }
`;
