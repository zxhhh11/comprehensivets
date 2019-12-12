
import {RoutersBase} from './common'

const routers:RoutersBase[] = [
  {
    key: 'presentation',
    icon: 'home',
    title: 'Presentation',
    url: '',
    children: [
      {
        key: 'dashboard',
        url: '/presentation/dashboard',
        icon: null,
        title: 'Analysis',
        children: null
      },
      {
        key: 'lists',
        url: '/presentation/lists',
        icon: null,
        title: 'Lists',
        children: null
      },
      {
        key: 'forms',
        url: '/presentation/forms',
        icon: null,
        title: 'Forms',
        children: null
      }
    ]
  },
  {
    key: 'tableList',
    icon: 'table',
    title: 'Table List',
    url: '',
    children: [
      {
        key: 'fixedColumn',
        url: '/tableList/fixedColumn',
        title: 'Fixed Column',
        icon: null,
        children: null
      },
      {
        key: 'headerGroup',
        url: '/tableList/headerGroup',
        title: 'HeaderGroup',
        icon: null,
        children: null
      },
      {
        key: 'editable',
        url: '/tableList/editable',
        icon: null,
        title: 'Editable',
        children: null
      }
    ]
  },
  {
    key: 'files',
    icon: 'profile',
    title: 'Files',
    url: '/files',
    children: null
  },
  {
    key: 'charts',
    icon: 'area-chart',
    title: 'Charts',
    url: '/charts',
    children: null
  }
 
  
];

export { routers as default };