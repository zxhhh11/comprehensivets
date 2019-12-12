import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login/index';
import NotFound from './pages/notFound';
import {persistor} from './redux/store/index'
import {PersistGate} from 'redux-persist/lib/integration/react';
import intl from 'react-intl-universal';
import {emit} from './utils/emit';
import zh_CN from 'antd/es/locale/zh_CN';
import en_US from 'antd/es/locale/en_US';
import { ConfigProvider } from 'antd';
require('intl/locale-data/jsonp/en.js');
require('intl/locale-data/jsonp/zh.js');

const locales = {
  'en-US': require('./locales/en_US.json'),
  'zh-CN': require('./locales/zh_CN.json'),
};

  interface Props {

  }
  interface State{
    antdLang:any
  }
class App extends React.Component<Props,State>{
    constructor(props:Props){
    super(props)
    this.state ={
      antdLang: en_US,
    }
    }
    loadLocales(lang = 'en-US') {
      intl.init({
          currentLocale: lang,  // 设置初始语音
          locales,
      })
      .then(() => {
          this.setState({
              antdLang:lang==='zh-CN' ? zh_CN:en_US
          });
      });
    }
    componentDidMount(){
      emit.on('change_language', (lang:string) => this.loadLocales(lang)); // 监听语言改变事件
      this.loadLocales(); // 初始化语言
    }
    render(){
      return(
        <ConfigProvider locale={this.state.antdLang}>  
        <div className="App">
          <PersistGate persistor={persistor}>
          <Router>
          <Switch>
            <Route component={Login} path={`${process.env.PUBLIC_URL}/login`} />
            <Route component={NotFound} path={`${process.env.PUBLIC_URL}/404`} />
            <Route component={Home} path={`${process.env.PUBLIC_URL}/`} />
            {/* <PrivateRoute component={Home} path={`${process.env.PUBLIC_URL}/`} /> */}
          </Switch>
        </Router>
        </PersistGate>
        </div>
        </ConfigProvider>
      )
    }
}


export default App;



// const App: React.FC = () => {
//   return (
//     <div className="App">
//         <Home/>
//         {/* Home */}
//     </div>
//   );
// }
