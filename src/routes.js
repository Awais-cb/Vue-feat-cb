import Index from './components/Index'
import Videos from './components/Videos'
import Playlists from './components/Playlists'
import Channels from './components/Channels'
import WatchVideo from './components/WatchVideo'

export default[
	{path:'/',component:Index},
	{path:'/videos',component:Videos},
	{path:'/playlists',component:Playlists},
	{path:'/channels',component:Channels},
	{path:'/watch/:id',component:WatchVideo},
]