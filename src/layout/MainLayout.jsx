
import Header from './Header'
import Footer from './Footer'
import Animation from '../props/Animation'

function MainLayout({children}){
    window. scrollTo(0, 0)
  return (
        <>
            <Header/>
                {children}
            <Footer/>
            <Animation/>
        </>
    )
}

export default MainLayout