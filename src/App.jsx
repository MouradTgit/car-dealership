import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import { Routes, Route, Link } from 'react-router-dom';
import Favorites from './Favorites.jsx';


const cars = [
  {
    id: 1,
    year: 2024,
    make: 'Porsche',
    model: 'Taycan',
    price: 100000,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/2024%20Porsche%20Taycan.jpg",
    engine: 'Electric',
    horsepower: '670',
    acceleration: '2.4 sec',
    topSpeed: '250 km/h',
    description: "The Porsche Taycan is a fully electric luxury sedan that combines performance with sustainability."
  },
  {
    id: 2,
    year: 2026,
    make: 'Mclaren',
    model: '720S',
    price: 240000,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/McLaren%20720S%20IMG%200022.jpg",
    engine: 'V8 4.0L',
    horsepower: '550',
    acceleration: '3.3 sec',
    topSpeed: '295 km/h',
    description: "A high-performance sports car combining bold styling with incredible speed and precision."
  },
  {
    id: 3,
    year: 2025,
    make: 'BMW',
    model: 'XM',
    price: 150000,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/2025%20BMW%20XM.jpg",
    engine: 'V8 4.4L',
    horsepower: '644',
    acceleration: '4.1 sec',
    topSpeed: '250 km/h',
    description: "The BMW XM is a high-performance SUV that combines luxury with power."
  },
  {
    id: 4,
    year: 2023,
    make: 'Rolls Royce',
    model: 'Cullinan Black Badge',
    price: 700000,
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Rolls%20Royce%20Cullinan%20Black%20Badge.jpg",
    engine: 'V12 6.75L',
    horsepower: '600',
    acceleration: '4.5 sec',
    topSpeed: '250 km/h',
    description: "The Rolls Royce Cullinan Black Badge is the ultimate luxury SUV, offering unparalleled comfort and performance."
  }
]

function App() {
  const [favorites, setFavorites] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Routes>
      <Route
        path="/favorites"
        element={
          <Favorites
            cars={cars.filter((car) => favorites.includes(car.id))}
          />
        }
      />

      <Route
        path="/"
        element={
          <div className="page">
            <header className="header">
              <h1>Car Dealership</h1>
              <nav className="nav">
                <a href="#collection">View Collection</a>
                <Link to="/favorites">View Favorites</Link>
              </nav>
            </header>

            <section className="hero">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search for cars..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button>Search</button>
              </div>
            </section>

            <main className="main">
              {selectedCar ? (
                <section className="vehicle-detail">
                  <button onClick={() => setSelectedCar(null)}>
                    ← Back to Collection
                  </button>

                  <h2>
                    {selectedCar.year} {selectedCar.make} {selectedCar.model}
                  </h2>

                  <img
                    className="car-image"
                    src={selectedCar.image}
                    alt={`${selectedCar.make} ${selectedCar.model}`}
                  />

                  <h3>${selectedCar.price.toLocaleString()}</h3>

                  <div className="car-info">
                    <div className="car-stats">
                      <h3>Performance Stats</h3>
                      <p>Engine: {selectedCar.engine || "N/A"}</p>
                      <p>Power: {selectedCar.horsepower ? `${selectedCar.horsepower} HP` : "N/A"}</p>
                      <p>0–100 km/h: {selectedCar.acceleration || "N/A"}</p>
                      <p>Top Speed: {selectedCar.topSpeed || "N/A"}</p>
                    </div>

                    <div className="car-description">
                      <h3>About This Vehicle</h3>
                      <p>{selectedCar.description || "More details coming soon."}</p>
                    </div>
                  </div>

                  <button
                    className="enquire-button"
                    onClick={() =>
                      alert(`You enquired about the ${selectedCar.make} ${selectedCar.model}.`)
                    }
                  >
                    Enquire
                  </button>
                </section>
              ) : (

      

                <section id="collection">
                  <h2>Car Collection</h2>
                  <p>Explore our wide range of cars available for sale.</p>

                  <div className="car-collection">
                    {cars
                      .filter((car) =>
                        `${car.year} ${car.make} ${car.model}`
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                      .map((car) => (
                        <div className="car-item" key={car.id}>
                          <div
                            className="car-card"
                            onClick={() => setSelectedCar(car)}
                        >
                          <p>{car.year} {car.make} {car.model}</p>

                          <img
                            className="car-image"
                            src={car.image}
                            alt={`${car.make} ${car.model}`}
                          />

                          <div className="car-details">
                            <p>Price: ${car.price.toLocaleString()}</p>
                          </div>
                        </div>

                        <button
                          className="favorite-button"
                          onClick={() =>
                            setFavorites((current) =>
                              current.includes(car.id)
                                ? current.filter((id) => id !== car.id)
                                : [...current, car.id]
                            )
                          }
                          aria-label={`Favorite ${car.model}`}
                        >
                          {favorites.includes(car.id) ? "♥" : "♡"}
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </main>
          </div>
        }
      />
    </Routes>
  );
}

export default App;