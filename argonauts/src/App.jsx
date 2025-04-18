import './App.css';
import backgroundImage from './assets/jason-fleece.jpg'; // Background image
import circularImage from './assets/jason-taking.png'; // Circular image for the right section

function App() {
  return (
    <div className="app-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content-container">
        <div className="header">
          <h2>Quest for the Golden Fleece <span className="tree-emoji">🌴</span></h2>
        </div>
        <div className="main-content">
          <div className="text-section">
            <h1>Jason and the Argonauts</h1>
            <p>
              Embark on an adventure and experience the quest visually. See the voyage of the Argonauts led by Jason, and find the connection to how it redefined heroics and heroism!
            </p>
            <button className="start-button">Start Expedition</button>
          </div>
          <div className="image-section">
            <img src={circularImage} alt="Jason and the Argonauts" className="circular-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;