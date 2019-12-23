import * as React from 'react';
import { Table } from 'antd';
import {getLists,sentRowListAn} from '../../../../redux/actions/index';
import {connect} from 'react-redux';
import {ListBase} from '../../../../utils/common'
import { ColumnProps } from 'antd/es/table';
import { RouteComponentProps } from 'react-router-dom';


export interface FixedColumnProps extends RouteComponentProps<any> {
  getListData:()=>any,
  lists:ListBase[],
  loading:boolean,
  sentRowList:(row:any)=>void
}
 
export interface FixedColumnState {
  
}

export interface Priorities {
  a?:string,
  b?:string,
  c?:string,
  d?:string
}

 
const statusArr = ['China', 'U.S.A', 'Germany', 'Japan'];
const colorsArr = ['#96f54d', '#fdd13f', '#f3483f', '#0296f1'];
const colorsTab = ['red', 'blue', 'yellow', 'white', 'black', 'green', 'gray'];
const priorities = ['Sustainable Infrastructure','Cross Border Connectivity','Private Capital Mobilization','None of above priorities']
const modes = ['Standalone','Co-financing','Stock financing'];
class FixedColumn extends React.Component<FixedColumnProps, FixedColumnState> {
  constructor(props: FixedColumnProps) {
    super(props);
    this.state = { fixed:''};
  }

  componentDidMount(){
    this.props.getListData()
  }
  toProjectDetail = (row:any) => {
    let {history,sentRowList} = this.props
    console.log(sentRowList)
    // history.push({ pathname: `${process.env.PUBLIC_URL}/presentation/forms`, state: row })
    history.push({ pathname: `${process.env.PUBLIC_URL}/presentation/forms`})
    sentRowList(row)
  }; 
  render() {
    const {lists,loading} = this.props
    console.log(lists)
    const columns:ColumnProps<ListBase>[] = [
      {
        title: 'Project Name',
        width: 220,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
        render: (text:any, row:any) => <u onClick={() => this.toProjectDetail(row)}>{text}</u>
      },
      {
        title: 'ID',
        width: 100,
        dataIndex: 'key',
        key: 'key',
        fixed: 'left',
        sorter: (a:any, b:any) => a.key - b.key
      },
      {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
        width: 150,
        render: (text:any) => <span style={{ color: colorsArr[text] }}>{statusArr[text]}</span>
      },
      {
        title: 'Effective Date',
        dataIndex: 'effectiveDate',
        key: 'effectiveDate',
        width: 200,
        sorter: (a:any, b:any) => a.effectiveDate - b.effectiveDate,
        render: (text:any) => <span style={{ color: '#6f0404' }}>{text}</span>
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: 300
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: 240
      },
      {
        title: 'Natural',
        dataIndex: 'natural',
        key: 'natural',
        width: 200
      },
      {
        title: 'Color',
        dataIndex: 'colors',
        key: 'colors',
        width: 300,
        render: (colors:any) => <span>{colorsTab.slice(colors).join(' ')}</span>
      },
      {
        title: 'Number',
        dataIndex: 'number',
        key: 'number',
        width: 100
      },
      {
        title: 'Support',
        dataIndex: 'support',
        key: 'support',
        width: 150,
        render:  (support:any)  => <span>{support ? 'Support' : 'Not supported'}</span>
      },
      {
        title: 'financing mode',
        dataIndex: 'mode',
        key: 'mode',
        width: 200,
        render: (mode:any) => <span>{modes[mode]}</span>
      },
      // {
      //   title: 'Thematic Priorities',
      //   dataIndex: 'priorities',
      //   key: 'priorities',
      //   width: 600,
      //   render: (pri:number)  => <span>{priorities[pri]}</span>
      //   // {
        
      //   // //   let str:string[]=[]
      //   // //   for(let [key, value] of Object.entries(priorities)){
      //   // //   str.push(value)
      //   // //   }
      //   // // return (<span>
      //   // //   {
      //   // //     str.map((val,index)=>{
      //   // //       return <span key={index}>{val}&nbsp;&nbsp;&nbsp;</span>
      //   // //     })
      //   // //   }
      //   // // </span>)  
      //   // }
      // }
    ];
 
    return (<div>
      <Table<ListBase>  
            columns={columns}
            dataSource={lists}
            loading={loading}
            pagination={{ pageSize: 15 }}
            rowClassName={(_record, index) => (index % 2 === 0 ? 'dark-color' : 'light-color')}
            scroll={{ x: 1500, y: '64vh' }} />
    </div>  );
  }
}

const mapStateToProps=(state:any)=>{
  return {
    lists:state.list.lists,
    loading:state.list.loading
  }
}
const mapDispatchToProps={
  getListData:getLists,
  sentRowList:(row:any)=>sentRowListAn(row)
}
export default connect(mapStateToProps,mapDispatchToProps)(FixedColumn);