import 'react-native-gesture-handler';
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LinearGradient from 'react-native-linear-gradient';

import CreateRequest from './src/pages/CreateRequest/CreateRequest';
import Question from './src/pages/Question/Question';
import Ticket from './src/pages/Ticket/Ticket';
import TicketDetails from './src/pages/TicketDetails/TicketDetails';
import Task from './src/pages/Task/Task';
import TaskDetails from './src/pages/TaskDetail';
import Answer from './src/pages/Answer';
import Settings from './src/pages/Settings';
import Person from './src/pages/Person';
import QuestionAdd from './src/pages/Question/QuestionAdd';
import Suggestion from './src/pages/Suggestion';
import SuggestionAdd from './src/pages/Suggestion/SuggestionAdd';
import Sorusayfasi from './src/pages/Question/QuestionPage';
import KonuSayfasi from './src/pages/Suggestion/SuggestionPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  function MyTab() {
    return (
      <Tab.Navigator
        screenOptions={
          (({route}) => ({
            tabBarIcon: ({focused}) => {
              if (route.name === Anasayfa)
                return (
                  <LinearGradient
                    colors={focused ? ['#F21CC8', '#FD9FEB'] : ['#fff', '#fff']}
                  />
                );
            },
          }),
          {headerShown: false})
        }>
        <Tab.Screen name="Anasayfa" component={Ticket} />
        <Tab.Screen name="Görevlerim" component={Task} />
        <Tab.Screen name="Daha fazla" component={Settings} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyTab" component={MyTab} />
        <Stack.Screen name="TicketDetails" component={TicketDetails} />
        <Stack.Screen name="TaskDetails" component={TaskDetails} />
        <Stack.Screen name="Answer" component={Answer} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="Person" component={Person} />
        <Stack.Screen name="QuestionAdd" component={QuestionAdd} />
        <Stack.Screen name="Suggestion" component={Suggestion} />
        <Stack.Screen name="SuggestionAdd" component={SuggestionAdd} />
        <Stack.Screen name="CreateRequest" component={CreateRequest} />
        <Stack.Screen name="Sorusayfasi" component={Sorusayfasi} />
        <Stack.Screen name="KonuSayfasi" component={KonuSayfasi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
