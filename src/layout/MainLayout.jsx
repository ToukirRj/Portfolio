
import Header from './Header'
import Footer from './Footer'
import CanvasAnimation from '../props/CanvasAnimation'

// eslint-disable-next-line react/prop-types
function MainLayout({children}){
    window. scrollTo(0, 0)
  return (
        <>
            <Header/>
                <CanvasAnimation/>
                {children}
            <Footer/>
        </>
    )
}

export default MainLayout