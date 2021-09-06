import 'react-native-gesture-handler';
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

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

function generateIcon(focused, color, route) {
  let iconName;
  switch (route.name) {
    case 'Anasayfa':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'Daha fazla':
      iconName = focused ? 'settings' : 'settings-outline';
      break;
    case 'Görevlerim':
      iconName = focused ? 'people' : 'people-outline';
      break;
    case 'Profile':
      iconName = focused ? 'person' : 'person-outline';
    default:
      break;
  }
  return <Icon name={iconName} color={color} size={25} />;
}

export default function App() {
  function MyTab() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => generateIcon(focused, color, route),
        })}
        tabBarOptions={{
          activeTintColor: '#021D49',
          inactiveTintColor: 'gray',
          showLabel: true,
        }}>
        <Tab.Screen
          options={{headerShown: false}}
          name="Anasayfa"
          component={Ticket}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Görevlerim"
          component={Task}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Daha fazla"
          component={Settings}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyTab" component={MyTab} />
        <Stack.Screen options={{
            headerStyle: {backgroundColor: '#021D49'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitle:"Detay",
            headerShown:true
          }}name="TicketDetails" component={TicketDetails} />
        <Stack.Screen options={{
            headerStyle: {backgroundColor: '#021D49'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitle:"Detay",
            headerShown:true
          }}name="TaskDetails" component={TaskDetails} />
        <Stack.Screen options={{
            headerStyle: {backgroundColor: '#021D49'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitle:"Mail Gönder",
            headerShown:true
          }}name="Answer" component={Answer} />
        <Stack.Screen options={{
            headerStyle: {backgroundColor: '#021D49'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitle:"Soru",
            headerShown:true
          }}name="Question" component={Question} />
        <Stack.Screen options={{
            headerStyle: {backgroundColor: '#021D49'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitle:"Ekip Arkadaşlarım",
            headerShown:true
          }}name="Person" component={Person} />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#021D49'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitle: 'Soru Ekle',
            headerShown: true,
          }}
          name="QuestionAdd"
          component={QuestionAdd}
        />
        <Stack.Screen name="Suggestion" component={Suggestion} />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#021D49'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitle: 'Konu Ekle',
            headerShown: true,
          }}
          name="SuggestionAdd"
          component={SuggestionAdd}
        />
        <Stack.Screen options={{
            headerStyle: {backgroundColor: '#021D49'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitle:"Yeni Bilet Ekle",
            headerShown:true
          }}name="CreateRequest" component={CreateRequest} />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#021D49'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitle: 'Sıkça Sorulan Sorular',
            headerShown: true,
          }}
          name="Sorusayfasi"
          component={Sorusayfasi}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#021D49'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitle: 'Konu ve Öneriler',
            headerShown: true,
          }}
          name="KonuSayfasi"
          component={KonuSayfasi}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
