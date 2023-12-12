import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { postComment } from "../utils/utils";

const CommentAdder = ({article_id}) => {
  const { user } = useContext(UserContext);
  const [input, setInput] = useState("");

  function handleInput(e) {
    setInput(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    postComment(article_id, user, input)
    .then((comment) => {
        
    })
    setInput("")

  }
  return (
    <div id="comment-adder">
      <h3>Add a comment</h3>
      <form id="comment-adder-form" onSubmit={handleSubmit}>
        <textarea onChange={handleInput} id="comment-adder-text" cols={40} rows={5} name="comment-text" placeholder="write your comment here.." value={input}/>
        <button id="comment-adder-btn">Submit</button>
      </form>
    </div>
  );
};

export default CommentAdder;
