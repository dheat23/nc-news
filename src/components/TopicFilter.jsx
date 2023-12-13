import { useEffect, useState } from "react"
import { getAllTopics } from "../utils/utils"
import { Link } from "react-router-dom"

const TopicFilter = ({selectedTopic}) => {
    const [topics, setTopics] = useState([])
    useEffect(()=>{
        getAllTopics()
        .then((topics)=>{
            setTopics(topics)
        })
    }, [])
    return (
        <nav id="topic-filter-bar">
            <Link to='/articles' key="all" className={`topic-card ${selectedTopic ? "" : "selected-topic"}`}>All</Link>
            {topics.map(topic => {
                return <Link to={`/articles?topic=${topic.slug}`} key={topic.slug} className={`topic-card ${selectedTopic === topic.slug ? "selected-topic" : ""}`}>{topic.slug}</Link>
            })}
        </nav>
)
}

export default TopicFilter