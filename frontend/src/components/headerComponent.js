import { Link } from 'react-router-dom';
const HeaderComponent = () => {
    return(
        <div>
            <Link to={`/movies`}>Movies</Link>
            <Link to={`/bookings`}>Bookings</Link>
        </div>
    );

};

export default HeaderComponent;