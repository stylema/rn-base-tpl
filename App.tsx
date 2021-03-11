import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IconFont from './app/iconfont';
import ShoppingCartPage from './app/pages/ShoppingCartPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ShoppingCartPage name={'123'} />
      <Text>Home Screen my name cc</Text>
      <View>
        <IconFont name="iconicontishi" size={40} color={['green', 'orange']} />
        <IconFont
          name="iconwanchenggongxu"
          size={40}
          color={['green', 'orange']}
        />
      </View>
    </View>
  );
}
function SettingScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ShoppingCartPage name={'123'} />
      <Text>Home Screen my name setting</Text>
      <View>
        <IconFont name="iconicontishi" size={40} color={['green', 'orange']} />
        <IconFont
          name="iconwanchenggongxu"
          size={40}
          color={['green', 'orange']}
        />
      </View>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      {/*<BottomTab.Navigator>*/}
      {/*  <BottomTab.Screen name="Home" component={HomeScreen} />*/}
      {/*  <BottomTab.Screen name="Setting" component={SettingScreen} />*/}
      {/*</BottomTab.Navigator>*/}
      <View style={{flex: 1, paddingTop: 50}}>
        <TopTab.Navigator>
          <TopTab.Screen name="Home" component={HomeScreen} />
          <TopTab.Screen name="Setting" component={SettingScreen} />
        </TopTab.Navigator>
      </View>
    </NavigationContainer>
  );
}

export default App;
