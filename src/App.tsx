import './App.scss';
import { Home, Services, Contact, NotFound } from './pages/';
import { Routes, Route } from 'react-router-dom';

function App() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default App
