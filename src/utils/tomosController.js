// const tomoNumber = 1;
// const totalPages = 56;
// const TomoPages = [];
// for (let i = 1; i <= totalPages; i++) {
//   const imageNumber = i.toString().padStart(2, "0");
//   const imagePath = `images/One-Piece/${tomoNumber}/${imageNumber}.png`;
//   TomoPages.push(imagePath);
// }
// export { TomoPages };

export const getTomoPages = (tomoNomber) => {
  try {
    const totalPages = 56;
    const TomoPages = [];
    for (let i = 1; i <= totalPages; i++) {
      const imagePath = `images/One-Piece/${tomoNomber}/${i}.png`;
      TomoPages.push(imagePath);
    }
    return TomoPages;
  } catch (err) {
    console.log(err);
    return [];
  }
};


