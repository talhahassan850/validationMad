import {createAppContainer} from  'react-navigation';
import {createStackNavigator} from  'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ColorCounter from "./src/screens/ColorCounter";
const navigator = createStackNavigator(
{
	
	Home: HomeScreen,
	Color:ColorCounter,
	
},
{
	
	initialRouteName: "Home",
	defaultNavigationOptions:{
		title:"app"
	}
});

export default createAppContainer(navigator);