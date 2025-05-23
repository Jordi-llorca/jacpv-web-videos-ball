import "./App.css";
import { VideoList } from "./components/VideoList";

function App() {
  return (
    <>
      <div className="app">
        <h1>My YouTube Collection</h1>
        <VideoList />
      </div>
    </>
  );
}

export default App;
