
import MainLayout from '../layout/MainLayout'
import ProjectList from '../components/ProjectList'
import Animation from '../props/Animation'

const portfolio = () => {
    return (
        <>
            <MainLayout>
                <div className="pt-10">
                    <div className="bg-white/50">
                        <ProjectList/>
                    </div>
                </div>
                <Animation/>
            </MainLayout>
        </>
    )
}

export default portfolio