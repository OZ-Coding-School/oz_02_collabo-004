import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AdminLayout from './components/AdminLayout';
import {
  BookSpoilerDetailPage,
  BookSpoilerPage,
  IndexPage,
  LoginPage,
  StyleGuide,
  ChallengeActionPage,
  MyPaymentListPage,
  PaymentPage,
  ChallengePage,
  MyChallengePage,
  MyBookSpoilerPage,
  AdminUserPage,
  AdminCommentPage,
  AdminChellengePage,
  AdminBookListPage,
  AdminBookCreatePage
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
        <Route path="/challenge" element={<ChallengePage />} />
        <Route path="/mypaymentlist" element={<MyPaymentListPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/mychallenge" element={<MyChallengePage />} />
        <Route path="/mybookspoiler" element={<MyBookSpoilerPage />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminUserPage />} />
        <Route path="comment" element={<AdminCommentPage />} />
        <Route path="challenge" element={<AdminChellengePage />} />
        <Route path="booklist" element={<AdminBookListPage />} />
        <Route path="bookcreate" element={<AdminBookCreatePage />} />
        </Route>
    </Routes>
  );
}

export default App;
