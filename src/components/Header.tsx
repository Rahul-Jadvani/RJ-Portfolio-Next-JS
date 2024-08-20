import Link from "next/link"
import Nav from "./MdNav"
import Buttonui from "./ui/buttonui"
import SmNav from './SmNav';
import { ClassValue } from 'clsx';

const Header = () => {
  return (
      <header className="py-8 xl:py-12">
          <div className="container mx-auto flex justify-between items-center">
              <Link href='/'>
                  <h1 className="text-2xl font-semibold">
                      Rahul Jadvani <span className="text-accent-hover">47</span>
                </h1>
              </Link>

              <div className="hidden md:flex items-center gap-8">
                <Nav/>   
                  <Link href='/contact'>
                    <Buttonui title="Hire Me"></Buttonui>
                  </Link> 
              </div>

              <div className="md:hidden">
                  <SmNav></SmNav>
              </div>
          </div>
    </header>
  )
}

export default Header