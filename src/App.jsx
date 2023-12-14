import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import ArticlesList from './components/ArticlesList'
import SingleArticle from './components/SingleArticle';
import { UserProvider } from './contexts/UserContext';
import ErrorPage from './components/ErrorPage';
function App() {
  return (
    <UserProvider>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/articles' element={<ArticlesList />} />
    <Route path='/articles/:article_id' element={<SingleArticle />} />  
    <Route path='*' element={<ErrorPage />} />
    </Routes>
    </UserProvider>
  )
}

export default App
