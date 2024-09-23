
import { useRef, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Submit = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        target: '',
        budget: '',
        message: '',
    });

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_rek8807', 'template_kce8igc', form.current, 'H9VafiuGm33YPczrX')
        .then((result) => {
            console.log(result.text);
            toast.success('Form Submitted Successfully!');
            setFormData({
            full_name: '',
            email: '',
            phone: '',
            target: '',
            budget: '',
            message: '',
            });
        })
        .catch((error) => {
            console.log(error.text);
            toast.error('Unable to send! Please try again.');
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


  return (
    <>
        <section className="relative w-full pt-20 pb-3 flex items-center justify-center">
            <div className="h-[80vh] overflow-y-auto w-full">
                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition: Zoom
                />
                <div className="flex items-center justify-center">
                    <h4 className="bg-[#ff8144]/[0.35] text-[#1F2937] text-[12px] font-[500] uppercase tracking-wider px-4 py-1 rounded-full table md:mx-0 mx-auto"> Let&apos;s start to build</h4>
                </div>
                <h1 className='my-[3px] text-[31px] font-[700] text-[#1F2937] text-center'>Get In Connect</h1>
                <p className='mb-5 text-[13px] font-[500] text-[#1F2937] text-center tracking-wide opacity-60'>Please tell me about your require & submit now</p>
                <form ref={form} onSubmit={sendEmail} className="w-full">
                    <div className="grid grid-cols-1 gap-3">
                        <div className="w-full"> 
                            <label className="block text-[13px] font-[500] text-[#1F2937]/[0.75] tracking-wider">Full Name
                                <span className='text-red-500 ms-1'>*</span>
                            </label> 
                            <input 
                                placeholder="Type Full Name" 
                                type="text" 
                                className="block w-full px-3 py-3 border-2 border-[#1F2937]/[0.15] rounded-[10px] appearance-none text-[#1F2937] text-[13px] tracking-wider placeholder-white/20 bg-white focus:border-[#13B780] focus:outline-none" 
                                id="full_name" 
                                name="full_name" 
                                autoComplete="given-name" 
                                value={formData.full_name}
                                onChange={handleChange}
                                required
                            /> 
                        </div>
                        <div className="w-full"> 
                            <label className="block text-[13px] font-[500] text-[#1F2937]/[0.75] tracking-wider">Email Address
                                <span className='text-red-500 ms-1'>*</span>
                            </label> 
                            <input 
                                placeholder="Type Email Address" 
                                type="text" 
                                className="block w-full px-3 py-3 border-2 border-[#1F2937]/[0.15] rounded-[10px] appearance-none text-[#1F2937] text-[13px] tracking-wider placeholder-white/20 bg-white focus:border-[#13B780] focus:outline-none" 
                                id="email" 
                                name="email" 
                                autoComplete="given-email" 
                                value={formData.email}
                                onChange={handleChange}
                                required
                            /> 
                        </div>
                        <div className="w-full"> 
                            <label className="block text-[13px] font-[500] text-[#1F2937]/[0.75] tracking-wider">Phone Number</label> 
                            <input 
                                placeholder="Type Phone Number" 
                                type="text" 
                                className="block w-full px-3 py-3 border-2 border-[#1F2937]/[0.15] rounded-[10px] appearance-none text-[#1F2937] text-[13px] tracking-wider placeholder-white/20 bg-white focus:border-[#13B780] focus:outline-none" 
                                id="phone" 
                                name="phone" 
                                autoComplete="given-phone" 
                                value={formData.phone}
                                onChange={handleChange}
                            /> 
                        </div>
                        <div className="w-full"> 
                            <label className="block text-[13px] font-[500] text-[#1F2937]/[0.75] tracking-wider">Project Details
                                <span className='text-red-500 ms-1'>*</span>
                            </label> 
                            <textarea 
                                placeholder="Type Your Message" 
                                type="text" 
                                rows={4} 
                                className="block w-full px-3 py-3 border-2 border-[#1F2937]/[0.15] rounded-[10px] appearance-none text-[#1F2937] text-[13px] tracking-wider placeholder-white/20 bg-white focus:border-[#13B780] focus:outline-none" 
                                id="message" 
                                name="message" 
                                autoComplete="given-message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="w-full"> 
                            <label className="block text-[13px] font-[500] text-[#1F2937]/[0.75] tracking-wider">Target Time-frame</label> 
                            <input 
                                placeholder="Type Phone Number" 
                                type="text" 
                                className="block w-full px-3 py-3 border-2 border-[#1F2937]/[0.15] rounded-[10px] appearance-none text-[#1F2937] text-[13px] tracking-wider placeholder-white/20 bg-white focus:border-[#13B780] focus:outline-none" 
                                id="target" 
                                name="target" 
                                autoComplete="given-target" 
                                value={formData.target}
                                onChange={handleChange}
                            /> 
                        </div>
                        <div className="w-full"> 
                            <label className="block text-[13px] font-[500] text-[#1F2937]/[0.75] tracking-wider">Budget Frame</label> 
                            <input 
                                placeholder="Type Phone Number" 
                                type="text" 
                                className="block w-full px-3 py-3 border-2 border-[#1F2937]/[0.15] rounded-[10px] appearance-none text-[#1F2937] font-[500] text-[13px] tracking-wider placeholder-white/20 bg-white focus:border-[#13B780] focus:outline-none" 
                                id="budget" 
                                name="budget" 
                                autoComplete="given-budget" 
                                value={formData.budget}
                                onChange={handleChange}
                            /> 
                        </div>
                        <div className="mt-3 w-full flex justify-center">
                            <button type='submit' value="Send" className="group h-[46px] w-auto relative overflow-hidden z-10 flex items-center rounded-full ps-4 pe-[12px] bg-[#20bd62] hover:bg-[#299c59] ease-in-out duration-500">
                                <span className="w-[38px] h-[38px] absolute -z-[1] left-[5px] bg-[#2b6e58] group-hover:bg-[#235847] rounded-full btn-left ease-in-out duration-500"></span>
                                <span className="text-[#fff] text-[14px] font-[400] tracking-[0.5px]">Submit Now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" className='relative ms-[12px]'>
                                    <path fill="#fff" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"/>
                                    <path fill="#fff" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default Submit