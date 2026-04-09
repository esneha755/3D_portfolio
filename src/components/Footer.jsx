import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2026 <strong>Esneha</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            link.link.startsWith('/') ? (
              <Link key={link.name} to={link.link}>
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-6 h-6 object-contain'
                />
              </Link>
            ) : (
              <a key={link.name} href={link.link} target='_blank' rel='noopener noreferrer'>
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-6 h-6 object-contain'
                />
              </a>
            )
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;