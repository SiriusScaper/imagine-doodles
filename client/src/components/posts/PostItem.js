import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

class PostItem extends Component {
  render() {
    const { post, atuh } = this.props

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">

          </div>
        </div>
      </div>
    )
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStatToProps = state => ({
  auth: state.auth
})

export default connect(mapStatToProps)(PostItem)