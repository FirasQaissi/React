import { DarkThemeToggle, Navbar, Button } from "flowbite-react";
import { SiAccenture } from "react-icons/si";
import First from "./Title1";
import { paragraph } from "./paragraph";
import Par from "./Par";


function App() {
  return (
    <><Navbar fluid rounded>
      <DarkThemeToggle />
      <Navbar.Brand href="https://Google.com">

        <SiAccenture className="w-7 h-8" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Coding Center</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>


      {paragraph.map((par, i) => {
        return (
          <div key={i}
            className="flex flex-col bg-center text-center gap-10 w-75 h-50  border-8"
          >

            <First text={par.title} color={par.titleColor} />
            <Par color={par.paragraphColor} />
          </div>
        );
      })}

      /</>


  );
}



export default App;
