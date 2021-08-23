import 'react-native-gesture-handler';
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CreateRequest from './src/pages/CreateRequest/CreateRequest';
import Question from './src/pages/Question/Question';
import Setting from './src/pages/Question/Setting';
import Ticket from './src/pages/Ticket/Ticket';
import TicketDetails from './src/pages/TicketDetails/TicketDetails';
import Task from './src/pages/Task/Task';
import TaskDetails from './src/pages/TaskDetail';
import Answer from './src/pages/Answer';
import Settings from './src/pages/Settings'
import Person from './src/pages/Person'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  function MyTab() {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Anasayfa" component={Ticket} />
        <Tab.Screen name="Görevlerim" component={Task} />
        <Tab.Screen name="Daha fazla" component={Settings} />
        {/* <Tab.Screen name="CreateRequestt" component={CreateRequest} />
        <Tab.Screen name="Question" component={Question} /> */}
      </Tab.Navigator>
    );
  }

  // function MyDrawer() {
  //   return (
  //     <Drawer.Navigator screenOptions={{headerShown: false}}>
  //       {/* <Drawer.Screen name="Home" component={HomePage}/> */}
  //       {/* <Drawer.Screen name="Ticket" component={Ticket}/>
  //       <Drawer.Screen name="CreateRequestt" component={CreateRequest}/>
  //       <Drawer.Screen name="Question" component={Question}/>
  //       {/* <Drawer.Screen name="Question" component={tab} /> */}
  //       {/* <Drawer.Screen name="Topic and Suggestions" component={Home}/>
  //       <Drawer.Screen name="Ticket Details" component={TicketDetails}/>  */}
  //     </Drawer.Navigator>
  //   );
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyTab" component={MyTab} />
        {/* <Stack.Screen name="MyDrawer" component={MyDrawer}/> */}
        <Stack.Screen name="TicketDetails" component={TicketDetails} />
        <Stack.Screen name="TaskDetails" component={TaskDetails} />
        <Stack.Screen name="Answer" component={Answer} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="Person" component={Person}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
