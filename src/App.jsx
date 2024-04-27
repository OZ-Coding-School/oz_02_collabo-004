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
        <Route path="/bookspoilerpage" element={<BookSpoilerPage />} />
        <Route
          path="/bookspolierdetailpage"
          element={<BookSpoilerDetailPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
