import serviceData from '../datas/serviceData';

const Eyes = () => {
    return (
        <>
            <section className="sm:py-24 py-12 relative z-20">
                <div className="mx-auto px-4 sm:px-12 max-w-7xl xl:px-0">
                    <div className="text-center animatable">
                        <h2 className="xl:text-[55px] md:text-4xl sm:text-3xl text-[23px] font-bold text-[#1F2937]">My 
                            <span className="bg-gradient-to-r from-[#ff8144] to-[#10b881] inline-block text-transparent bg-clip-text ps-3 leading-[67px]">Eyes</span> to Work
                        </h2>
                        <p className="mx-auto max-w-full mt-2 text-[#1F2937] sm:w-4/6 w-full sm:text-[19px] text-[14px] font-[300] tracking-wide leading-[27px]">
                            The services I provide are up to customer satisfaction
                        </p>
                    </div>
                    <div className="sm:mt-12 mt-8">
                        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center justify-items-center">
                            {serviceData.map(service => (
                                <div key={service.id} className="relative mb-4">
                                    <div className="flex items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke={service.iconColor} strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-${service.iconPath}`} dangerouslySetInnerHTML={{ __html: service.iconStyle }}/>
                                        <div className='w-full'>
                                            <h4 className="mb-2 text-[25px] leading-[36px] font-[600] tracking-tight text-[#1F2937] sm:text-start text-center">
                                                {service.title}
                                            </h4>
                                            <div className='flex gap-2'>
                                                {service.tools.map((tool, index) => (
                                                    <span key={index} className="px-3 py-[2px] flex items-center justify-center text-[#1F2937] font-[600] text-[13px] rounded-full bg-white shadow-xl tracking-wide">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                       {/*  
                        <div className="mt-16 grid divide-x divide-y divide-gray-100 bg-[#000]/[.05] overflow-hidden rounded-3xl border border-gray-100 text-gray-600 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
                            {serviceData.map(service => (
                            <div key={service.id} className="relative transition">
                                <div className="relative space-y-8 py-12 p-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke={service.iconColor} strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-${service.iconPath}`} dangerouslySetInnerHTML={{ __html: service.iconStyle }}/>


                                    <div className="space-y-2">
                                        <h5 className="text-xl font-semibold text-gray-700 transition group-hover:text-secondary">
                                            {service.title}
                                        </h5>
                                        {/* <p className="text-gray-600 dark:text-gray-300">
                                        Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
                                        </p> 
                                    </div>
                                    <div className='flex gap-2'>
                                        {service.tools.map((tool, index) => (
                                            <span key={index} className="px-3 py-[2px] flex items-center justify-center text-[#1F2937] font-[600] text-[13px] rounded-full bg-white shadow-xl tracking-wide">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>*/}
                    </div> 
                    <div className="relative">
                        <div className="relative z-10 grid gap-3 grid-cols-6">
                            <div className="col-span-full lg:col-span-2 overflow-hidden flex relative bg-[#000]/[0.07] rounded-[20px]">
                                <div className="size-fit m-auto relative">
                                    <div className="relative flex items-center">
                                        <span className="w-fit block mx-auto text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#FC8245] to-[#12B780]">100%</span>
                                    </div>
                                    <h2 className="mt-6 text-center font-semibold text-gray-950 text-3xl">Customizable</h2>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-2 overflow-hidden flex relative bg-[#000]/[0.07] rounded-[20px]">
                                <div className="size-fit m-auto relative">
                                    <div className="relative flex items-center">
                                        <span className="w-fit block mx-auto text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#FC8245] to-[#12B780]">100%</span>

                                    </div>
                                    <div className="mt-14 text-center relative z-10 space-y-2">
                                        <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white">Faster than light</h2>
                                        <p className="dark:text-gray-300 text-gray-700">Provident fugit vero voluptate. magnam magni doloribus dolores voluptates inventore nisi.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-2 overflow-hidden flex relative bg-[#000]/[0.07] rounded-[20px]">
                                <div className="size-fit m-auto relative">
                                    <div className="relative flex items-center">
                                        <span className="w-fit block mx-auto text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#FC8245] to-[#12B780]">100%</span>

                                    </div>
                                    <div className="mt-14 text-center relative z-10 space-y-2">
                                        <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white">Faster than light</h2>
                                        <p className="dark:text-gray-300 text-gray-700">Provident fugit vero voluptate. magnam magni doloribus dolores voluptates inventore nisi.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full lg:col-span-3 overflow-hidden relative">
                                <div className="grid sm:grid-cols-2">
                                    <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                                        <div className="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                                            <svg className="size-6 m-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="none" stroke="currentColor" strokeLinejoin="round" d="M5.5 7c2 0 6.5-3 6.5-3s4.5 3 6.5 3v4.5C18.5 18 12 20 12 20s-6.5-2-6.5-8.5z"></path>
                                            </svg>
                                         </div>
                                        <div className="space-y-2">
                                            <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white">Faster than light</h2>
                                            <p className="dark:text-gray-300 text-gray-700">Provident fugit vero voluptate. Voluptates a sapiente inventore nisi.</p>
                                        </div>
                                    </div>
                                    <div className="relative mt-6 sm:mt-auto h-fit -mb-[calc(var(--card-padding)+1px)] -mr-[calc(var(--card-padding)+1px)] sm:ml-6 py-6 p-6 border rounded-tl-[calc(var(--card-border-radius)-0.5rem)] dark:bg-white/5 dark:border-white/10">
                                        <div className="absolute flex gap-1 top-2 left-3">
                                            <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                            <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                            <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-3 overflow-hidden relative">
                                <div className="h-full grid sm:grid-cols-2">
                                    <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                                         <div className="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                                            

                                         </div>
                                        <div className="space-y-2">
                                            <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white">Keep your loved ones safe</h2>
                                            <p className="dark:text-gray-300 text-gray-700">Voluptate. magnam magni doloribus dolores voluptates a sapiente inventore nisi.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Eyes;