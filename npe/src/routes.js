import {createStackNavigator, createAppContainer} from 'react-navigation';

import Main from "./pages/main";
import Crimes from "./pages/crimes";
import TiposCrimes from "./pages/tiposCrimes";
import FormDescricao from "./pages/formDescricao";
import Anexo from "./pages/anexo";

const MainNavigator = createStackNavigator({
  Main: {screen: Main},
  Crimes: {screen: Crimes},
  TiposCrimes: {screen: TiposCrimes},
  FormDescricao: {screen: FormDescricao},
  Anexo: {screen: Anexo},
}, {
	navigationOptions: {
		headerStyle: {
			backgroundColor: "#DA552F"
		},
		headerTintColor: "#FFF"
	},
});

const App = createAppContainer(MainNavigator);

export default App;
