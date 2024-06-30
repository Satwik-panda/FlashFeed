import './App.css';
import ThemeContextProvider from './context/ThemeContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <ThemeContextProvider>
      <AppRouter />
    </ThemeContextProvider>
  );
}

export default App;
