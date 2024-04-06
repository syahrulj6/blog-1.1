import Link from 'next/link';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';

const Footer = () => {
  return (
    <div className="w-full px-4 md:px-24 flex md:flex-row flex-col justify-between py-7 gap-4 md:gap-12 items-start bg-slate-800">
      <div className="md:w-[40%] flex flex-col gap-3">
        <h2 className="text-md font-semibold text-white">Jaydev</h2>
        <p className="text-xs font-extralight text-white/80">
          I'm Syahrul Jay, a passionate full-stack developer with a knack for crafting robust and user-friendly web applications. I've honed my skills in both front-end and back-end development, allowing me to tackle projects from
          conception to deployment with ease.
        </p>
      </div>
      <div className="md:w-[60%] flex md:flex-row flex-col gap-2 w-full">
        <div className="md:w-[40%] flex flex-col gap-3">
          <h2 className="text-md font-semibold text-white">Get to know me</h2>
          <div className="flex gap-2 items-center">
            <Link href={'https://www.instagram.com/codewithjay_/'} target="blank">
              <BsInstagram className="text-xl text-white hover:text-primary transition-colors" />
            </Link>
            <Link href={'https://www.linkedin.com/in/syahrul-jaylani-312377280/'} target="blank">
              <BsLinkedin className="text-xl text-white hover:text-primary transition-colors" />
            </Link>
            <Link href={'https://github.com/syahrulj6'} target="blank">
              <BsGithub className="text-xl text-white hover:text-primary transition-colors" />
            </Link>
            <Link href={'syahruljayportfolio.vercel.app'} target="blank">
              <TfiWorld className="text-xl text-white hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>

        <div className="flex md:w-[60%] flex-col gap-3 ">
          <h2 className="text-md font-semibold text-white ">Get in touch with me</h2>
          <form action="" className="">
            <input type="text" placeholder="Send me a letter" className="w-[70%] bg-white text-black py-3 px-2 " />
            <button className="py-3 px-2 w-[30%] bg-black hover:bg-primary transition-colors text-white">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
