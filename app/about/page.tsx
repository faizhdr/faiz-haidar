import React from 'react';
import { title, subtitle } from "@/components/primitives";
import { Card, CardBody } from "@nextui-org/card";
import { Tooltip } from "@nextui-org/tooltip";
import { Progress } from "@nextui-org/react";
import { User } from "@nextui-org/user";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Tools } from "@/components/home";

export default function AboutPage() {
	return (
		<section className="flex flex-col py-8 md:py-1">
			<div className="mb-10">
				<User
					name="My Passion 🚀"
					description={(
						<Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
							@faizhdr
						</Link>
					)}
					avatarProps={{
						src: "/profile.png"
					}}
				/>

				<p className={subtitle({ class: "mt-4" })}>
					With passion and dedication, I am always looking for opportunities to broaden your horizons in technology and ready to take on new challenges in software development. Highly motivated to continue to grow and develop in this field, and I am confident that the experience I have gained will help in achieving success in a career as a software developer.
				</p>

				<Progress
					size="sm"
					value={5000}
					maxValue={5000}
					color="warning"
					className="my-7 w-56 mx-auto"
				/>

				<p className={subtitle({ class: "my-4 text-sm font-semibold text-gray-400" })}>
					Find Me On
				</p>
				<div className="flex gap-3 mt-3 justify-center">
					{Tools.links.map((data) => (
						<Tooltip key={data.title} placement='bottom' showArrow={true} content={data.title}>
							<Link isExternal href={data.link} aria-label={data.title}>
								{data.icon && React.createElement(data.icon, { className: "text-default-500" })}
							</Link>
						</Tooltip>
					))}
				</div>
			</div>
		</section>
	);
}
