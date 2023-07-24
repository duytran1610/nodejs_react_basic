import logo from './logo.svg';
import '../styles/App.scss';
import Component1 from './Exam/component1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <Component1/>
      </header>
    </div>
  );
}

export default App;
