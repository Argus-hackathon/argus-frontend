// @material-ui/icons
import {BarChart, CloudUpload} from '@material-ui/icons'
import Statistics from './views/Statistics/Statistics'
import Upload from './views/Upload/Upload'

var dashRoutes = [
    {
        path: '/upload',
        name: 'Загрузка видео',
        rtlName: '',
        icon: CloudUpload,
        component: Upload,
        layout: '/admin'
    },
    {
        path: '/statistics',
        name: 'Статистика',
        rtlName: '',
        icon: BarChart,
        component: Statistics,
        layout: '/admin'
    }
]
export default dashRoutes
