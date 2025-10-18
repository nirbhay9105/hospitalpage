import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from 'react-icons/bs';
const SocialsDiv = () => {
  return (
    <div className="flex gap-3 my-3 text-2xl ml-1">
      <a target="_blank" href="www.linkedin.com/in/nirbhay-singh-7b6ba0252/">
        <BsLinkedin />
      </a>
      <a target="_blank" href="https://github.com/nirbhay9105">
        <BsGithub />
      </a>
      <a target="_blank" href="https://www.facebook.com/Nirbhaysiddhu/">
        <BsFacebook />
      </a>
      <a target="_blank" href="https://www.instagram.com/nirbhay_siddhu_up21/">
        <BsInstagram />
      </a>
      <a target="_blank" href="https://twitter.com/nirbhaysingh122">
        <BsTwitter />
      </a>
    </div>
  );
};

export default SocialsDiv;
