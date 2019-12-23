import * as React from 'react';
import { connect } from 'react-redux'
import { Layout, Menu, Icon,Breadcrumb,DatePicker,Popover,Tabs,Button ,Badge,Avatar,Dropdown} from 'antd';
import { getLists,setLastOpenKeyAn, setSelectKeyAn,logoutClickAn} from '../../redux/actions/index';
import {logoutApi} from '../../redux/api/user';
import { Route, Switch as RouteSwitch, Redirect, Link } from 'react-router-dom';
import Presentation from './presentation/index'
import Files from './files';
import Charts from './charts';
import TableList from './tableList';
import {RouterProps,RoutersBase,CommonReducer} from '../../utils/common'
import routers from '../../utils/routers';
import {emit} from '../../utils/emit'
// import intl from 'react-intl-universal';
import AllSetting from '../../components/allSetting';
import Account from './account/index'

const { TabPane } = Tabs;
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
  '/charts': 'Charts',
  '/account': 'Account',
  '/account/center': 'Center',
  '/account/setting': 'Setting'
};

export interface HomeProps extends RouterProps {
  handleClick: () => any,
  setLastOpenKey:(openKey:string[])=>void,
  openKeys:string[],
  setSelectKey:(selectKey:string)=>void,
  selectKey:string,
  logoutClick:()=>void
}
export interface HomeState {
  collapsed:boolean,
  lang:string,
  drawerVisible:boolean
}


class Home extends React.Component<HomeProps,HomeState> {
  rootKeys:string[] = ['presentation', 'tableList'];
  state = {
    collapsed: false,
    lang:'en-US',
    drawerVisible: false
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
  showDrawer = () => {
    this.setState({
      drawerVisible: true,
    });
  };

  onClose = () => {
    this.setState({
      drawerVisible: false,
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
    const {lang,drawerVisible} = this.state
    const { location,openKeys,selectKey,logoutClick } = this.props
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
  const personMenu = (
    <Menu>
      <Menu.Item key="0">
      <Link to={`${process.env.PUBLIC_URL}/account/accountCenter`}><Icon type="user"></Icon>&nbsp;&nbsp;Account Center</Link>
      </Menu.Item>
      <Menu.Item key="1">
      <Link to={`${process.env.PUBLIC_URL}/account/accountSetting`}><Icon type="setting"></Icon>&nbsp;&nbsp;Account Setting</Link>
      </Menu.Item>
      {/* <Menu.Divider /> */}
      <Menu.Item key="2" onClick={logoutClick}><Icon type="logout"></Icon>&nbsp;&nbsp;Log out</Menu.Item>
    </Menu>
  );
  
  
  const content = (
  <div className="notification">
    <Tabs defaultActiveKey="2">
      <TabPane tab={<span><Icon type="message" /> Notification(4)</span>} key="1">
       <div className="notification-list">Notification</div>
       <div className="notification-list">Notification</div>
       <div className="notification-list">Notification</div>
       <div className="notification-list">Notification</div>
      </TabPane>
      <TabPane tab={<span><Icon type="notification" />Message(3) </span>}key="2">
      <div className="message-list">Message</div>
      <div className="message-list">Message</div>
      <div className="message-list">Message</div>
      </TabPane>
    </Tabs> 
    <Button.Group size='default'>
          <Button type="primary">
           Clear
          </Button>
          <Button type="primary">
          View More
          </Button>
        </Button.Group>
  </div>
  );
    return (
     
  <Layout id="layout-h">
    <Header className="header"  >
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
        <Menu.Item key="1"><div className="right-menu"><a href="https://ant.design/docs/react/introduce-cn"><Icon  style={{ fontSize: '20px' }} type="question-circle" /></a></div></Menu.Item>
        <Menu.Item key="2"><Popover  content={content}  trigger="click"><div className="right-menu"> <Badge count={5}><Icon style={{ fontSize: '20px' }} type="bell" /></Badge></div></Popover></Menu.Item>
        <Menu.Item key="3"><div className="right-menu" onClick={this.showDrawer}><Icon style={{ fontSize: '20px' }} type="setting" /></div></Menu.Item>
        <Menu.Item  key="4"><div className="right-menu language"  onClick={this.changeLocale}>{lang==='en-US'?'中文':'English'}</div> </Menu.Item>
        <Menu.Item key="5"><div className="right-menu"> <Dropdown overlay={personMenu} trigger={['click']}><Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf'}}>A</Avatar></Dropdown></div></Menu.Item>
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
          <RouteSwitch>
            <Route component={Presentation} path={`${process.env.PUBLIC_URL}/presentation`} />
            <Route component={TableList} path={`${process.env.PUBLIC_URL}/tableList`} />
            <Route component={Files} path={`${process.env.PUBLIC_URL}/files`} />
            <Route component={Charts} path={`${process.env.PUBLIC_URL}/charts`} />
            <Route component={Account} path={`${process.env.PUBLIC_URL}/account`} />
            <Redirect exact path={`${process.env.PUBLIC_URL}/`} to={`${process.env.PUBLIC_URL}/presentation`} />
            <Redirect from='*' to='/404' />
          </RouteSwitch>
          <AllSetting onCloseClick={this.onClose} drawerVisible={drawerVisible}></AllSetting>
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
 
  handleClick: getLists,
  setLastOpenKey:(openKeys:string[])=>setLastOpenKeyAn(openKeys),
  setSelectKey:(selectKey:string)=>setSelectKeyAn(selectKey),
  logoutClick:logoutClickAn

}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
