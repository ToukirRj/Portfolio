
import MainLayout from '../layout/MainLayout'
import Weapons from '../components/Weapons'

function Skills(){
  return (
    <>
        <MainLayout>
            <div className="pt-20">
                <div className="animatable">
                    <Weapons/>
                </div>
            </div>
        </MainLayout>
    </>
  )
}

export default Skills