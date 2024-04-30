import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import {
  BookSpoilerDetailPage,
  BookSpoilerPage,
  IndexPage,
  LoginPage,
  StyleGuide,
  ChallengeActionPage,
  MyPaymentListPage,
  MyChallengePage,
  MyBookSpoilerPage,
} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/styleguide" element={<StyleGuide />} />
        <Route path="/bookspoiler" element={<BookSpoilerPage />} />
        <Route path="/bookspoilerdetail" element={<BookSpoilerDetailPage />} />
        <Route path="/challengeaction" element={<ChallengeActionPage />} />
        <Route path="/mypaymentlist" element={<MyPaymentListPage />} />
        <Route path="/mychallenge" element={<MyChallengePage />} />
        <Route path="/mybookspoiler" element={<MyBookSpoilerPage />} />
      </Route>
    </Routes>
  );
}

export default App;
