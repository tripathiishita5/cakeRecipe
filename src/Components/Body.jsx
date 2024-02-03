import { Link } from "react-router-dom";

const Body = () => {
    return (
        <div className="w-full h-screen bg-cover bg-center" style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1546393009-ef37dc6dfd35?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}>
            <div className="h-auto absolute top-[50%] left-[5%] flex flex-col items-center justify-center z-10">
            <h1 className="text-white text-6xl font-bold mb-2 italic">Cake . Bake</h1>
                <p className="text-red-400 text-2xl font-semibold py-5 px-[18vw] text-center">Indulge in Sweet Delights: Elevate Every Occasion with Our Irresistible Cake Creations!</p>
                <Link to={"/cards"}>
                    <button className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                        <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    );
};


export default Body;