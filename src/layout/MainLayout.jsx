
import Header from './Header'
import Footer from './Footer'
import Animation from '../props/Animation'
import SmoothScroll from '../props/SmoothScroll'
import CursorAnimation from '../props/CursorAnimation'

function MainLayout({children}){
    window. scrollTo(0, 0)
  return (
        <>
            <Header/>
                {children}
            <Footer/>
            <Animation/>
            <SmoothScroll/>
            <CursorAnimation/>
        </>
    )
}

export default MainLayout