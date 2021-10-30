
import './App.css';
import Header from './components/Header';
import Swipebuttons from './components/Swipebuttons';
import Tindercards from './components/Tindercards';

function App() {
  return (
    <div className="App">
      <Header/>
      <Tindercards/>
      <Swipebuttons/>
      {/* Header.js
      tindercard.js 
      swipe.js */}

    </div>
  );
}

export default App;
