import { siteConfig } from "@/config/site";
import { AndroidStudioIcon, BootstrapIcon, DiscordIcon, FigmaIcon, GitIcon, GithubIcon, InstagramIcon, LaravelIcon, LinkedInIcon, NextJSIcon, NpmIcon, OperaIcon, PcIcon, PhoneIcon, PnpmIcon, Postman, ReactJSIcon, TailwindIcon, TwitterIcon, ViteIcon, VsCodeIcon } from "./icons";

export const Tools = {
    links: [
		{
			icon: TwitterIcon,
			title: "Twitter",
			link: siteConfig.links.twitter, 
		},
		{
			icon: InstagramIcon,
			title: "Instagram",
			link: siteConfig.links.instagram,
		},
		{
			icon: DiscordIcon,
			title: "Discord",
			link: siteConfig.links.discord,
		},
		{
			icon: GithubIcon,
			title: "Github",
			link: siteConfig.links.github,
		},
		{
			icon: LinkedInIcon,
			title: "LinkedIn",
			link: siteConfig.links.linkedin,
		},
	],

    TechStack : [
        {
            icon : LaravelIcon,
            title: "Laravel"
        },
        {
            icon : ReactJSIcon,
            title: "React JS"
        },
        {
            icon : TailwindIcon,
            title: "Tailwind"
        },
        {
            icon : NextJSIcon,
            title: "Next JS"
        },
        {
            icon : BootstrapIcon,
            title: "Bootstrap"
        },
        {
            icon : ViteIcon,
            title: "Vite"
        },
    ],

    PackageM : [
        {
            icon : NpmIcon,
            title: "NPM"
        },
        {
            icon : PnpmIcon,
            title: "PNPM"
        },
    ],

    DevTool : [
        {
            icon : FigmaIcon,
            title: "Figma"
        },
        {
            icon : VsCodeIcon,
            title: "VS Code"
        },
        {
            icon : GitIcon,
            title: "Git"
        },
        {
            icon : AndroidStudioIcon,
            title: "Android Studio"
        },
        {
            icon : OperaIcon,
            title: "Opera"
        },
        {
            icon : Postman,
            title: "Postman"
        },
    ],

    Workstation : [
        {
            icon : PcIcon,
            title: "Intel(R) Core(TM) i7-10700"
        },
        {
            icon : PhoneIcon,
            title: "Poco M4 Pro"
        },
    ]
};
