import Container from './Container';
import Header from './Header/Header';
import List from './Main/List/List';
import Hero from './Hero/Hero';


function App() {
  return (
    <Container>
      <Header />
      <Hero/>
      <List />
    </Container>
  );
}

export default App;
