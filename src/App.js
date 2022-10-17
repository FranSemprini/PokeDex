import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from './appRouter/AppRouter';
import { PkmProvider } from './context/PkmContext';

function App() {
  return (
    <div className="App">
      <PkmProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </PkmProvider>
    </div>
  );
}

export default App;
