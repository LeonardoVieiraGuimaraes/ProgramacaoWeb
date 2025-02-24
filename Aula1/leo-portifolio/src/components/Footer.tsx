import {
  FaGithub,
  // FaDiscord,
  // FaInstagram,
  // FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/LeonardoVieiraGuimaraes/",
    icon: FaGithub,
  },
  // {
  //   name: "Discord",
  //   url: "https://discord.gg/zDyXDFC8",
  //   icon: FaDiscord,
  // },
  // {
  //   name: "Instagram",
  //   url: "https://instagram.com/yourusername",
  //   icon: FaInstagram,
  // },
  // {
  //   name: "Facebook",
  //   url: "https://facebook.com/yourusername",
  //   icon: FaFacebook,
  // },
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com/Leonard24081612",
  //   icon: FaXTwitter,
  // },
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/leonardo-vieira-guimaraes",
    icon: FaLinkedin,
  },
];

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container mx-auto flex max-w-6xl py-4 px-4 text-sm">
        <div className="flex-grow flex items-center">
          <img src="/images/logo.svg" alt="Logo" className="h-14 w-auto" />
        </div>
        <ul className="flex flex-nowrap gap-2 items-center">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <link.icon size={25} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
