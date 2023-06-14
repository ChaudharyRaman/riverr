import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/userActions';

const Header = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <h1>Counting App</h1>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <div>
          <a href="/login">Login</a> | <a href="/register">Register</a>
        </div>
      )}
    </header>
  );
};

export default Header;
