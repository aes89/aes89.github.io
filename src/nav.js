import { Menu, MenuOpen } from '@mui/icons-material'
import { useState } from 'react'

function NavBar() {
    const [isMenuOpen, setisMenuOpen] = useState(false)

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
        <div>
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
        </div>
    )
}
export default NavBar
