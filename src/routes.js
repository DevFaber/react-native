import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import User from './pages/Main';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    User,
  })
);

export default Routes;