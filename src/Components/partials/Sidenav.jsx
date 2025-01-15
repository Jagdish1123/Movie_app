import 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {
    return (
        <div className="w-[20%] h-full border-r-2 border-zinc-400 p-5">
            <h1 className="text-2xl text-white font-bold">
                <i className="ri-tv-fill text-[#6556CD]"></i>
                <span className="text-2xl"> Moviee </span>
            </h1>

            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-10 mb-5">New Feeds</h1>

                <Link to="/trending" className="hover:bg-[#6556CD] rounded-lg duration-300 hover:text-white p-5">
                    <i className='ri-fire-fill'></i> Trending
                </Link>
                <Link to="/popular" className="hover:bg-[#6556CD] rounded-lg duration-300 hover:text-white p-5">
                    <i className='ri-bard-fill'></i>   Popular
                </Link>
                <Link to="/movie" className="hover:bg-[#6556CD] rounded-lg duration-300 hover:text-white p-5">
                    <i className='ri-movie-fill'></i> Movies
                </Link>
                <Link to="/tv" className="hover:bg-[#6556CD] rounded-lg duration-300 hover:text-white p-5">
                    <i className='ri-tv-fill'></i> Shows
                </Link>
                <Link to="/person" className="hover:bg-[#6556CD] rounded-lg duration-300 hover:text-white p-5">
                    <i className='ri-team-fill'></i> People
                </Link>
            </nav>

            <hr className='border-none has-[1px] bg-zinc-400'></hr>

            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-10 mb-5">Website Info</h1>

                <Link to="/*" className="hover:bg-[#6556CD] rounded-lg duration-300 hover:text-white p-5">
                    <i className='mr-2 ri-information-fill'></i> About Us
                </Link>
                
                {/* <Link to="/*" className="hover:bg-[#6556CD] rounded-lg duration-300 hover:text-white p-5">
                    <i className='mr-2 ri-phone-fill'></i>  Contact Us
                </Link> */}
           
            </nav>

        </div>
    );
};

export default Sidenav;
