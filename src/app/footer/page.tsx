import Image from "next/image";
import Link from "next/link";

import Linkedin from "../../../public/white-logo-linkedin.png"
import GitHub from "../../../public/whiteGithub.png";
export default function Footer(){
    return(
      <footer>
        <div className="flex justify-between bg-zinc-900 w-full p-5 text-red-200 max-sm:w-fit max-sm:gap-4 ">
          

          {/* Contact  Us */}
          <div>
            <h1 className="text-3xl font-serif text-center underline p-5 max-sm:text-xl max-sm:text-center max-sm:underline max-sm:p-5">Contact Us</h1>
            <p className="max-sm:text-xs"><strong> Email:</strong> saeedqirat43@gmail.com</p>
            <p className="max-sm:text-xs"><strong> Phone Number:</strong> 03002432507</p>
          </div>

          {/* Quick Links */}
          <div>
          <h1 className="text-3xl font-serif text-center underline max-sm:text-xl max-sm:text-center max-sm:underline max-sm:p-5">Quick Links</h1>
          <ul className="text-center">
          <Link href={"/"} className="hover:underline"><li>Home</li></Link>
          <Link href={"/"} className="hover:underline"><li>About Us</li></Link>
          <Link href={"/"} className="hover:underline"><li>Contact Us</li></Link>
        </ul>
          </div>
          {/* Followed Us */}
          <div>
          <h1 className="text-3xl font-serif p-3 text-center underline max-sm:text-xl max-sm:text-center max-sm:underline max-sm:p-5">Follow Us</h1>
          <div className="image flex justify-center gap-4 ">
          <a href="https://www.linkedin.com/in/qirat-saeed-8048662b7/">
      <Image src={Linkedin} alt={"Linkedin-Logo"} height={40} width={50} className="hover:cursor-pointer max-sm:h-[20px] w-[25px]" />
      </a> 
      <a href="https://github.com/Qiratsumra">
      <Image src={GitHub} alt={'GitHub-Logo'} height={40} width={50} className="hover:cursor-pointer max-sm:h-[20px] w-[25px]"/>
      </a>
      </div>
          </div>
          </div>
      </footer>
    )
}
