import { useEffect, useState } from 'react';
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import axios from './utils/Axios.jsx';
import Header from './partials/Header.jsx';
import HorizontalCards from './partials/HorizontalCards.jsx';
import Dropdown from './partials/Dropdown.jsx';
import Loading from './Loading.jsx'; 

export const Home = () => {
    const [wallpaper, setWallpaper] = useState(null);
    const [trending, setTrending] = useState(null);
    const [category, setCategory] = useState("all");

    const GetWallpaper = async () => {
        try {
            const response = await axios.get(`/trending/all/day`, { headers: { 'Cache-Control': 'no-store' } });
            const data = response.data;

            if (data?.results?.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.results.length);
                setWallpaper(data.results[randomIndex]);
            } else {
                setWallpaper(null);
            }
        } catch (error) {
            console.error("Error fetching wallpaper:", error);
            setWallpaper(null);
        }
    };

    const GetTrending = async () => {
        try {
            const response = await axios.get(`/trending/${category}/day`, { headers: { 'Cache-Control': 'no-store' } });
            const data = response.data;

            if (data?.results?.length > 0) {
                setTrending(data.results);
            } else {
                setTrending(null);
            }
        } catch (error) {
            console.error("Error fetching trending:", error);
            setTrending(null);
        }
    };

    useEffect(() => {
        !wallpaper && GetWallpaper();
        GetTrending();
    }, [category]);

    return wallpaper && trending ? (
        <>
            <Sidenav />
            <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
                <Topnav />
                <Header data={wallpaper} />
                <div className="p-5 flex justify-between">
                    <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
                    <Dropdown title="Filter" options={["tv", "movie", "all"]} func={(e) => { setCategory(e.target.value); }} />
                </div>
                <HorizontalCards data={trending} />
            </div>


        </>

    ) : (
        <Loading />
    );
};
