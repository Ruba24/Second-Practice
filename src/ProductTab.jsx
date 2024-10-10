import Heading from "./Heading.jsx";
import Product from "./Product.jsx";
function ProductTab() {
  return (
    <>
    <Heading />
    <div id="container">
      <Product
        title="Logitech MX Master"
        text1="8,000 DPI"
        text2="5 Programmable Buttons"
        price="8,999"
      />
      <Product
        title="Apple Pencil (2nd Gen)"
        text1="Inuitive Surface"
        text2="Designed for iPdad Pro"
        price= "9,199"
      />
      <Product
        title="Zebronics Zeb-Transformer"
        text1="Designed for iPad Pro"
        text2="Intuitive Surface"
        price={899}
      />
      <Product
        title="Petronics Toad 23"
        text1="Wireless"
        text2="Optical Orientation"
        price={278}
      />
      </div>
    </>
  );
}
export default ProductTab;
