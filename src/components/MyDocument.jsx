import React from "react";
import { Document, Page, Image, StyleSheet } from "@react-pdf/renderer";
import { pdf } from "@react-pdf/renderer";

import { getTomoPages } from "../utils/tomosController";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  image: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
  },
});

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
    })`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    cursor: "pointer",
  },
};

function MyDocument() {
  const tomo = getTomoPages(1);

  const handleButtonClick = async () => {
    try {
      const blob = await pdf(
        <Document>
          {/* <Page size="A4" style={styles.page}>
              <Image src={process.env.PUBLIC_URL + 'images/One-Piece/1/1.png'} style={styles.image} />
          </Page> */}
          {tomo.map((page, index) => (
            <Page size="A4" style={styles.page} key={index}>
              <Image src={page} style={styles.image} />
            </Page>
          ))}
        </Document>
      ).toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } catch (error) {
      console.error(error);
      alert("Error generating PDF");
    }
  };

  return <div style={containerStyles.card} onClick={handleButtonClick} />;
}

export default MyDocument;
