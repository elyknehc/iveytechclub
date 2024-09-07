import React from "react";
import background from "../assets/splash page.png";
import logo from "../assets/itc.png";
import Image from "next/image";
import decor from "../assets/splash-decor.png";
import { AiOutlineDiscord } from "react-icons/ai";

const Landing = () => {
	return (
		<div className="relative" id="#">
			<Image
				src={background}
				alt="background"
				className="w-full h-auto"
				draggable="false"
			/>

			<div className="absolute inset-0 flex flex-col">
				{/* ITC Logo */}
				<div className="ml-4 md:ml-28 mt-4 md:mt-32">
					<Image
						src={logo}
						alt="logo"
						width={250}
						height={250}
						draggable="false"
					/>

					<div className="mt-4 md:mt-8 font-syne text-iveyGreen">
						Ivey Technology Club is building the {""}
						<div>
							tech community at <b>Ivey Business School</b>
						</div>
					</div>

					{/* Discord Links */}
					<a
						href="https://discord.gg/p9SPdrNaHy"
						rel="noreferrer"
						target="_blank"
						className="flex items-center space-x-2 mt-4"
					>
						<AiOutlineDiscord
							className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-iveyGreen"
							size={50}
						/>
						<span className="text-iveyGreen">Join our Discord</span>
					</a>

					{/* <a
						href="https://discord.gg/p9SPdrNaHy"
						rel="noreferrer"
						target="_blank"
						className="flex items-center space-x-2 mt-4"
					>
						<AiOutlineDiscord
							className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-iveyGreen"
							size={50}
						/>
						<span className="text-iveyGreen">Join our Discord</span>
					</a>

					<a
						href="https://discord.gg/p9SPdrNaHy"
						rel="noreferrer"
						target="_blank"
						className="flex items-center space-x-2 mt-4"
					>
						<AiOutlineDiscord
							className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-iveyGreen"
							size={50}
						/>
						<span className="text-iveyGreen">Join our Discord</span>
					</a> */}
					{/* Bottom decor */}
					<div className="mt-4 md:mt-44">
						<Image src={decor} alt="decor" draggable="false" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
