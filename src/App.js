import Home from './home.page';
import Modal from './modal.component';
import { ModalProvider } from './modal.context';

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Home />
        <Modal />
      </div>
    </ModalProvider>   
  );
}

export default App;
