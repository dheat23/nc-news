import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import ArticlesList from './components/ArticlesList'
import Topics from './components/TopicFilter'
function App() {
  return (
    <>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/articles' element={<ArticlesList />} />
    <Route path='/topics' element={<Topics />} />
    </Routes>
    </>
  )
}

export default App
