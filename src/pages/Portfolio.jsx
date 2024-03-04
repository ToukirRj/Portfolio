
import MainLayout from '../layout/MainLayout'
import ProjectList from '../components/ProjectList'

const portfolio = () => {
    return (
        <>
            <MainLayout>
                <div className="pt-20">
                    <ProjectList/>
                </div>
            </MainLayout>
        </>
    )
}

export default portfolio