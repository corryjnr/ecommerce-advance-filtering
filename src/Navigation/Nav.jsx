import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import './Nav.css'
const Nav = ({ query, handleInputChange }) => {
  return (
    <nav>
      <div className='nav-container'>
        <input
          type='text'
          placeholder='Enter to search'
          className='search-input'
          value={query}
          onChange={handleInputChange}
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