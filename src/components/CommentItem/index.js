import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {name, comment} = commentDetails

  return (
    <li className="comment-data">
      <div className="details">
        <p className="profile">{name[0].toUpperCase()}</p>
        <h1 className="profile-name">{name}</h1>
      </div>
      <p className="comment">{comment}</p>
    </li>
  )
}
export default CommentItem
