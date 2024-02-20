
import MainLayout from '../layout/MainLayout'
import Myself from '../components/Myself'

function About(){
  return (
    <>
        <MainLayout>
            <div className="pt-10">
                <div className="bg-white/50 animatable">
                    <Myself/>
                </div>
            </div>
        </MainLayout>
    </>
  )
}

export default About