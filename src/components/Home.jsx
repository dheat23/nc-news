import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllArticles } from "../utils/utils";
import ArticleCard from "./ArticleCard";

const Home = () => {
    const [articles, setArticles] = useState([{}]);
    const [randomNum, setRandomNum] = useState(null);
    useEffect(()=>{
        getAllArticles()
        .then((articles)=>{
            setArticles(articles)
        })
    }, [])
    function handleRandomClick() {
        setRandomNum(Math.floor(Math.random()*articles.length))
        
        
    };
    return (
        <section id="home">
            <h2>Welcome to Northcoders News!</h2>
            <p>Check out a random article below, or go to <Link to='/articles'>Articles</Link> to view the full list</p>
            <button onClick={handleRandomClick}>View Random Article</button>
            {randomNum === null ? <div id="mystery-random-article"></div> : <ArticleCard article={articles[randomNum]} />}
        </section>
    )
}

export default Home