import { useState } from 'react'
import Products from './components/products/Products'
import Navbar from './navigation/Navbar'
import Recommended from './recommended/Recommended'
import Sidebar from './sidebar/Sidebar'

//Database
import Card from './components/Card'
import products from './db/products'



const App = () => {
 const [selectedCategory , setSelectedCategory] = useState(null);
 const [query , setQuery] = useState('');
 
       //  Input Filter
   const handleInputChange = (event) => {
    setQuery(event.target.value);
   };

   const filteredItems =
    products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

// Ratio Filter
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  }


// Buttons Filter
  const handleClick = (event) => {
  setSelectedCategory(event.target.value);
}



function filteredData(products , selected , query) {
  let filteredProducts = products;
  if(query) {
    filteredProducts = filteredItems;
  }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

     return filteredProducts.map(
      ({img, title, star, reviews, prevPrice, newPrice}) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products , selectedCategory , query);
    console.log(result);

  return (
    <>
    <Sidebar
     handleChange={handleChange} />
     <Navbar  
      query={query}
      handleInputChange={handleInputChange}/>
     <Recommended 
      handleChange={handleClick}/>
     <Products 
     result={result} />
    </>
  )
}

export default App