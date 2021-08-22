import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CreateRequest from './src/pages/CreateRequest/CreateRequest';
import Question from './src/pages/Queston/Question';
import Setting from './src/pages/Queston/Setting';
import Home from './src/Home';
import Login from './src/pages/Login'
import SingIn from './src/pages/SingIn/SingIn';
import Ticket from './src/pages/Ticket/Ticket';
import TicketDetails from './src/pages/TicketDetails/TicketDetails'
import HomePage from './src/pages/home/Home';
import Task from './src/pages/Task/Task'
import TaskDetail from './src/pages/TaskDetail'
import Answer from './src/pages/Answer'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
//  function tab(){
//     return(
//       <Tab.Navigator screenOptions={{headerShown:false}} >
//           <Tab.Screen name="Question" component={Question} /> 
//           <Tab.Screen name="Setting" component={Setting} />
//         </Tab.Navigator>
//     );
//   }
   function MyDrawer() {
    return (
      <Drawer.Navigator screenOptions={{headerShown:false} }  >
        <Drawer.Screen name="Home" component={HomePage}/>
        <Drawer.Screen name="CreateRequestt" component={CreateRequest}/>
        <Drawer.Screen name="Question" component={Question}/>
        {/* <Drawer.Screen name="Question" component={tab} /> */}
        <Drawer.Screen name="Topic and Suggestions" component={Home}/>
        <Drawer.Screen name="Ticket" component={Ticket}/>
        <Drawer.Screen name="Ticket Details" component={TicketDetails}/>
      </Drawer.Navigator>
    );
  }
 
  
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}  >
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Task" component={Task}/>
        <Stack.Screen name="CreateRequestt" component={CreateRequest}/>
        <Stack.Screen name="Ticket" component={Ticket}/>
        <Stack.Screen name="Topic and Suggestions" component={Home}/>
        <Stack.Screen name="Home" component={HomePage}/>
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="SingIn" component={SingIn}/>
        <Stack.Screen name="Drawer" component={MyDrawer}/>
        <Stack.Screen name="TicketDetails" component={TicketDetails}/>
        <Stack.Screen name="TaskDetail" component={TaskDetail}/>
        <Stack.Screen name="Answer" component={Answer}/>
        <Stack.Screen name="SoruEkle" component={Setting}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
