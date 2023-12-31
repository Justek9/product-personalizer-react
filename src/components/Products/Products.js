import { useState } from 'react'
import productsData from '../../data/products'
import Product from '../Product/Product'

const Products = () => {
	const [products] = useState(productsData)

	return (
		<section>
			{products.map((shirt, i) => {
				return <Product {...products[i]} key={shirt.id} />
			})}
		</section>
	)
}

export default Products
