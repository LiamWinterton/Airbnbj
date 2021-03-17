import Globe from '../../assets/globe.svg'
import styles from './Menu.module.scss'

function Menu() {
	return (
		<div className={styles.menu}>
			<a className={styles.menu__button} href="#">Become a host</a>
			<a className={styles.menu__button} href="#">
				<Globe className={styles.svg} />
			</a>
		</div>
	)
}

export default Menu