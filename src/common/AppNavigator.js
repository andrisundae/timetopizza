import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import PizzaDetail from '../screens/PizzaDetail';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    PizzaDetail: { screen: PizzaDetail, title: 'Test' },
});

export default AppNavigator;