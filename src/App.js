
import Navbar from "./components/Navbar/Navbar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css"
import ItemCount from "./components/ItemCount/ItemCount.js"

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element= {<ItemListContainer/>}/>
                <Route path="/category/categoryId" element= {<ItemListContainer/>}/>
                <Route path="/item/:itemId" element= {<ItemListContainer/>}/>
                <Route path="*" element= {<h1>404 NOT FOUND</h1>}/>
            </Routes>
            <BrowserRouter/>
        </div>
    )
}



export default App;