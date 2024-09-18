
import { Link } from 'react-router-dom'
import socialLinksData from '../datas/socialLinksData';

const Footer = () => {
    return (
        <>
            <footer className="md:mt-12 mt-6 relative">
                <div className="md:mb-20 mb-10 relative mx-auto max-w-full lg:max-w-6xl md:px-0 px-4">
                    <div className='md:py-12 py-7 px-4 w-full backdrop-blur-lg bg-gradient-to-t from-[#FF8045]/[0.15] to-white/[0.15] shadow-[0_0_5px_0px_rgba(2,24,93,0.15)] rounded-[45px] overflow-hidden'>
                        <h2 className="md:text-[50px] text-[25px] text-center md:font-bold font-[700] md:leading-[57px] leading-[30px] text-gray-800 w-full max-w-5xl mx-auto">
                            One step to connect with me <br/>from everywhere
                        </h2>
                        <div className="md:mt-5 mt-3 flex justify-center">
                            <Link className="group h-[46px] w-auto relative overflow-hidden z-10 flex items-center rounded-full ps-6 pe-[12px] bg-[#17b057] ease-in-out duration-500" to="https://wa.me/8801753778070" target="_blank">
                                <span className="w-[38px] h-[38px] group-hover:w-[38px] group-hover:h-[38px] absolute -z-[1] left-[5px] opacity-50 group-hover:opacity-100 bg-[#1e8160] group-hover:bg-[#2b6e58] rounded-full ease-in-out duration-500 btn-left"></span>
                                <span className="text-[#fff] group-hover:text-[#fff] text-[14px] font-[400] tracking-[0.5px]">WhatsApp</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" className='relative ms-[12px] group-hover:ms-[12px] ease-in-out duration-500'>
                                    <path fill="#fff" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"/>
                                    <path fill="#fff" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"/>
                                </svg>
                            </Link>       
                        </div>
                    </div>
                </div>
                <div className='md:py-16 py-12 bg-white/[0.15] backdrop-blur-lg shadow-[0_3px_45px_0px_rgba(2,24,93,0.075)]'>
                    <div className="relative mx-auto px-4 md:max-w-full md:px-12 lg:max-w-6xl xl:px-0">
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className="md:text-[21px] text-[19px] font-semibold tracking-tight text-[#1f2937] mb-2">Get Me Connect Now on</h1>
                            <div className="flex items-center md:justify-start justify-center grid-cols-4 md:space-x-5 space-x-0 md:gap-0 gap-2 mx-auto">
                                {socialLinksData.map(link => (
                                    <Link key={link.id} to={link.url} target={link.target}
                                        className="flex items-center md:space-x-3 space-x-1 md:py-3 py-2 md:px-5 px-3 shadow backdrop-blur-lg bg-gradient-to-t from-[#FF8045]/[0.08] to-white/[0.15] rounded-xl hover:shadow-lg hover:bg-white transition-all">
                                        <div className="flex flex-col items-center mx-auto">
                                            <img className="w-8 h-8 rounded-full" src={link.imageSrc} alt={`${link.platform} logo`} />
                                            <p className="md:text-[14px] text-[12px] font-[500] text-[#1f2937] tracking-[.45px] mt-2">{link.platform}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="mt-5 mx-auto max-w-6xl w-full text-[#1f2937] tracking-normal text-[12px] font-[500] text-center">
                            &copy; <b>Toukir Rahman</b> 2024 - Present. All right reserved
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer