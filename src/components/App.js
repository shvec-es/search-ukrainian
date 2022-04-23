import Header from './Header';
import List from './Main/List/List';
import Hero from './Hero';
import Container from './Container';
import Footer from './Footer';
import TitleMain from './Main/Title/Title';

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <main>
        <TitleMain />
        <List />
      </main>
      <Footer />
    </Container>
  );
}

export default App;
