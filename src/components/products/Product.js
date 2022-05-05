
const dummy_products = ['book', 'apple', 'orange']

const Product = props => {
  return (
    <ul>
      {dummy_products.map(product => <li>{product}</li>)}
    </ul>
  )
}

export default Product;