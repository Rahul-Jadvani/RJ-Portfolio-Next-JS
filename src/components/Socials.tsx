import Link from "next/link";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface SocialLink {
    id: number;
    icon: JSX.Element;
    path: string;
}

const socialLinks: SocialLink[] = [
    {
        id: 0,
        icon: <FaGithub />,
        path: 'https://github.com/Rahul-Jadvani',
    },
    {
        id: 1,
        icon: <FaLinkedin />,
        path: 'https://linkedin.com/in/rahul-jadvani-741751208',
    },
];

const Socials: React.FC = () => {
    return (
        <div className="flex flex-row md:flex-row justify-center items-center gap-8 text-2xl">
            {socialLinks.map((link) => (
                <div
                    className="border-2 border-accent p-2 rounded-full hover:scale-105 hover:bg-accent-hover duration-500 hover:shadow-inline"
                    key={link.id}
                >
                    <Link href={link.path}>{link.icon}</Link>
                </div>
            ))}
        </div>
    );
}

export default Socials;
