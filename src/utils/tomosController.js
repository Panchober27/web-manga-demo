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

// export const getAllTomoPages = (tomoIndex) => {
export const getTomosData = async () => {
  try {
    const tomosData = await fetch("/tomosGuide.json");
    return tomosData.json();
  } catch (err) {
    return null;
  }
};
