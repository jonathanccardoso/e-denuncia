import {createStackNavigator, createAppContainer} from 'react-navigation';

import Main from "./pages/main";
import Crimes from "./pages/crimes";

const MainNavigator = createStackNavigator({
  Main: {screen: Main},
  Crimes: {screen: Crimes},
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

/*
descricao
- hora
- data
- descricao 
- botao proximo

identificacao
- nome
- cpf
- data de nascimento
- telefone
- email
- botao proximo
*/
