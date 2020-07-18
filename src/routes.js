// @material-ui/icons
import {BarChart, CloudUpload} from '@material-ui/icons'
import Statistics from './views/Statistics/Statistics'
import Upload from './views/Upload/Upload'
import Station from './views/Station/Station';

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
    },
    {
        path: '/stations/:id',
        rtlName: '',
        component: Station,
        layout: '/admin',
        header: 'Статистика участка'
    }
]
export default dashRoutes
