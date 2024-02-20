
import MainLayout from '../layout/MainLayout'
import Bio from '../components/Bio'
import Animation from '../props/Animation'

function Experiences(){
  return (
    <>
        <MainLayout>
            <div className="pt-10">
                <div className="bg-white/50">
                    <Bio/>
                </div>
            </div>
            <Animation/>
        </MainLayout>
    </>
  )
}

export default Experiences