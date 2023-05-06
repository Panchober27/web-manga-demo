import { StyleSheet } from "@react-pdf/renderer";

export const pdfStyles = StyleSheet.create({
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
