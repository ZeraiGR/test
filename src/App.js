import { Button } from './components/Button';
import { Header } from './layout/Header';
import { StyledLayout } from './layout/Layout';
import { Auth } from './pages/Auth';

function App() {
  return (
    <StyledLayout>
      <Auth />
    </StyledLayout>
  );
}

export default App;
