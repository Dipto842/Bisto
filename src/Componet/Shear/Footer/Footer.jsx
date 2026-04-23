import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import '../../GoogleFont/Font.css'
const Footer = () => {
    return (
        <div className="font1 w-full mt-10">
            <div className="flex w-full justify-center ">

<div className="bg-[#1F2937] text-white w-full h-[200px] p-10 space-y-1">
    <h1 className="font-bold text-[20px]">CONTACT US</h1>
    <p className="font-normal text-[17px]">123 ABS Street, Uni 21, Bangladesh</p>
    <p className="font-normal text-[17px]">+8801791-620986</p>
    <p className="font-normal text-[17px]">Mon - Fri: 08:00 - 22:00</p>
    <p className="font-normal text-[17px]">Sat - Sun: 10:00 - 23:00</p>
</div>

<div className="bg-[#111827] text-white w-full h-[200px] p-10 space-y-3">
    <h1 className="font-bold text-[20px]">Follow US</h1>
    <p className="font-normal text-[17px]">Join us on social media</p>
    <div className="flex gap-3">

<div><FaFacebookF /></div>
<div><FaInstagram /></div>
<div><FaTwitter /></div>
    </div>
</div>


            </div>

            <div className="bg-black h-10 text-center pt-2">
                <h1>Copyright © CulinaryCloud. All rights reserved.</h1>
            </div>
        </div>
    );
};

export default Footer;