import { useState } from 'react'
import styles from './Product.module.scss'
import clsx from 'clsx'
import Button from '../Button/Button'
import PropTypes from 'prop-types'

const Product = ({ title, basePrice, colors, sizes, name }) => {
	const [currentColor, setCurrentColor] = useState(colors[0])
	const [currentSize, setCurrentSize] = useState(sizes[0].name)
  console.log(currentSize);

	return (
		<article className={styles.product}>
			<div className={styles.imageContainer}>
				<img
					className={styles.image}
					alt={`${name} shirt ${currentColor}`}
					src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
				/>
			</div>
			<div>
				<header>
					<h2 className={styles.name}>{title}</h2>
					<span className={styles.price}>Price: {basePrice}$</span>
				</header>
				<form>
					<div className={styles.sizes}>
						<h3 className={styles.optionLabel}>Sizes</h3>
						<ul className={styles.choices}>
							{sizes.map((size, i) => {
								return (
									<li key={i}>
										<button type='button' className={clsx(currentSize === size.name && styles.active)}>
											{size.name}
										</button>
									</li>
								)
							})}
						</ul>
					</div>
					<div className={styles.colors}>
						<h3 className={styles.optionLabel}>Colors</h3>
						<ul className={styles.choices}>
							{colors.map((color, i) => {
								const col = color.charAt(0).toUpperCase() + color.slice(1).toLowerCase()
								const colorClassName = `color${col}`
								return (
									<li key={i}>
										<button
											type='button'
											className={clsx(styles[colorClassName], currentColor === color && styles.active)}></button>
									</li>
								)
							})}
						</ul>
					</div>
					<Button className={styles.button}>
						<span className='fa fa-shopping-cart' />
					</Button>
				</form>
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
