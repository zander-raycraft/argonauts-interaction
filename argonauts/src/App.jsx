import './App.css';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './assets/jason-fleece.jpg';
import circularImage from './assets/jason-taking.png';

function App() {
  const navigate = useNavigate();

  const handleStartExpedition = () => {
    navigate('/journey');
  };

  return (
    <div className="app-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content-container">
        <div className="header">
          <h2>Quest for the Golden Fleece: The Argonautica <span className="tree-emoji">🌴</span></h2>
        </div>
        <div className="main-content">
          <div className="text-section">
            <h1>Jason and the Argonauts</h1>
            <p>
              Embark on an adventure and experience the quest visually. See the voyage of the Argonauts led by Jason, and find the connection to how it redefined heroics and heroism!
            </p>
            <button className="start-button" onClick={handleStartExpedition}>Start Expedition</button>
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