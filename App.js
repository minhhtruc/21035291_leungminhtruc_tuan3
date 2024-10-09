import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Screen01 from './Screens/Screen01';
import Screen02 from './Screens/Screen02';
import Screen03 from './Screens/Screen03';
import Screen04 from './Screens/Screen04';
import Screen05 from './Screens/Screen05';
import Screen06 from './Screens/Screen06';
import Screen07 from './Screens/Screen07';
import Screen08 from './Screens/Screen08';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Screen05' screenOptions={{
          headerShown: false
        }}
      >


        {/* <Stack.Screen name='Screen01' component={Screen01} headerShow={false} />
        <Stack.Screen name='Screen02' component={Screen02} headerShow={false} />
        <Stack.Screen name='Screen03' component={Screen03} headerShow={false} />
        <Stack.Screen name='Screen04' component={Screen04} headerShow={false} /> */}
        <Stack.Screen name='Screen05' component={Screen05} headerShow={false} />
        <Stack.Screen name='Screen06' component={Screen06} headerShow={false} />
        <Stack.Screen name='Screen07' component={Screen07} headerShow={false} />
        <Stack.Screen name='Screen08' component={Screen08} headerShow={false} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
