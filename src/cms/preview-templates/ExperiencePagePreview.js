import React from 'react'
import PropTypes from 'prop-types'
import { ExperiencePageTemplate } from '../../templates/experience-page'

const ExperiencePagePreview = ({ entry, widgetFor }) => (
  <ExperiencePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ExperiencePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ExperiencePagePreview
