import React, { useState } from "react";
import { Button, Modal } from "antd";

const TomoComponent = ({ tomo }) => {
  const containerStyles = {
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
      backgroundImage: `url(${
        process.env.PUBLIC_URL + "images/One-Piece/1/1.png"
        // process.env.PUBLIC_URL + `images/One-Piece/${tomo.tomoIndex}/${tomo.tomoIndex}.png`
      })`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      cursor: "pointer",
    },
  };

  const [isChapterModalOpen, setisChapterModalOpen] = useState(false);
  const showChapterModal = () => {
    setisChapterModalOpen(true);
  };
  const handleChapterOk = () => {
    setisChapterModalOpen(false);
  };
  const handleChapterCancel = () => {
    setisChapterModalOpen(false);
  };

  //   aqui cargare el modal para mostrar las imagenes de cada capitulo.
//   const renderChaptersModal = () => <Modal></Modal>;

  return (
    <>
      <div
        style={containerStyles.card}
        onClick={() => {
          alert("Tomo " + tomo.tomoIndex);
        }}
      />

      <Button type="primary" onClick={showChapterModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isChapterModalOpen}
        onOk={handleChapterOk}
        onCancel={handleChapterCancel}
      >
        {tomo.chapters.map((chapter) => (
          <div style={{ margin: "5px" }} key={chapter.chapterIndex}>
            <Button type="primary">{chapter.chapterName}</Button>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default TomoComponent;
