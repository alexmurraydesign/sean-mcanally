import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { getImage } from "gatsby-plugin-image";
import HeaderImage from "../components/HeaderImage";

// eslint-disable-next-line
export const ExperiencePageTemplate = ({ 
  title,
  image,
  content,
  contentComponent 
}) => {
  const PageContent = contentComponent || Content;
  const heroImage = getImage(image) || image;

  return (
    <section>
      <HeaderImage img={heroImage} title={title} />
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ExperiencePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ExperiencePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ExperiencePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  );
};

ExperiencePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ExperiencePage;

export const experiencePageQuery = graphql`
  query ExperiencePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
