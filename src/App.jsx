import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import {
  BookSpoilerDetailPage,
  BookSpoilerPage,
  IndexPage,
  LoginPage,
  StyleGuide,
} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/styleguide" element={<StyleGuide />} />
        <Route path="/bookspoiler" element={<BookSpoilerPage />} />
        <Route path="/bookspolierdetail" element={<BookSpoilerDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
