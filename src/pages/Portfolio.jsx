
import MainLayout from '../layout/MainLayout'
import ProjectList from '../components/ProjectList'

const portfolio = () => {
    return (
        <>
            <MainLayout>
                <div className="pt-10">
                    <div className="bg-white/50">
                        <ProjectList/>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default portfolio