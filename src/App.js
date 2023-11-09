
import Navbar from "./components/Navbar/Navbar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css"

function App() {
    return (
        <div className="App">
            <Navbar />
            <ItemListContainer greeting={'Bievenidos'}/>
            
        </div>
    )
}



export default App;