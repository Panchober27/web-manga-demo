import Tomo1Page1 from "./One-Piece/1/1.png";

const styles = {
  card: {
    border: "solid 1px #ccc",
    borderRadius: "2px",
    padding: "10px",
    margin: "10px",
    width: "250px",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
    backgroundImage: `url(${Tomo1Page1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    cursor: "pointer",
  },
};

const TomoComponent = () => {
  
  const handleClick = () => {
    // open new tab on browser
    window.open("https://google.com", "_blank");
  };

  return (
    <>
      <div style={styles.card} onClick={handleClick}>
        <h3>Tomo 1</h3>
        <p>Descripcion</p>
      </div>
    </>
  );
};

export default TomoComponent;
