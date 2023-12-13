import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { postComment } from "../utils/utils";

const CommentAdder = ({article_id, setComments}) => {
  const { user } = useContext(UserContext);
  const [input, setInput] = useState("");
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleInput(e) {
    setInput(e.target.value);
    if(inputError) setInputError(false)
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (input.length === 0) {
      setInputError(true)
    }
    if(input.length !== 0) {
      setError(false)
      setPosting(true)
      postComment(article_id, user, input)
      .then((comment) => {
        setPosting(false)
        setSuccess(true)
        setTimeout(()=>{
          setSuccess(false)
        }, 3000)
        setComments((currComments) => {
          return [comment, ...currComments]
        })
      })
      .catch((err) => {
        setError(true)
        setPosting(false)
      })
      setInput("")
    }
  }
 
  return (
    <div id="comment-adder">
      <h3>Add a comment</h3>
      <form id="comment-adder-form" onSubmit={handleSubmit}>
        <textarea onChange={handleInput} id="comment-adder-text" cols={40} rows={5} name="comment-text" placeholder="write your comment here.." value={input}/>
        {posting ? <p>Posting comment..</p> : <button id="comment-adder-btn">Submit</button>}
        {error === true && <p className="error">Error posting comment, try again later</p>}
        {inputError === true && <p className="error">Comments cannot be empty</p>}
        {success === true && <p className="success">Success!</p>}
      </form>
    </div>
  );
};

export default CommentAdder;
