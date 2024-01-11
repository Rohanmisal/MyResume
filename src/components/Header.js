
const Header = () =>{
    return(
        <div className="bg-[#E4F9F5] relative py-28">
            <img src="https://rohanmisal.github.io/Mysite/static/images/cloud.png" alt="cloud" className="absolute right-72 top-10 "/>
            <div className="block">
                <h1 className="text-cyan-400 text-[5.625rem] m-12 font-['Sacramento', 'cursive']">I'm Rohan</h1>
                <h2 className="text-[#66BFBF] font-serif text-[2.5rem] font-normal">
                a {" "} 
                    <span className="underline">pro</span>
                    grammer
                </h2>
            </div>
            <img src="https://rohanmisal.github.io/Mysite/static/images/cloud.png" alt="cloud" className="absolute left-64 bottom-80"/>
            <img src="https://rohanmisal.github.io/Mysite/static/images/mountain.png" alt="mountain-img"/>
        </div>
        
    )
}

export default Header;