import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import MyIcon from '../components/MyIcon';

const Drawer = createDrawerNavigator();

const INITIAL_ROUTE_NAME = 'Home';

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <Drawer.Screen name="Home" component={Home} options={{
                drawerIcon: config => <MyIcon name="home" size={30} color="#000" />
            }} />
            <Drawer.Screen name="Login" component={Login} options={{
                drawerIcon: config => <MyIcon name="sign-in" size={30} color="#000" />
            }} />
            <Drawer.Screen name="Signup" component={Signup} options={{
                drawerIcon: config => <MyIcon name="user-plus" size={30} color="#000" />
            }} />
        </Drawer.Navigator>
    );
}