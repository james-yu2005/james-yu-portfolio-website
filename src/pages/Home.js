import me from '../images/me.jpg';

export default function Home() {
    return (
        <div className='' style={{ fontFamily: 'Roboto, sans-serif' }}>
            <div className='flex flex-col lg:flex-row justify-center items-center mt-10 lg:mt-20 mb-10'>
                <img src={me} className='rounded-2xl w-64 h-64 lg:w-[26rem] lg:h-[26rem] border-2 border-teal-300 mb-6 lg:mb-0' alt='james-pic' />
                <div className='flex flex-col lg:ml-6 items-center lg:items-start text-center lg:text-left'>
                    <h1 className='text-4xl lg:text-7xl lg:mb-1 text-indigo-300'>Hello!</h1>
                    <h1 className='text-xl lg:text-3xl text-sky-900 mt-5'>My name is <span className='text-teal-400'>James Yu</span> and I'm a</h1>
                    <h1 className='text-xl lg:text-3xl text-sky-900'>biomedical engineer <span className='text-teal-400'>@</span> the University</h1>
                    <h1 className='text-xl lg:text-3xl text-sky-900'>of Waterloo interested in <span className='text-teal-400'>software</span></h1>
                    <h1 className='text-xl lg:text-3xl text-sky-900'>development!</h1>
                </div>
            </div>
        </div>
    );
}
