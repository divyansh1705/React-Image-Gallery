//  Another component
// BrowserRouter pure app route mai react route enable kar deta hai (Joh bhi component uske andar wrap hoga )
import {Routes , Route} from 'react-router-dom'
import MainGallery from '../MainGallery';
import BigImage from '../assets/BigImage';
function CustomRoutes(){
    return (
        <Routes>
            <Route path='/' element={<MainGallery />} />
            

            
            <Route path='/images/:id' element={<BigImage />} />

        </Routes>
    )
}
export default CustomRoutes;