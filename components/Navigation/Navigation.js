import styles from './Navigation.module.scss'

import NavigationItem from './NavigationItem'

function Navigation() {
	return (
		<ul className={styles.nav}>
			<NavigationItem href="#" title="Places to stay" />
			<NavigationItem href="#" title="Experiences" />
			<NavigationItem href="#" title="Online Experiences" />
		</ul>
	)
}

export default Navigation