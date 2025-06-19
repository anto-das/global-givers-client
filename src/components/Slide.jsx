import 'animate.css';

const Slide = ({image, text,title}) => {
    return (
            <div 
            className='w-full bg-center bg-cover h-[36rem]'
            style={{
                backgroundImage:`url(${image})`
            }}
            >
                <div className='bg-gray-900/70 w-full h-full flex justify-center items-center'>
                    <div className='text-center space-y-5 animate__animated animate__backInUp '>
                    <h2 className='text-3xl md:text-5xl lg:text-5xl font-bold text-white text-center'>{text}</h2>
                    <p className='text-green-400 font-bold'>{title}</p>
                    <button className='btn border-none shadow-none bg-[#29AF8A] rounded-none text-white text-lg hover:btn hover:rounded-none hover:text-white hover:bg-[#535353] hover:text-lg hover:border-none hover:shadow-none '>Donate Now</button>
                    </div>
                </div>
            </div>
    );
};

export default Slide;