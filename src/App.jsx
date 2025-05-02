import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ChatBot from './components/ChatBot/ChatBot';
import HowToUse from './components/HowToUse/HowToUse';
import About from './components/About/About';
import { ChatProvider } from './context/ChatContext';

const App = () => {

  return (
    <>
      <ChatProvider>
        <NavBar/>
        <Header/>
        <About/>
        <HowToUse/>
        <ChatBot/>
        <Footer/>
      </ChatProvider>
    </>

  )
}

export default App;
