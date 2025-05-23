import "./App.css";
import { VideoList } from "./components/VideoList";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        <h1 className="light-title">Inquietud de Ball JACPV</h1>
        <VideoList />
      </div>
    </ErrorBoundary>
  );
}

export default App;
