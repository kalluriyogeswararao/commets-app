import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

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
  state = {commentList: [], name: '', comment: ''}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  addComments = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const addComment = {
      id: uuidv4(),
      name,
      comment,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, addComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {commentList, name, comment} = this.state
    const count = commentList.length
    return (
      <div className="bg-container">
        <div className="top">
          <div className="comment-container">
            <div>
              <h1 className="main-heading">Comments</h1>
              <p className="para">Say something about 4.O Technologies</p>
            </div>
            <form className="form-container" onSubmit={this.addComments}>
              <input
                type="text"
                className="input"
                placeholder="Your name"
                onChange={this.onChangeName}
                value={name}
              />
              <textarea
                rows="15"
                cols="40"
                className="textarea"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
                value={comment}
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
        </div>

        <hr />
        <div className="count-container">
          <p className="comment-count">{count}</p>
          <p>comments</p>
        </div>
        <ul className="all-comments">
          {commentList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              key={eachComment.id}
              initialContainerBackgroundClassNames={
                initialContainerBackgroundClassNames
              }
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
