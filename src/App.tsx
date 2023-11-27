import './App.scss';
import { Home, Services, Contact } from './pages/';
import { Routes, Route } from 'react-router-dom';

function App() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    )
}

export default App
