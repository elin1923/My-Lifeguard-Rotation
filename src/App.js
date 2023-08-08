
import Header from './Components/Header.jsx';
import Whiteboard from './Components/Whiteboard.jsx';
import './App.css';

function App() {

  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
  };

  return (
    <div>
      <Header />
      <Whiteboard />
    </div>
  );
}

export default App;
