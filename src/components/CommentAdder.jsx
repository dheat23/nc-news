import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { postComment } from "../utils/utils";

const CommentAdder = ({article_id, setComments}) => {
  const { user } = useContext(UserContext);
  const [input, setInput] = useState("");
  const [posting, setPosting] = useState(false);

  function handleInput(e) {
    setInput(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    setPosting(true)
    postComment(article_id, user, input)
    .then((comment) => {
        setPosting(false)
        setComments((currComments) => {
            return [comment, ...currComments]
        })
    })
    setInput("")
  }
  
  return (
    <div id="comment-adder">
      <h3>Add a comment</h3>
      <form id="comment-adder-form" onSubmit={handleSubmit}>
        <textarea onChange={handleInput} id="comment-adder-text" cols={40} rows={5} name="comment-text" placeholder="write your comment here.." value={input}/>
        <button className={posting ? "disabled-btn" : ""} id="comment-adder-btn">Submit</button>
      </form>
    </div>
  );
};

export default CommentAdder;
