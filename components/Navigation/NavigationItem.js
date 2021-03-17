import styles from './NavigationItem.module.scss'

function NavigationItem(props) {
	return(
		<li className={styles.nav_item}>
			<a href={props.href}>{props.title}</a>
		</li>
	)
}

export default NavigationItem