import Reveal from "./Reveal";

const PRODUCTS = [
  { name: "Stride Runner Low", price: "$140" },
  { name: "Stride Runner Mid", price: "$160" },
  { name: "Stride Track Spike", price: "$120" },
  { name: "Stride Trail Pro", price: "$175" },
  { name: "Stride Court Flex", price: "$130" },
  { name: "Stride Recovery Slide", price: "$65" },
];

export default function ProductGrid() {
  return (
    <div className="products">
      <Reveal as="h2" className="products__heading">
        The lineup
      </Reveal>

      <ul className="products__grid">
        {PRODUCTS.map((product, i) => (
          <Reveal as="li" key={product.name} delay={(i % 3) * 100} className="product-card">
            <div className="product-card__frame" />
            <span className="product-card__name">{product.name}</span>
            <span className="product-card__price">{product.price}</span>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
