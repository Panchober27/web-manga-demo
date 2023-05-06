import MyDocument from './components/MyDocument';

function App() {
  return (
    <>
      <h1>One Piece Manga Site Demo</h1>
      <MyDocument imageUrl={process.env.PUBLIC_URL + 'images/One-Piece/1/1.png'} />
    </>
  );
}

export default App;
