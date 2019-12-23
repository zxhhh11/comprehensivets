import * as list from './list';
import * as user from './user'
import * as sagaTest from './sagatest'
import * as common from './common';
const Constants = {...list,...user,...sagaTest,...common}
export default Constants