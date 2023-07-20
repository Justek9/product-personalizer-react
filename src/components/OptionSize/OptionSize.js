import styles from './OptionSize.module.scss'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
	return (
		<ul className={styles.choices}>
			{sizes.map((size, i) => {
				return (
					<li key={i}>
						<button
							type='button'
							className={clsx(currentSize === size.name && styles.active)}
							onClick={() => setCurrentSize(size.name)}>
							{size.name}
						</button>
					</li>
				)
			})}
		</ul>
	)
}
OptionSize.propTypes = {
	sizes: PropTypes.array.isRequired,
	currentSize: PropTypes.string.isRequired,
	setCurrentSize: PropTypes.func.isRequired,
}

export default OptionSize
