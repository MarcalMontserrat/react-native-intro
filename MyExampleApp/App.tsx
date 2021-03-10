import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home} from './src/Home';
import {Result} from './src/Result';
import {RootStackParamList} from './src/RootStackParams';
import {ValuesList} from './src/ValuesList';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Values" component={ValuesList} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
