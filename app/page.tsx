import React from 'react';
import { Link } from "@nextui-org/link";
import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import { siteConfig } from "@/config/site";
import Motion from "framer-motion";
import { Image } from "@nextui-org/image";
import { Badge } from '@nextui-org/badge';
import { Divider } from "@nextui-org/divider";
import { title, subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
  DiscordIcon,
  LinkedInIcon,
} from "@/components/icons";
import { DevTool, PackageM, TechStack, Workstation } from "@/components/home";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 py-8 md:py-5">
      <div className="inline-block">
        <div className="flex">
          <Badge content="🚀" color="default" shape="circle" placement='bottom-right'>
            <Avatar 
              isBordered
              radius="full"
              className="w-20 h-20"
              src="/profile-photo.png"
            />
          </Badge>
          <div className="flex flex-col ml-5 mb-3">
            <h1 className={title({ class: "my-2" })}>
              Hi i&apos;m Faiz Haidar
            </h1>
            <h2 className="text-sm">Jakarta 🇮🇩 </h2>
          </div>
        </div>
        <h2 className={subtitle({ class: "mt-4" })}>
          Programmer with 2+ years of experience using the Laravel framework to
          develop, test and monitor enterprise software applications. Has
          designed several projects and participated in design competitions.
          Focus on designing websites and applications
        </h2>
      </div>
      <div className="flex gap-3 mt-3">
        <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
          <TwitterIcon className="text-default-500 hover:fill-red-500" />
        </Link>
        <Link isExternal href={siteConfig.links.twitter} aria-label="Instagram">
          <InstagramIcon className="text-default-500" />
        </Link>
        <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
          <DiscordIcon className="text-default-500" />
        </Link>
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <Link isExternal href={siteConfig.links.twitter} aria-label="Instagram">
          <LinkedInIcon className="text-default-500" />
        </Link>
      </div>

      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 mt-2">
        <Tooltip showArrow={true} content="🙂">
          <Button variant="flat">JavaScript</Button>
        </Tooltip>
        <Tooltip showArrow={true} content="🤑">
          <Button variant="flat">PHP</Button>
        </Tooltip>
        <Tooltip showArrow={true} content="😉">
          <Button variant="flat">Python</Button>
        </Tooltip>
        <Tooltip showArrow={true} content="😉">
          <Button variant="flat">MySQL</Button>
        </Tooltip>
        <Tooltip showArrow={true} content="😉">
          <Button variant="flat">CSS</Button>
        </Tooltip>
        <Tooltip showArrow={true} content="😉">
          <Button variant="flat">C++</Button>
        </Tooltip>
      </div>
      <h2 className={subtitle({ class: "mt-3" })}>
        Over the past decade, I&apos;ve written content on my blog and
        newsletter. I try to keep things simple. You&apos;ll find writing about
        technologies I&apos;m interested in at the time, or how I&apos;m
        learning and growing in my career, sharing knowledge along the way.
      </h2>

      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 mt-2">
        <Card className="p-3" isHoverable shadow="sm">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md font-semibold">Tech Stack ☕</p>
              <p className="text-small text-default-500">stack I&apos;ve ever used</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="gap-5 grid grid-cols-5">
            {TechStack.data.map((data) => (
              <Tooltip key={data.title} showArrow={true} content={data.title}>
                {data.icon && React.createElement(data.icon, { className: "text-default-500" })}
              </Tooltip>
            ))}
          </CardBody>
        </Card>
        <Card className="p-3" isHoverable shadow="sm">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md font-semibold">Packege Manager 📦</p>
              <p className="text-small text-default-500">packege I&apos;ve ever used</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="gap-5 grid grid-cols-5">
            {PackageM.data.map((data) => (
              <Tooltip key={data.title} showArrow={true} content={data.title}>
                {data.icon && React.createElement(data.icon, { className: "text-default-500" })}
              </Tooltip>
            ))}
          </CardBody>
        </Card>
        <Card className="p-3" isHoverable shadow="sm">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md font-semibold">Dev Tool 🤖</p>
              <p className="text-small text-default-500">development Tool I&apos;ve ever used</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="gap-5 grid grid-cols-5">
            {DevTool.data.map((data) => (
              <Tooltip key={data.title} showArrow={true} content={data.title}>
                {data.icon && React.createElement(data.icon, { className: "text-default-500" })}
              </Tooltip>
            ))}
          </CardBody>
        </Card>
        <Card className="p-3" isHoverable shadow="sm">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md font-semibold">Workstation 🖥️</p>
              <p className="text-small text-default-500">workstation I&apos;ve ever used</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="gap-5 grid grid-cols-5">
            {Workstation.data.map((data) => (
              <Tooltip key={data.title} showArrow={true} content={data.title}>
                {data.icon && React.createElement(data.icon, { className: "text-default-500" })}
              </Tooltip>
            ))}
          </CardBody>
        </Card>
      </div>

      <h2 className={subtitle({ class: "mt-5" })}>
        I hope you enjoy browsing my portfolio. If you are interested in collaborating or have further questions, please feel free to contact me
      </h2>

      <div className="flex gap-5 mt-3">
        <Link
          isExternal
          color='foreground'
          href="https://github.com/nextui-org/nextui"
          showAnchorIcon
        >
          get email update
        </Link>
        <Link isExternal showAnchorIcon color='foreground' href="/file/Faiz Haidar_CV.pdf">
          resume
        </Link>
      </div>
    </section>
  );
}
