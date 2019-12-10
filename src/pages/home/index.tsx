import * as React from 'react';
import { connect } from 'react-redux'
import { Layout, Menu, Icon,Breadcrumb,Button } from 'antd';
import TableList from '../../components/TableList';
import { getNews } from '../../redux/actions/index';
import NewItems from '../../components/NewsItem';
import Counter from '../../components/sagaPractive';
import { Route, Switch as RouteSwitch, Redirect, withRouter, Link } from 'react-router-dom';
import Dashboard from './dashboard';
import Files from './files';
import Forms from './forms';
import Lists from './lists';
import Charts from './charts';


const { SubMenu } = Menu;
const { Header, Sider,Footer } = Layout;


interface IProps {
  handleClick: () => any
}
class Home extends React.Component<IProps> {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
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
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                subnav 1
              </span>
            }
          >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
                subnav 2
              </span>
            }
          >
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="notification" />
                subnav 3
              </span>
            }
          >
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="ant-layout-content">
            {/* <Button type="primary" onClick={this.props.handleClick}>Test Saga</Button>
            <h3>title 这里是主页面</h3>
            <TableList></TableList>
            <NewItems></NewItems>
            <Counter></Counter> */}

          <RouteSwitch>
            <Route component={Dashboard} path={`${process.env.PUBLIC_URL}/dashboard`} />
            <Route component={Lists} path={`${process.env.PUBLIC_URL}/lists`} />
            <Route component={Forms} path={`${process.env.PUBLIC_URL}/forms`} />
            <Route component={Files} path={`${process.env.PUBLIC_URL}/files`} />
            <Route component={Charts} path={`${process.env.PUBLIC_URL}/charts`} />
            <Redirect exact path={`${process.env.PUBLIC_URL}/`} to={`${process.env.PUBLIC_URL}/dashboard`} />
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
const mapDispatchToProps = {
 
  handleClick: getNews

}
export default connect(null,mapDispatchToProps)(Home)
