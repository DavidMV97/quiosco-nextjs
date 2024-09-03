import ProductCard from "@/components/products/ProductCard"
import { prisma } from "@/src/lib/prisma"

async function getProducts(category:string){
  const products = await prisma.product.findMany({
    where: {
      category:{
        slug: category
      }
    }
  })

  return products
}

export default async function orderPage({params}: {params: {category : string}}) {
  
  const products = await getProducts(params.category)
  
  
  return (
    <>

      <div className="grid">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  )
}
