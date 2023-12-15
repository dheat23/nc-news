import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllArticles } from "../utils/utils";
import ArticleCard from "./ArticleCard";

const Home = () => {
    const [articles, setArticles] = useState([{}]);
    const [randomNum, setRandomNum] = useState(null);
    const [disable, setDisable] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        getAllArticles()
        .then((articles)=>{
            setArticles(articles)
            setDisable(false)
        })
        .catch((err) => {
            setError(err.data.msg)
        })
    }, [])
    function handleRandomClick() {
        setRandomNum(Math.floor(Math.random()*articles.length))
        
        
    };
    if(error) {
        return <p className="error">{error}</p>
    }
    return (
        <section id="home">
            <h2>Welcome to Northcoders News!</h2>
            <p>Check out a random article below, or go to <Link to='/articles'>Articles</Link> to view the full list</p>
            <button className={disable ? "disabled-btn" : ""} onClick={handleRandomClick}>View Random Article</button>
            {randomNum === null ? <div id="mystery-random-article"></div> : <ArticleCard article={articles[randomNum]} />}
        </section>
    )
}

export default Home