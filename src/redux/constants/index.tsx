import * as article from './article';
import * as user from './user'
import * as sagaTest from './sagatest'

const Constants = {...article,...user,...sagaTest}
export default Constants