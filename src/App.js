import './App.css';
import { Sidebar } from './Component/Sidebar/Sidebar';
import { Dashboard } from './Component/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
        <Sidebar />
        <Dashboard />
    </div>
  );
}

export default App;
