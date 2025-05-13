import './App.css';
import HomePage from './pages/home/HomePage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
// import GalleryPage from './pages/gallery/GalleryPage';
// import BlogPage from './pages/blog/BlogPage';
import AboutMePage from './pages/aboutMe/AboutMePage';
// import myStoryPage from './pages/myStory/MyStoryPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/mysite_front_sample">
        <div className="App">
          <header className="app-header">
            { <Header /> }
          </header>
          <main>
            <Routes>

              <Route path="/" element={<Navigate to="/home" />}  />
              <Route path="/home" element={<HomePage />} />
              <Route path="/about-me" element={<AboutMePage />}/>
              {/* <Route path="/gallery" element={<GalleryPage />}/>
              <Route path="blog" element={<BlogPage />}/>
              <Route path="my-story" element={<MyStoryPage />}/> 
              <Route path="test-story" element={<TestPage />}/>  */}
            </Routes>
            <footer className="app-footer">
              <Footer />
            </footer>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
