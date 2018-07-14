import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

class PostItem extends Component {
  onDeleteClick = (id) => {
    console.log(id)
  }

  render() {
    const { post, auth } = this.props

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img src={post.avatar} alt="" className="rounded-circle d-none d-md-block" />
            </a>
            <br />
            <p className="text-center">{post.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{post.text}</p>
            <button className="btn btn-light mr-1">
              <i className="text-info fas fa-thumbs-up" />
              <span className="badge bade-light">{post.likes.length}</span>
            </button>
            <button className="btn btn-light mr-1">
              <i className="text-info fas fa-thumbs-up" />
              <span className="badge bade-light">{post.likes.length}</span>
            </button>
            <button className="btn btn-light mr-1">
              <Link to={`/post/${post._id}`} className='btn btn-info mr-1'>
                Comments
              </Link>
              {post.user === auth.user.id ? (
                <button onClick={this.onDeleteClick(post._id)} type='button' className="btn btn-danger mr-1">
                  <i className="fas fa-times" />
                </button>
              ) : null}
            </button>
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