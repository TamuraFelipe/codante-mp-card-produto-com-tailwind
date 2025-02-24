import { useEffect, useState } from "react"
import Card from "./components/Card"

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/products.json') // Caminho correto para o JSON
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar os produtos');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <section className="container mx-auto p-0.5 md:p-2">
      <h1 className="text-2xl font-bold mb-1">Produtos</h1>
      <div className="flex flex-wrap gap-[36px]">
      {products.length > 0 ? (
        products.map(product => (
          <Card 
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            assessment={product.assessment}
            avaliation_quantity={product.avaliation_quantity}
            price={product.price}
          />
        ))
      ) : <p>Não existem produtos cadastrados!</p>}
    </div>
    </section>
  );
}

export default App;
