
import Header from './Header'
import Footer from './Footer'
import Animation from '../props/Animation'
import SmoothScroll from '../props/SmoothScroll'
import CanvasAnimation from '../props/CanvasAnimation'

function MainLayout({children}){
    window. scrollTo(0, 0)
  return (
        <>
            <Header/>
                <CanvasAnimation/>
                {children}
            <Footer/>
            <Animation/>
            <SmoothScroll/>
        </>
    )
}

export default MainLayout