import * as React from 'react';
import { connect } from 'react-redux'
import { Layout, Menu, Icon,Breadcrumb } from 'antd';
import { getNews,setLastOpenKeyA } from '../../redux/actions/index';
import { Route, Switch as RouteSwitch, Redirect, withRouter, Link } from 'react-router-dom';
import Presentation from './presentation/index'
import Files from './files';
import Charts from './charts';
import TableList from './tableList';
import {RouterProps} from '../../utils/common'

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
  // setLastOpenKey:(openKey:string[])=>void,
  // openKeys:string[],
}
export interface HomeState {
  openKeys:string[],
  collapsed:boolean
}


class Home extends React.Component<HomeProps,HomeState> {
  rootSubmenuKeys:string[] = ['sub1', 'sub2'];

  state = {
    collapsed: false,
    openKeys: ['sub1'],
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount(){
    
  }
  onOpenChange = (openKeys:any) => {
    console.log(openKeys)
    const latestOpenKey = openKeys.find((key:any) => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      console.log(openKeys)
      // this.props.setLastOpenKey(openKeys)
      this.setState({
        openKeys: openKeys,
      });
    } else {
      // this.props.setLastOpenKey([latestOpenKey])
   
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };
  render() {
    const {openKeys} = this.state
    const { location } = this.props
    console.log(location)
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
        defaultSelectedKeys={[]}
        style={{ lineHeight: '64px',float:'right' }}
      >
        <Menu.Item key="1"><Icon  style={{ fontSize: '20px' }} type="question-circle" /></Menu.Item>
        <Menu.Item key="2"><Icon style={{ fontSize: '20px' }} type="bell" /></Menu.Item>
        <Menu.Item key="3"><Icon style={{ fontSize: '20px' }} type="setting" /></Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={180} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          openKeys={openKeys}
          style={{ height: '100%', borderRight: 0 }}
          onOpenChange={this.onOpenChange}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
              <Icon type="home" />
              Presentation
              </span>
            }
          >
            <Menu.Item key="1"><Link to={`${process.env.PUBLIC_URL}/presentation/dashboard`}>Dashboard</Link></Menu.Item>
            <Menu.Item key="2"><Link to={`${process.env.PUBLIC_URL}/presentation/lists`}>Lists</Link></Menu.Item>
            <Menu.Item key="3"><Link to={`${process.env.PUBLIC_URL}/presentation/forms`}>Forms</Link></Menu.Item>
           
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="table" />
               Table List
              </span>
            }
          >
            <Menu.Item key="5"><Link to={`${process.env.PUBLIC_URL}/tableList/fixedColumn`}>Fixed Column</Link></Menu.Item>
            <Menu.Item key="6"><Link to={`${process.env.PUBLIC_URL}/tableList/headerGroup`}>Header Group</Link></Menu.Item>
            <Menu.Item key="7"><Link to={`${process.env.PUBLIC_URL}/tableList/editable`}>Editable</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="4"><Link to={`${process.env.PUBLIC_URL}/files`}><Icon type="profile" />Files</Link></Menu.Item>
          <Menu.Item key="9"> <Link to={`${process.env.PUBLIC_URL}/charts`}><Icon type="area-chart" />Charts</Link></Menu.Item>
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
const mapStateToProps =(state: { common: { openKeys: any; }; })=>{
  return {
    // openKeys:state.common.openKeys
  }
  
}
const mapDispatchToProps = {
 
  handleClick: getNews,
  // setLastOpenKey:(openKeys:string[])=>setLastOpenKeyA(openKeys),

}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
