
import MainLayout from '../layout/MainLayout'
import Splash from '../components/Splash'
import Myself from '../components/Myself'
import Eyes from '../components/Eyes'
import Weapons from '../components/Weapons'
import Steps from '../components/Steps'
import Bio from '../components/Bio'
import Satisfy from '../components/Satisfy'
import Animation from '../props/Animation'


function Home(){
  return (
    <>
        <MainLayout>
            <Splash/>
            <Myself/>
            <Eyes/>
            <Weapons/>
            <Steps/>
            <Bio/>
            <Satisfy/>
            <Animation/>
        </MainLayout>
    </>
  )
}

export default Home