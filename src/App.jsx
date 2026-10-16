import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const cars = [
  {
    id: 1,
    year: 2024,
    make: 'Porsche',
    model: 'Taycan',
    price: 100000,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    year: 2026,
    make: 'Mclaren',
    model: '720S',
    price: 240000,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    year: 2025,
    make: 'BMW',
    model: 'XM',
    price: 150000,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    year: 2023,
    make: 'Rolls Royce',
    model: 'Cullinan Black Badge',
    price: 700000,
    image: 'https://via.placeholder.com/150'
  }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <header className="header">
        <h1>Car Dealership</h1>
        <p></p>

        <nav className="nav">
          <a href="#collection">View Collection</a>
          <a href="#favorites">View Favorites</a>
        </nav>
      </header>

      {/*Search Bar + Hero Section */}
      <section 
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}>

          <div className="hero-content">
            <h2>Find Your Dream Car</h2>
            <p>Browse our collection of luxury cars.</p>
          
      
      
      
        <div className="search-bar">
          <input type="text" placeholder="Search for cars..." />
          <button aria-label="Search">Search</button>
          </div>
        </div>
      </section>

      {/** Car Collection */}
      <main className="main">
        <section id="collection" className="collection-section">
          <div className="collection-header">
            <h2>Car Collection</h2>
            <p>Explore our wide range of cars available for sale.</p>
          </div>

          <span className="collection-count">Available: {cars.length}</span>

          <div className='car-collection'>
            {cars.map(car => (
              <div className='car-item' key={car.id}>
                <div className='car-card'>
                  <p>{car.year} &nbsp; {car.make} &nbsp; {car.model}</p>

                  <img className='car-image'
                  src={car.image} 
                  alt={`${car.make} ${car.model} ${car.price}`} 
                  />

                  <div className='car-details'>
                    <p>Price: ${car.price.toLocaleString()}</p>
                  </div>
                </div>
                <button className='favorite-button' aria-label="Favorite car">♡</button>
              </div>
            ))}
          </div>
        </section>

        <section id="favorites">
          <h2>Your Favorites</h2>
          <p>View the cars you've marked as favorites.</p>
        </section>
      </main>
    </div>
  )
    
}

export default App
