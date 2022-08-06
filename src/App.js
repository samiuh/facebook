import "./App.css";
import Header from "./components/header/Header";
import Left from "./components/left/Left";
import Center from "./components/center/Center";
import Right from "./components/right/Right";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="content">
                <Left />
                <Center />
                <Right />
            </div>
        </div>
    );
}

export default App;
