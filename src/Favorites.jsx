    import "./App.css";
        import { Link } from "react-router-dom";


    function Favorites({ cars }) {
    return (
        <div className="page">
        <header className="header">
            <h1>Car Dealership</h1>

            <nav className="nav">
            <Link to="/">Collection</Link>
            <Link to="/favorites">Favorites</Link>
            </nav>
        </header>

        <main className="main">
            <h2>Your Favorites</h2>
            <p>Keep track of the cars you're interested in.</p>

            {cars.length === 0 ? (
            <div className="favorites-empty">
                <h3>No favorites yet</h3>
                <p>Visit the collection and choose a car you like.</p>
                <a href="/">Browse Collection</a>
            </div>
            ) : (
            <div className="car-collection">
        {cars.map((car) => (
        <div className="car-item" key={car.id}>
            <div className="car-card">
            <img
                className="car-image"
                src={car.image}
                alt={`${car.make} ${car.model}`}
            />
            <div className="car-details">
                <p>{car.year} {car.make} {car.model}</p>
                <p>${car.price.toLocaleString()}</p>
            </div>
            </div>
        </div>
        ))}
    </div>
    )}
        </main>
        </div>
    );
    }

    export default Favorites;
