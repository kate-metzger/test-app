import LoginScreen from '../components/screens/LoginScreen';

export default function LoginRoute() {
  const handleLogin = () => {
    console.log('User logged in');
    // You can navigate to the tab navigator here if you want
  };

  return <LoginScreen onLogin={handleLogin} />;
}
