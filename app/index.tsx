import { registerRootComponent } from 'expo'; // Añade esta importación
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../src/Navigation/Navigation';

function App() {
    return (
        <Navigation />
    );
}

// Solo un export default con registerRootComponent
export default registerRootComponent(App);
