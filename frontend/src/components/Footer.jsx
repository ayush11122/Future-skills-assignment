import {
  abstractLinks,
  communityLinks,
  companyLinks,
  resourcesLinks,
} from "../constants";
import FooterLink from "./FooterLink";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 justify-between md:flex">
      <div className="text-center md:text-left md:flex justify-evenly flex-grow md:space-y-0 space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Abstract</h4>
          <ul>
            {abstractLinks.map((value, index) => (
              <FooterLink key={index} {...value} />
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul>
            {resourcesLinks.map((value, index) => (
              <FooterLink key={index} {...value} />
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Community</h4>
          <ul>
            {communityLinks.map((value, index) => (
              <FooterLink key={index} {...value} />
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul>
            {companyLinks.map((value, index) => (
              <FooterLink key={index} {...value} />
            ))}
          </ul>
          <h4 className="font-semibold mt-4">Contact us</h4>
          <p className="hover:underline text-sm text-gray-300 mb-6">
            info@abstract.com
          </p>
        </div>
      </div>
      <div className="md:mt-[120px] md:w-1/4 text-sm px-4 text-center md:text-left">
        <Logo className='left-[50%] md:left-0 md:translate-x-0 -translate-x-1/2'/>
        <p className="mt-3">&copy; Copyright 2022</p>
        <p className="text-gray-300">
          Abstract Studio Design, Inc. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
