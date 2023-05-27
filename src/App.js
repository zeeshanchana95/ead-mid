import './App.css';
import { PollDisplay } from './components_taskA/PollDisplay';
import { UserParticipation } from './components_taskA/UserParticipation';
// import { Timer } from './components_taskB/Timer';

function App() {
  return (
    <div className="App">
      {/* <Timer /> */}
      <h1>Polling App</h1>
      <PollDisplay />
      <UserParticipation />
    </div>
  );
}

export default App;
