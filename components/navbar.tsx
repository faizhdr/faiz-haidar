import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
	NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { useRouter } from 'next/router';
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import {
	AboutIcon,
	GithubIcon, HomeIcon, ProjectIcon,
} from "@/components/icons";

export const Navbar = () => {

	return (
		<NextUINavbar maxWidth="md" position="sticky">
			<NavbarContent className="hidden md:flex" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="items-center gap-1" href="/">
						<p className="font-bold text-inherit">Hi👋</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="md:hidden basis-2" justify="start">
				<div className="grid grid-cols-3 gap-9 pr-3 py-2 ">
					<Link href="/" aria-label="Home">
						<HomeIcon className="text-default-500" />
					</Link>
					<Link href="/projects" aria-label="Projects">
						<ProjectIcon className="text-default-500" />
					</Link>
					<Link href="/about" aria-label="About">
						<AboutIcon className="text-default-500" />
					</Link>
				</div>
			</NavbarContent>
			<NavbarContent className="hidden font-semibold md:flex gap-4 " justify="center">
				{siteConfig.navItems.map((item) => (
					<NavbarItem key={item.href}>
						<NextLink
							className={clsx(
								linkStyles({ color: "foreground" }),
								"data-[active=true]:text-primary data-[active=true]:font-medium "
							)}
							color="foreground"
							href={item.href}
						>
							{item.label}
						</NextLink>
					</NavbarItem>
				))}
			
			</NavbarContent>
			

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden md:flex gap-2">
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="md:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
			</NavbarContent>

		</NextUINavbar>
	);
};
