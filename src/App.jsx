import { useSelector } from 'react-redux';
import Header from './components/Header';
import CounterList from './components/CounterList';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const App = () => {
  const user = useSelector(state => state.user.user);

  return (
    <div className="app">
      <Header />
      {user ? (
        <CounterList />
      ) : (
        <>
          <LoginForm />
          <RegisterForm />
        </>
      )}
    </div>
  );
};

export default App;
