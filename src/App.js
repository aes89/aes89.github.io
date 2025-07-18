import './App.css'
import { Menu, MenuOpen } from '@mui/icons-material'
import { useState } from 'react'

function App() {
    const [isMenuOpen, setisMenuOpen] = useState(false)
    console.log(isMenuOpen)

    function showNavMenu() {
        var x = document.getElementById('menuLinks')
        if (x.style.display === 'flex') {
            x.style.display = 'none'
            setisMenuOpen(false)
        } else {
            x.style.display = 'flex'
            setisMenuOpen(true)
        }
    }

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
                <a href="#news">About</a>
                <a href="#contact">Gallery</a>
            </div>
            <p>Stuff coming soon</p>
        </div>
    )
}

export default App
