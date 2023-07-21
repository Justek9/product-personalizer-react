import { useState, useMemo } from 'react'
import ProductForm from '../ProductForm/ProductForm'
import PropTypes from 'prop-types'
import ProductImage from '../ProductImage/ProductImage'
import styles from './Product.module.scss'

const Product = ({ title, basePrice, colors, sizes, name }) => {
	const [currentColor, setCurrentColor] = useState(colors[0])
	const [currentSize, setCurrentSize] = useState(sizes[0].name)

	const getPrice = useMemo(() => {
		const additionalPrice = sizes.filter(el => el.name === currentSize)[0].additionalPrice
		return basePrice + additionalPrice
	}, [currentSize, basePrice, sizes])

	return (
		<article className={styles.product}>
			<ProductImage name={name} currentColor={currentColor} />
			<div>
				<header>
					<h2 className={styles.name}>{title}</h2>
					<span className={styles.price}>Price: {getPrice} $</span>
				</header>
				<ProductForm
					finalPrice={getPrice}
					currentSize={currentSize}
					currentColor={currentColor}
					setCurrentColor={setCurrentColor}
					setCurrentSize={setCurrentSize}
					title={title}
					sizes={sizes}
					colors={colors}
				/>
			</div>
		</article>
	)
}
Product.propTypes = {
	title: PropTypes.string.isRequired,
	basePrice: PropTypes.number.isRequired,
	colors: PropTypes.array.isRequired,
	sizes: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
}

export default Product
