import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import ArticlesList from './components/ArticlesList'
import Topics from './components/TopicFilter'
import SingleArticle from './components/SingleArticle';
import { UserProvider } from './contexts/UserContext';
function App() {
  return (
    <UserProvider>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/articles' element={<ArticlesList />} />
    <Route path='/topics' element={<Topics />} />
    <Route path='/articles/:article_id' element={<SingleArticle />} />
    </Routes>
    </UserProvider>
  )
}

export default App
