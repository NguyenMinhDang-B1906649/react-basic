import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Examples/MyComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hello world from react</p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
