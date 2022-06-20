import Container from "./components/Container";
import NavBar from "./components/NavBar";

const App = () => {
  const routines = [
    'Bangun Tidur',
    'Mandi',
    'Menggosok Gigi'
  ];

  return (
    <>
      <NavBar />

      <Container routines={routines} />
    </>
  );
}

export default App;