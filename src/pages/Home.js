import me from '../images/me.jpg'


export default function home(){
    
    return(
        <div className=''style={{ fontFamily: 'Roboto, sans-serif' }}>
            <div className='flex flex-row justify-center mt-20 mb-10'>
                <img src={me} className='rounded-2xl w-[30rem] h-[30rem] border-2 border-teal-300' alt='james-pic'/>
                <div className='flex flex-col ml-10'>
                    <h1 className='text-7xl text-indigo-300'>Hello!</h1>
                    <h1 className='text-3xl text-sky-900 mt-5'>My name is <span className='text-teal-400'>James Yu</span> and I'm a</h1>
                    <h1 className='text-3xl text-sky-900'>biomedical engineer <span className='text-teal-400'>@</span> the University</h1>
                    <h1 className='text-3xl text-sky-900'>of Waterloo interested in <span className='text-teal-400'>software</span> </h1>
                    <h1 className='text-3xl text-sky-900'>development!</h1>
                </div>
            </div>
        </div>
    )
}