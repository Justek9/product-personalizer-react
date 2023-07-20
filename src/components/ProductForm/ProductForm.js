import OptionColor from '../OptionColor/OptionColor'
import OptionSize from '../OptionSize/OptionSize'
import Button from '../Button/Button'
import PropTypes from 'prop-types'

import styles from './ProductForm.module.scss'

const ProductForm = ({
	finalPrice,
	currentSize,
	currentColor,
	setCurrentColor,
	setCurrentSize,
	title,
	sizes,
	colors,
}) => {

	const addToCartClickHandle = e => {
		e.preventDefault()
		console.log(
			`Summary\n==============\nName: ${title}\nPrice: ${finalPrice}\nSize: ${currentSize}\nColor: ${currentColor}`
		)
	}
	
	return (
		<form>
			<div className={styles.sizes}>
				<h3 className={styles.optionLabel}>Sizes</h3>
				<OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
			</div>
			<div className={styles.colors}>
				<h3 className={styles.optionLabel}>Colors</h3>
				<OptionColor colors={colors} setCurrentColor={setCurrentColor} currentColor={currentColor} />
			</div>
			<Button className={styles.button} onClick={addToCartClickHandle}>
				<span className='fa fa-shopping-cart' />
			</Button>
		</form>
	)
}
ProductForm.propTypes = {
	title: PropTypes.string.isRequired,
	colors: PropTypes.array.isRequired,
	sizes: PropTypes.array.isRequired,
	finalPrice: PropTypes.number.isRequired,
	currentSize: PropTypes.string.isRequired,
	currentColor: PropTypes.string.isRequired,
	setCurrentSize: PropTypes.func.isRequired,
	setCurrentColor: PropTypes.func.isRequired,
}

export default ProductForm
