
import MainLayout from '../layout/MainLayout'
import Myself from '../components/Myself'

function About(){
  return (
    <>
      <MainLayout>
        <div className="pt-20">
          <Myself/>
        </div>
      </MainLayout>
    </>
  )
}

export default About