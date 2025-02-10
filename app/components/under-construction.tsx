import React from "react";
import { Construction, Github } from "lucide-react";

const UnderConstruction = () => {
	return (
		<div className="flex flex-col items-center justify-center p-4 mt-16">
			<div className="text-center max-w-md animate-bounce">
				<Construction className="w-16 h-16 mx-auto mb-6 text-pink-400" />
			</div>

			<h1 className="text-3xl font-bold text-gray-800 mb-4">(｡◕‿◕｡) Hello!</h1>

			<div className="rounded-lg p-6 max-w-md text-center">
				<p className="text-lg text-gray-600 mb-4">Under Construction...</p>

				<p className="text-sm text-gray-500">
					We're crafting something amazing!
					<br />
					Coming to you very soon ⭐️
				</p>
			</div>

			<div className="mt-8 text-sm text-gray-400">Can't wait to see you! ❤️</div>

			<a
				href="https://github.com/IMCurie/site"
				target="_blank"
				rel="noopener noreferrer"
				className="mt-8 flex items-center gap-2 text-gray-600 hover:text-pink-400 transition-colors duration-300"
			>
				<Github className="w-5 h-5" />
				<span>View on GitHub</span>
			</a>
		</div>
	);
};

export default UnderConstruction;
