
import Header from './Components/Header.jsx';
import Whiteboard from './Components/Whiteboard.jsx';
import './App.css';

function App() {

  const [isGenerating, setIsGenerating] = useState(false);
  const [receivedData, setReceivedData] = useState(null);
  
  const handleDataReceived = (data) => {
    setReceivedData(data);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
  };

  return (
    <div>
      <Header 
        onGenerate={handleGenerate}
      />
      <Whiteboard 
        isGenerating={isGenerating}
      />
    </div>
  );
}

export default App;
