
import MainLayout from '../layout/MainLayout'
import Myself from '../components/Myself'

function About(){
  return (
    <>
        <MainLayout>
            <div className="pt-20">
                <div className="">
                    <Myself/>
                </div>
            </div>
        </MainLayout>
    </>
  )
}

export default About