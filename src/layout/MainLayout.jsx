
import Header from './Header'
import Footer from './Footer'
import Animation from '../props/Animation'
import SmoothScroll from '../props/SmoothScroll'

function MainLayout({children}){
    window. scrollTo(0, 0)
  return (
        <>
            <Header/>
                {children}
            <Footer/>
            <Animation/>
            <SmoothScroll/>
        </>
    )
}

export default MainLayout