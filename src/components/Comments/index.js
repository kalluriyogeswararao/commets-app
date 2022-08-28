import {Component} from 'react'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="comment-container">
          <div>
            <h1 className="main-heading">Comments</h1>
            <p className="para">Say something about 4.O Technologies</p>
          </div>
          <form className="form-container">
            <input type="text" className="input" placeholder="Your name" />
            <textarea
              rows="15"
              cols="40"
              className="textarea"
              placeholder="Your Comment"
            />
            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          alt="comments"
          className="image"
        />

        <hr />
      </div>
    )
  }
}

export default Comments
