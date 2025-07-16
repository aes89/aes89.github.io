import './App.css'
import Icon from '@mui/icons-material/Menu'

function App() {
    function showNavMenu() {
        var x = document.getElementById('menuLinks')
        if (x.style.display === 'flex') {
            x.style.display = 'none'
        } else {
            x.style.display = 'flex'
        }
    }
    return (
        <div className="app-container">
            <nav>
                <Icon
                    className="MenuIcon"
                    onClick={() => showNavMenu()}
                />
                <h1 className="dancing-script">Doodles</h1>
            </nav>
            <div id="menuLinks">
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
            <p>Stuff coming soon</p>
        </div>
    )
}

export default App
