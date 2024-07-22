import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='bg-blue-950 px-[5%] py-[3%]  flex  md:flex-row md:justify-between  text-white xs:flex-col xs:space-y-5 xs:items-center '>
        <div >
            <p className='text-[34px] text-white font-bold'>Star Tech</p>
        </div>
        <div>
            <h3 className='mb-[10px] text-lg font-bold'>Useful Links</h3>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <li><a href="">Contact</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms and conditions</a></li>
            </ul>
        </div>
        <div>
            <h3 className='mb-[10px] text-lg font-bold'>Follow us on our Socials</h3>
            <ul className="flex gap-[20px] text-2xl justify-center">
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaTiktok /></li>
                <li><BsTwitterX />
</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer