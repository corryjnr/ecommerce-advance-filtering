import './Category.css'

const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label htmlFor="" className="sidebar-label-container">
          <input type='radio' name='test' />
          <span className="checkmark"></span>All
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type='radio' name='test' />
          <span className="checkmark"></span>Sneakers
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type='radio' name='test' />
          <span className="checkmark"></span>Sandals
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type='radio' name='test' />
          <span className="checkmark"></span>Hills
        </label>
      </div>
    </div>
  )
}

export default Category