import * as React from 'react';
import { connect } from 'react-redux'
import { Layout, Menu, Icon,Breadcrumb,DatePicker,Popover } from 'antd';
import { getNews,setLastOpenKeyA, setSelectKeyA } from '../../redux/actions/index';
import { Route, Switch as RouteSwitch, Redirect, Link } from 'react-router-dom';
import Presentation from './presentation/index'
import Files from './files';
import Charts from './charts';
import TableList from './tableList';
import {RouterProps,RoutersBase,CommonReducer} from '../../utils/common'
import routers from '../../utils/routers';
import {emit} from '../../utils/emit'
// import intl from 'react-intl-universal';


const { SubMenu } = Menu;
const { Header, Sider ,Footer } = Layout;
// 根据路由配置的面包屑导航
const breadcrumbNameMap:any = {
  '/': 'Home',
  '/presentation': 'Presentation',
  '/presentation/dashboard': 'Dashboard',
  '/presentation/lists': 'Lists',
  '/presentation/forms': 'Forms',
  '/tableList': 'List',
  '/tableList/fixedColumn': 'FixedColumn',
  '/tableList/headerGroup': 'HeaderGroup',
  '/tableList/editable': 'Editable',
  '/files': 'Files',
  '/charts': 'Charts'
};

export interface HomeProps extends RouterProps {
  handleClick: () => any,
  setLastOpenKey:(openKey:string[])=>void,
  openKeys:string[],
  setSelectKey:(selectKey:string)=>void,
  selectKey:string
}
export interface HomeState {
  collapsed:boolean,
  lang:string
}


class Home extends React.Component<HomeProps,HomeState> {
  rootKeys:string[] = ['presentation', 'tableList'];
  state = {
    collapsed: false,
    lang:'en-US'
  };

  unListen  = this.props.history.listen(route => {
    const text = route.pathname;
    if (text === '/login' || text === '/') {
      return;
    }
    if (text === '/dashboard') {
      return;
    }
    const current = text.substr(text.lastIndexOf('/') + 1);
    if(current==='charts'||current==='files'){
      this.props.setLastOpenKey([''])
    }else{
      
      const newOpenKey = text.substr(1,text.lastIndexOf('/')-1);
      this.props.setLastOpenKey([newOpenKey])
    }
    this.props.setSelectKey(current)
  })

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  
  
  componentDidMount(){
    let lang =localStorage.getItem('lang')
    let newLang = lang ? lang:navigator.language
    this.setLocal(newLang)
  }
  componentWillUnmount(){
  this.unListen()
  }
  onOpenChange = (openKeys:any) => {
    let latestOpenKey = openKeys.find((key:any) => this.props.openKeys.indexOf(key) === -1);
    if (this.rootKeys.indexOf(latestOpenKey) === -1) {
      this.props.setLastOpenKey(openKeys)
    } else {
      this.props.setLastOpenKey([latestOpenKey])
    }
  };
  changeLocale =()=>{
    let lang =localStorage.getItem('lang')
    let newLang = lang ==='en-US'?'zh-CN':'en-US'
    this.setLocal(newLang)
  };
  setLocal=(newLang:string)=>{
    emit.emit('change_language', newLang)
    localStorage.setItem('lang',newLang)
    this.setState({
      lang:newLang
    })
  }
  render() {
    const {lang} = this.state
    const { location,openKeys,selectKey } = this.props
    const pathSnippets =location?location.pathname.split('/').filter(i => i):[]
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key='home'>
      <Link to='/'>Home</Link>
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItems);

  const getMenu =(arr:RoutersBase[]):JSX.Element[]=>{
  return  arr.map((val:RoutersBase,key:number)=>{
     return val.children ? <SubMenu
      key={val.key}
      title={
        <span>
        {val.icon?<Icon type={val.icon}/>:'' }
        {val.title}
        </span>
      }
    >
     {getMenu(val.children)}
    </SubMenu>:
     <Menu.Item key={val.key}><Link to={val.url}> {val.icon?<Icon type={val.icon}/>:'' } {val.title}</Link></Menu.Item>

    })
  }

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
    return (
     
  <Layout id="layout-h">
    <Header className="header" >
      <Icon
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
          style={{display:'none'}}
        />
        <div className="logo" >AMBER</div>
      <Menu
        theme="dark"
        mode="horizontal"
        
        style={{ lineHeight: '64px',float:'right' }}
      >
        <Menu.Item key="1"><Popover content={content} title="Title" trigger="click"><Icon  style={{ fontSize: '20px' }} type="question-circle" /></Popover></Menu.Item>
        <Menu.Item key="2"><Icon style={{ fontSize: '20px' }} type="bell" /></Menu.Item>
        <Menu.Item key="3"><Icon style={{ fontSize: '20px' }} type="setting" /></Menu.Item>
        <Menu.Item className="language" onClick={this.changeLocale}>{lang==='en-US'?'中文':'English'} </Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={180} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
        selectedKeys={[selectKey]}
          defaultOpenKeys={['presentation']}
          openKeys={openKeys}
          style={{ height: '100%', borderRight: 0 }}
          onOpenChange={this.onOpenChange}
        >
          {getMenu(routers)}
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>{breadcrumbItems}</Breadcrumb>
        <div className="ant-layout-content">
        <DatePicker />
          <RouteSwitch>
            <Route component={Presentation} path={`${process.env.PUBLIC_URL}/presentation`} />
            <Route component={TableList} path={`${process.env.PUBLIC_URL}/tableList`} />
            <Route component={Files} path={`${process.env.PUBLIC_URL}/files`} />
            <Route component={Charts} path={`${process.env.PUBLIC_URL}/charts`} />
            <Redirect exact path={`${process.env.PUBLIC_URL}/`} to={`${process.env.PUBLIC_URL}/presentation`} />
            <Redirect from='*' to='/404' />
          </RouteSwitch>
         </div>
        <Footer style={{ textAlign: 'center' }}>Practice ©2019 Created by Amber</Footer>
      </Layout>
    </Layout>
  </Layout>

    );
  }
}
const mapStateToProps =(state: { common:CommonReducer })=>{
  return {
    openKeys:state.common.openKeys,
    selectKey:state.common.selectKey
  }
  
}
const mapDispatchToProps = {
 
  handleClick: getNews,
  setLastOpenKey:(openKeys:string[])=>setLastOpenKeyA(openKeys),
  setSelectKey:(selectKey:string)=>setSelectKeyA(selectKey)

}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
