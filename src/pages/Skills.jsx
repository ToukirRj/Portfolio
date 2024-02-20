
import MainLayout from '../layout/MainLayout'
import Weapons from '../components/Weapons'
import Animation from '../props/Animation'

function Skills(){
  return (
    <>
        <MainLayout>
            <div className="pt-10">
                <div className="bg-white/50">
                    <Weapons/>
                </div>
            </div>
            <Animation/>
        </MainLayout>
    </>
  )
}

export default Skills