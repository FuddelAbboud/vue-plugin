import List from '@/components/expertInfoList'
import Details from '@/components/expertInfoDetails'

export default [
	{
		path: '/',
		name: 'experts.list',
		component: List,
	},

  {
    path: '/:id',
    name: 'experts.details',
    component: Details,
  },  
]
