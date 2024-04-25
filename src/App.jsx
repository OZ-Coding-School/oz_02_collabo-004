import { Route, Routes } from 'react-router-dom';
// import Layout from "./components/Layout";
import { IndexPage, LoginPage, StyleGuide } from './pages';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout/>} />  */}
      {/* <Route index element={<IndexPage/>} />  */}
      <Route path="/" element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
        <Route path="/styleguide" element={<StyleGuide/>}/>
    </Routes>
  );
}

export default App;
