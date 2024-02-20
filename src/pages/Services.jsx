
import MainLayout from '../layout/MainLayout'
import Eyes from '../components/Eyes'
import Animation from '../props/Animation'

function Services(){
  return (
    <>
        <MainLayout>
            <div className="pt-10">
                <Eyes/>
            </div>
            <Animation/>
        </MainLayout>
    </>
  )
}

export default Services