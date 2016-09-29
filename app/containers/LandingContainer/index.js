import React, { Component } from 'react'
import cssModules from 'react-css-modules'
import styles from './index.module.scss'

class Landing extends Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className={styles.landing}>
        {'Hello World !!!'}
      </div>
    )
  }
}
export default cssModules(Landing, styles)
