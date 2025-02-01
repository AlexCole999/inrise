import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from './pages/Home'; 
import BottomNavbar from "./components/BottomNavbar";
import VideoZone from './pages/VideoZone'; 
import AudioZone from './pages/AudioZone'; 
import Subscribe from './pages/Subscribe'; 
import Hudud from './pages/Hudud'; 
import Vazifalar from './pages/Vazifalar'; 
import Dostlar from './pages/Friends'; 
import Inbox from './pages/Inbox'; 
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
function AppContent() {
  const videoZoneImage = '/src/assets/images/video-zone.png'; 
  const audioZoneImage = '/src/assets/images/audio-zone.png';  
  const location = useLocation(); 
  const hiddenPaths  = ["/video", "/audio"];
  return (
     <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<VideoZone />} />
        <Route path="/audio" element={<AudioZone />} />
        <Route path="/Subscribe" element={<Subscribe />} />
        <Route path="/hudud" element={<Hudud />} />
        <Route path="/vazifalar" element={<Vazifalar />} />
        <Route path="/dostlar" element={<Dostlar />} />
        <Route path="/inbox" element={<Inbox />} />
      </Routes>
      {/* Bottom Navigation */}
      {!hiddenPaths.includes(location.pathname) && <BottomNavbar />}
     </>
  )
}

export default App
