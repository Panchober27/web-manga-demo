const tomoNumber = 1;
const totalPages = 56;

const Tomo1Pages = [];

for (let i = 1; i <= totalPages; i++) {
  const imageNumber = i.toString().padStart(2, "0");
  const imagePath = `images/One-Piece/${tomoNumber}/${imageNumber}.png`;
  Tomo1Pages.push(imagePath);
}

export { Tomo1Pages };
