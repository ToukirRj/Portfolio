
const Footer = () => {
    return (
        <>
            <section className="sm:py-20 py-12">
                <div className="relative mx-auto px-6 md:max-w-full md:px-12 lg:max-w-6xl xl:px-0">
                    <h2 className="sm:text-[39px] text-[21px] text-center font-bold sm:leading-[46px] leading-[26px] text-gray-800 w-full max-w-5xl mx-auto">
                        One step to connect with me <br/>from everywhere
                    </h2>
                    <div className="mt-3 flex justify-center">
                        <a target="_blank" href="https://wa.me/8801753778070" className="group h-[65px] relative flex items-center">
                            <div className="absolute top-0 bottom-0 left-0 my-auto w-[65px] h-[65px] group-hover:left-[84%] group-hover:w-[20px] group-hover:h-[20px] rounded-[65px] bg-[#10B880] transition-all duration-[.5s]"></div>
                            <div className="relative ms-[32px] me-[5px] group-hover:me-[15px] transition-all duration-[.5s] text-[#1F2937]">WhatsApp Connect</div>
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024">
                                    <path fill="#10B880" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <footer className="sm:py-10 py-5 relative bg-white/[0.45]">
                <div className="m-auto space-y-8 px-4 text-gray-600 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className="flex sm:flex-row flex-col sm:justify-between justify-center tracking-normal text-[14px] sm:text-start text-center">
                        <span>&copy; <b> Toukir Rahman</b> 2020 - Present.</span> 
                        <span>All right reserved</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer