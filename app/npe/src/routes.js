import {createStackNavigator, createAppContainer} from 'react-navigation';

import Main from "./pages/main";
import Intro from "./pages/intro";
import Crimes from "./pages/crimes";
import TiposCrimes from "./pages/tiposCrimes";
import FormDescricao from "./pages/formDescricao";
import Anexo from "./pages/anexo";
import Resumo from "./pages/resumo";

const MainNavigator = createStackNavigator({
  Main: {screen: Main},
  Intro: {screen: Intro},
  Crimes: {screen: Crimes},
  TiposCrimes: {screen: TiposCrimes},
  FormDescricao: {screen: FormDescricao},
  Anexo: {screen: Anexo},
  Resumo: {screen: Resumo}
});

const App = createAppContainer(MainNavigator);

export default App;
