import * as article from './article';
import * as user from './user'
import * as sagaTest from './sagatest'
import * as common from './common';
const Constants = {...article,...user,...sagaTest,...common}
export default Constants