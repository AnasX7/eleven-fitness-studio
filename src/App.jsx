import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App({ language }) {
  return (
    <>
      <Header language={language} />
      <Main language={language} />
      <Footer language={language} />
    </>
  );
}
