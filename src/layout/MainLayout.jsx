
import Header from './Header'
import Footer from './Footer'

function MainLayout({children}){
    window. scrollTo(0, 0)
  return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
}

export default MainLayout