import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsFavorite, deleteComment} = props
  const {name, comment, id, isLike} = commentDetails

  const onClickLike = () => {
    toggleIsFavorite(id)
  }
  const isLikeComment = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onDeleteComment = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-data">
      <div className="details">
        <p className="profile">{name[0].toUpperCase()}</p>
        <h1 className="profile-name">{name}</h1>
      </div>
      <p className="comment">{comment}</p>
      <div className="icons">
        <button className="like-button" type="button" onClick={onClickLike}>
          <img src={isLikeComment} className="like-image" alt="like" />
        </button>
        <button className="delete-button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-image"
            onClick={onDeleteComment}
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
