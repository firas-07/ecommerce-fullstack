import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Contact from '../Pages/Contact'
import Laptop from '../Components/Previews/Laptop'
import Camera from '../Components/Previews/Camera'
import Tv from '../Components/Previews/Tv'
import Watch from '../Components/Previews/Watch'
import Joystick from '../Components/Previews/Joystick'
import Phone from '../Components/Previews/Phone'
import Headphone from '../Components/Previews/Headphone'
import Airpods from '../Components/Previews/Airpods'
import Speaker from '../Components/Previews/Speaker'
import Toaster from '../Components/Previews/Toaster'
import AdidasTshirt from '../Components/Previews/AdidasTshirt'
import AdidasShoe from '../Components/Previews/AdidasShoe'
import NikeHoodie from '../Components/Previews/NikeHoodie'
import NikeShoe from '../Components/Previews/NikeShoe'
import AdidasTrack from '../Components/Previews/AdidasTrack'
import NikeTrack from '../Components/Previews/NikeTrack'
import ReebookShoe from '../Components/Previews/ReebookShoe'
import ReebookTshirt from '../Components/Previews/ReebookTshirt'
import PumaTrack from '../Components/Previews/PumaTrack'
import PumaShoe from '../Components/Previews/PumaShoe'
function RouterPage() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/signup' element={<SignUp/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path='/laptop' element={<Laptop/>}></Route>
                    <Route path='/camera' element={<Camera/>}></Route>
                    <Route path='/tv' element={<Tv/>}></Route>
                    <Route path='/watch' element={<Watch/>}></Route>
                    <Route path='/joystick' element={<Joystick/>}></Route>
                    <Route path='/phone' element={<Phone/>}></Route>
                    <Route path='/headphone' element={<Headphone/>}></Route>
                    <Route path='/airpods' element={<Airpods/>}></Route>
                    <Route path='/speaker' element={<Speaker/>}></Route>
                    <Route path='/toaster' element={<Toaster/>}></Route>
                    <Route path='/adidas-tshirt' element={<AdidasTshirt/>}></Route>
                    <Route path='/adidas-shoe' element={<AdidasShoe/>}></Route>
                    <Route path='/nike-hoodie' element={<NikeHoodie/>}></Route>
                    <Route path='/nike-shoe' element={<NikeShoe/>}></Route>
                    <Route path='/adidas-track' element={<AdidasTrack/>}></Route>
                    <Route path='/nike-track' element={<NikeTrack/>}></Route>
                    <Route path='/reebook-shoe' element={<ReebookShoe/>}></Route>
                    <Route path='/reebook-tshirt' element={<ReebookTshirt/>}></Route>
                    <Route path='/puma-track' element={<PumaTrack/>}></Route>
                    <Route path='/puma-shoe' element={<PumaShoe/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default RouterPage