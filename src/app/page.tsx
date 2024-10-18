import Image from "next/image";

// Import Links
import Link from "next/link";

// Import Images:

import qiratProfile from "../../public/qirat.linkdin.jpg";

import Header from "./header/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <main className="bg-black  text-red-200 max-sm:h-full max-sm:w-fit">
    <title>Qirat Saeed</title>

    {/* Navbar Section */}
    <Header/>

  {/* Introduction Section */}
  <div className="flex justify-between p-44 max-sm:p-24 max-sm:grid ">
        <div>
          <h1  className="text-4xl max-sm:text-3xl max-sm:text-center"><b><i>Qirat Saeed</i></b></h1>
          <p className="text-xl max-sm:text-center"> My name is <i><b>Qirat Saeed, and I'm recent passed Quarter no.1 of GIAIC</b></i>.
          <br  />
          I'm a Webdeveloper. In first Quarter learned:
          <br />
        Typescript
        <br />
        HTML
        <br />
        CSS
        <br />
        Javascript
          <br />
          </p>
        </div>
        <div className="">
        <Image src={qiratProfile} alt="image" className="h-[400px] w-[400px] max-sm:h-[200px] max-sm:w-[200px]"/>
        </div>
        </div>
    {/* Footer Section */}
    <Footer/>
  </main>
  );
}
