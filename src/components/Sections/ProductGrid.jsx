import Reveal from "./Reveal";

const PRODUCTS = [
  {
    name: "Stride Runner Low",
    price: "$140",
    tag: "Best seller",
    image:
      "https://images.unsplash.com/photo-1669671943625-e20799ee5f42?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Stride Runner Mid",
    price: "$160",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1567069041071-bab3e18d72f0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Stride Track Spike",
    price: "$120",
    tag: "Pro",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Stride Trail Pro",
    price: "$175",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Stride Court Flex",
    price: "$130",
    tag: "Best seller",
    image:
      "https://images.unsplash.com/photo-1669671943625-e20799ee5f42?auto=format&fit=crop&w=800&q=80&crop=entropy",
  },
  {
    name: "Stride Recovery Slide",
    price: "$65",
    tag: "Restocked",
    image:
      "https://images.unsplash.com/photo-1567069041071-bab3e18d72f0?auto=format&fit=crop&w=800&q=80&crop=entropy",
  },
    {
    name: "Stride Sprint Elite",
    price: "$150",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Stride Urban Max",
    price: "$145",
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ProductGrid() {
  return (
    <div className="products">
      <Reveal as="h2" className="products__heading">
        The lineup
      </Reveal>

      <ul className="products__grid">
        {PRODUCTS.map((product, i) => (
          <Reveal
            as="li"
            key={product.name}
            delay={(i % 3) * 100}
            className="product-card"
          >
            <div className="product-card__frame">
              <img
                className="product-card__image"
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
              <span className="product-card__badge">{product.tag}</span>
              <span className="product-card__cta">
                View <span className="product-card__cta-arrow">→</span>
              </span>
            </div>

            <div className="product-card__info">
              <span className="product-card__name">{product.name}</span>
              <span className="product-card__price">{product.price}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}