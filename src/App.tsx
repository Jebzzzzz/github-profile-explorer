import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './pages/SearchPage/SearchPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/:username" element={<ProfilePage />} />
        </Routes>
    </BrowserRouter>
  )
}
