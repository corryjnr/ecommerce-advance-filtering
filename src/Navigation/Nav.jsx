import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import './Nav.css'
const Nav = () => {
	return (
		<nav>
			<div className='nav-container'>
				<input
					type='text'
					placeholder='Enter to search'
					className='search-input'
				/>
			</div>

			<div className='Profile-container'>
				<a href='#'>
					<FiHeart className='nav-icons' />
				</a>
				<a href='#'>
					<AiOutlineShoppingCart className='nav-icons' />
				</a>

				<a href='#'>
					<AiOutlineUserAdd className='nav-icons' />
				</a>
			</div>

		</nav>
	)
}

export default Nav