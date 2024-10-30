import './App.css';
import { data } from './data';
import VideoTabComponent from './components/VideoTabComponent';

function App() {
  return (
    <div>
      <VideoTabComponent data={data} />
    </div>
  );
}

export default App;
