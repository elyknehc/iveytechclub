import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "@/components/footer";

export default function Home() {
	return (
		<div>
			<Navbar />
			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
			<Footer />
		</div>
	);
}
