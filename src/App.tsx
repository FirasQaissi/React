import { DarkThemeToggle, Navbar, Button } from "flowbite-react";
import { SiAccenture } from "react-icons/si";
import F1 from "./CardsProject/TheT";
import { FaPhoneAlt } from "react-icons/fa";
import UserFun from "./CardsProject/DataUser";
import F2, { TheBackEndImgs } from "./CardsProject/PicData";
import { FrontendImgs } from "./CardsProject/PicData";
import { FullStackImgs } from "./CardsProject/PicData";
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { Footer } from "flowbite-react";
import { Progress } from "flowbite-react";
import { Badge, Tooltip } from "flowbite-react";
import  "./index.css";

function App() {
  return (
    <><Navbar fluid rounded>
      <DarkThemeToggle />
      <Navbar.Brand href="https://Google.com">

        <SiAccenture className="w-7 h-8" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Coding Center</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-4">


        <form className="flex items-center max-w-sm mx-auto">
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
              </svg>
            </div>
            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
          </div>
          <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>

        <Button >SIGN-IN</Button>
        <Button >SIGN-UP</Button>
        <Navbar.Toggle />
      </div>

      <div className="font-mono text-7xl text-gray-900 dark:text-white  ">
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#" active>About</Navbar.Link>
          <Navbar.Link href="#" active>Services</Navbar.Link>
          <Navbar.Link href="#" active>Pricing</Navbar.Link>
          <Navbar.Link href="#" active>Contact</Navbar.Link>
        </Navbar.Collapse>
      </div>

    </Navbar>
      <div className="m-auto text-center mt-2 mb-2 w-80">
        <Progress
          className=" "
          color="blue"
          size="xl"
          progress={43}
          progressLabelPosition="inside"

          textLabel="In Progress"
          textLabelPosition="outside"
          labelProgress
          labelText
        />
        <Badge className="w-14 font-mono text-center m-auto text-lg absolute top-7  left-20" color="warning">Beta</Badge>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-10 mb-10">

        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            JavaScript
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            SQL
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Python
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            C#
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Rust
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Solidity
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Go
          </span>
        </button>

        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Ruby
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            React
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            VueJS
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            AWS
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            LAMP
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            C++
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            .NET Maui
          </span>
        </button>

        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            PHP
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Java
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Ajax
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            PHP
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Bootsrtap
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            SAss
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            TailWind
          </span>
        </button>


      </div>
      <F1 className="text-4xl text-center flex flex-col font-extrabold text-sky-500 mt-10" text="Welcome to Coding Center" />

      <div className="flex justify-center gap-8 flex-wrap mt-10 mb-10">

        {/* 🔹 כרטיס Frontend Courses */}
        <section className="w-96 flex flex-col items-center text-center bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-md">

          <Tooltip content="Courses content">
            <Button className="font-mono">Frontend Courses</Button>
          </Tooltip>
          <F2 className="w-60 h-40 object-cover rounded-lg shadow-md mt-5" src={FrontendImgs[0].src} />
          <UserFun id={2} CourseName="JavaScript" Price="249.9 ILS" Hours={285} email="Office@WSA.com" />
          <hr className="w-full my-3" />
          <div className="flex flex-row gap-4 "> <FaPhoneAlt />
            <FaTwitter />  <CiFacebook /> <FaLinkedinIn />
          </div>
          <h2>+97254-3536044</h2>
          <section className="w-96 flex flex-col items-center text-center bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-md">

            <F2 className="w-60 h-40 object-cover rounded-lg shadow-md mt-5" src={FrontendImgs[1].src} />
            <UserFun id={2} CourseName="React" Price="344.9 ILS" Hours={285} email="Office@WSA.com" />
          <hr className="w-full my-3" />
    
            <div className="flex flex-row gap-4 "> <FaPhoneAlt />
              <FaTwitter />  <CiFacebook /> <FaLinkedinIn />
            </div>

            <h2>  00972-54-3536044</h2>
          </section>
        </section>


        {/* 🔹 כרטיס Backend Courses */}
        <section className="w-96 flex flex-col items-center text-center bg-gray-100  dark:bg-gray-800 p-5 rounded-lg shadow-md">
          <Tooltip content="Courses content">
            <Button className="font-mono text-ellipsis">Backend Courses</Button>
          </Tooltip>
          <F2 className="w-60 h-40 object-cover rounded-lg shadow-md mt-5" src={TheBackEndImgs[0].src} />
          <UserFun id={2} CourseName="NodeJS" Price="159.9 ILS" Hours={185} email="Office@WSA.com" />
          <hr className="w-full my-3" />
          <div className="flex flex-row gap-4 "> <FaPhoneAlt />
            <FaTwitter />  <CiFacebook /> <FaLinkedinIn />
          </div>
          <h2>+97254-3536044</h2>
          <section className="w-96 flex flex-col items-center text-center bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-md">

            <F2 className="w-60 h-40 object-cover rounded-lg shadow-md mt-5" src={TheBackEndImgs[1].src} />
            <UserFun id={2} CourseName=".NET" Price="344.9 ILS" Hours={285} email="Office@WSA.com" />
            <hr className="w-full my-3" />
            <div className="flex flex-row gap-4 "> <FaPhoneAlt />
              <FaTwitter />  <CiFacebook /> <FaLinkedinIn />
            </div>
            <h2>+97254-3536044</h2>
          </section>
        </section>


        {/* 🔹 כרטיס Full Stack Courses */}
        <section className="w-96 flex flex-col items-center text-center bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-md">
          <Tooltip content="Courses content">
            <Button className="font-mono">FullStack Courses</Button>
          </Tooltip>
          <F2 className="w-60 h-40 object-cover rounded-lg shadow-md mt-5" src={FullStackImgs[0].src} />
          <UserFun id={2} CourseName="HTML" Price="344.9 ILS" Hours={285} email="Office@WSA.com" />
          <hr className="w-full my-3" />
          <div className="flex flex-row gap-4 "> <FaPhoneAlt />
            <FaTwitter />  <CiFacebook /> <FaLinkedinIn />
          </div>
          <h2>+97254-3536044</h2>
          <section className="w-96 flex flex-col items-center text-center bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-md">

            <F2 className="w-60 h-40 object-cover rounded-lg shadow-md mt-5" src={FullStackImgs[1].src} />
            <UserFun id={2} CourseName="CSS" Price="344.9 ILS" Hours={285} email="Office@WSA.com" />
            <hr className="w-full my-3" />
            <div className="flex flex-row gap-4 "> <FaPhoneAlt />
              <FaTwitter />  <CiFacebook /> <FaLinkedinIn />
            </div>
            <h2>+97254-3536044</h2>

          </section>
        </section>

      </div>




      <Footer container>
        <Footer.Copyright href="#" by="Qaissi Ltd" year={2025} />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>

      /</>
  );

}

export default App;
