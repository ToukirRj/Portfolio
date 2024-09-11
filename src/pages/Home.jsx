
import MainLayout from '../layout/MainLayout';
import Splash from '../components/Splash';
import Myself from '../components/Myself';
import Eyes from '../components/Eyes';
import Weapons from '../components/Weapons';
import Steps from '../components/Steps';
import Bio from '../components/Bio';

const Home = () => {
  return (
    <MainLayout>
      <Splash/>
      <Myself/>
      <Eyes/>
      <Weapons/>
      <Bio/>
      <Steps/>
      {/* <Satisfy/> */}
    </MainLayout>
  );
};

export default Home;
