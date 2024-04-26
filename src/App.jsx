import { Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout";
import { 
  IndexPage, 
  LoginPage, 
  BookSpoilerDetailPage, 
  StyleGuide
} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} > 
        <Route index element={<IndexPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/bookspoilerdetail" element={<BookSpoilerDetailPage/>} />
        <Route path="/styleguide" element={<StyleGuide/>} />
      </Route>  
    </Routes>
  );
}

export default App;
