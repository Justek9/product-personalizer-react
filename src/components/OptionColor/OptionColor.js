import styles from './OptionColor.module.scss'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const OptionColor = ({ colors, setCurrentColor, currentColor }) => {
	return (
		<ul className={styles.choices}>
			{colors.map((color, i) => {
				const col = color.charAt(0).toUpperCase() + color.slice(1).toLowerCase()
				const colorClassName = `color${col}`
				return (
					<li key={i}>
						<button
							onClick={() => setCurrentColor(color)}
							type='button'
							className={clsx(styles[colorClassName], currentColor === color && styles.active)}></button>
					</li>
				)
			})}
		</ul>
	)
}
OptionColor.propTypes = {
	colors: PropTypes.array.isRequired,
	currentColor: PropTypes.string.isRequired,
	setCurrentColor: PropTypes.func.isRequired,
}

export default OptionColor
