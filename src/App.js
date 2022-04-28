import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/movie/Create";
import Popular from "./pages/movie/Popular";
import NowPlaying from "./pages/movie/NowPlaying";
import TopRated from "./pages/movie/TopRated";
import Layout from "./Layout";
function App() {  
  return (
    <div>
      {/* Membuat routing
      bungkus routing menggunakan routes
      buat routing menggunakan route */}
      <Layout>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movie/create" element={<CreateMovie/>}></Route>
        <Route path="/movie/popular" element={<Popular/>}></Route>
        <Route path="/movie/now" element={<NowPlaying/>}></Route>
        <Route path="/movie/top" element={<TopRated />}></Route>
      </Routes>
      </Layout>
    </div>
  );
}

export default App;