import './App.css'
import { useState } from 'react'
import GalleryIndex from './gallery/galleryIndex'
import AboutIndex from './about/aboutIndex'
import { Menu, MenuOpen } from '@mui/icons-material'


function App() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [whatPage, setWhatPage] = useState('about')

    
    function showNavMenu() {
        var menu = document.getElementById('menuLinks')
        if (menu.style.display === 'flex') {
            menu.style.display = 'none'
            setIsMenuOpen(false)
        } else {
            menu.style.display = 'flex'
            setIsMenuOpen(true)
        }
    }

    function setPageState(page) {
        switch (page) {
            case 'gallery': 
            setWhatPage('gallery')
            showNavMenu()
            break;
        case 'about':
            setWhatPage('about')
            showNavMenu()
            break;
    }
    }

    function whatPageRendered(whatPage) {
    switch (whatPage) {
        // case home:
        //     <HomePage />;
        //     break;
        case 'gallery': 
            return <GalleryIndex />;
        case 'about':
            return <AboutIndex />;
        // default:
        //     <NotFound />;
        //     break;
    }}


    return (
        <div className="app-container">
                        <nav>
                {isMenuOpen ? (
                    <MenuOpen
                        className="MenuIcon"
                        onClick={() => showNavMenu()}
                    />
                ) : (
                    <Menu className="MenuIcon" onClick={() => showNavMenu()} />
                )}
                <h1 className="dancing-script">Doodles</h1>
            </nav>
            <div id="menuLinks">
                <a href="#about" onClick={() => setPageState('about')}>About</a>
                <a href="#gallery" onClick={() => setPageState('gallery')}>Gallery</a>
            </div>
            {whatPageRendered(whatPage)}
        </div>
    )
}

export default App
