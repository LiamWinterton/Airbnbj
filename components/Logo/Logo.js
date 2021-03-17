import Image from 'next/image'

function Logo() {
	return (
		<Image src="/logo-white.png" layout="fixed" width={290} height={60} priority={true}/>
	)
}

export default Logo