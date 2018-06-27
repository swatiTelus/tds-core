import React from 'react'
import PropTypes from 'prop-types'

import styles from './A11yContent.modules.scss'

/**
 * @version ./package.json
 */

const A11yContent = ({ children }) => {
  return <p className={styles.a11yContent}>{children}</p>
}

A11yContent.propTypes = {
  children: PropTypes.node.isRequired,
}
A11yContent.defaultProps = {}

export default A11yContent
