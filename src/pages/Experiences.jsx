
import MainLayout from '../layout/MainLayout'
import Bio from '../components/Bio'

function Experiences(){
  return (
    <>
        <MainLayout>
            <div className="pt-20">
                <div className="animatable">
                    <Bio/>
                </div>
            </div>
        </MainLayout>
    </>
  )
}

export default Experiences