import React from "react";
const Middle = () =>{
    return (
        <div className="my-24">
            <img src="https://rohanmisal.github.io/Mysite/static/images/angela.png" alt="img"/>
            <h2 className="text-[#66BFBF] font-['Montserrat',sans-serif] font-normal pb-4">Hello</h2>
            <p className="w-[30%] m-auto leading-3">
            I am an Web Developer. I have Completed my Bachelor of Engineering in Computer Engineering and have experience in Internship Of Web Development & Designing In Oasis Infobyte. 
            </p>
            <h2 className="text-[#66BFBF] font-['Montserrat', sans-serif] font-[2.5rem] pb-3">My Skills</h2>
            <div className="w-[50%] my-24 text-left">
                <img className="w-[25%] float-left mr-7" src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" />
                <h3 className="text-[#11999E] font-['Montserrat', sans-serif]">Design & Development</h3>
                <p className="leading-3">I started learning to code when I was in college because I wanted to make my own video games. Over time, I have gaining interest in designing and developing web applications.</p>

                <img className="w-[25%] float-right ml-7" src="https://rohanmisal.github.io/Mysite/static/images/chillies.png" alt="chilli"/>
                <h3 className="text-[#11999E] font-['Montserrat', sans-serif]">Programming Languages</h3>
                I have Knowledge of following Programming Languages
                <br/>

                <table className="w-[100%] border-collapse font-[arial, sans-serif]">
                    <tbody>
                        <tr>
                            <th className="border-solid border-[1px] border-[#dddddd] text-left p-2">Skill</th>
                            <th className="border-solid border-[1px] border-[#dddddd] text-left p-2">Level of Skills</th>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Middle;