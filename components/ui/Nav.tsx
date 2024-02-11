"use client";

import Link from "next/link";
import {useParams, usePathname, useRouter} from "next/navigation";
import {useMemo} from "react";
import Button from "../common/Button";

export default function Nav(props: {canGoBack?: boolean}) {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams<{
		slug?: string[];
	}>();

	const backUrl = useMemo(() => {
		// If at /shop/men/shirts, go to /shop/men (back one level)
		// If at /shop, don't show back button
		if (!params.slug) return;

		if (params.slug.length > 0) {
			const newSlug = params.slug.slice(0, -1);
			return `/shop/${newSlug.join("/")}`;
		}
	}, [params.slug]);

	return (
		<div className="relative flex h-24 justify-center w-full">
			{backUrl && (
				<Link href={backUrl} className="absolute left-0 top-0 py-4 hover:underline underline-offset-4 max-sm:text-3xl max-sm:px-2">
					&lt; <span className="hidden sm:inline">Back</span>
				</Link>
			)}
			{props.canGoBack && (
				<button onClick={router.back} className="absolute left-0 top-0 py-4 hover:underline underline-offset-4 max-sm:text-3xl max-sm:px-2">
					&lt; <span className="hidden sm:inline">Back</span>
				</button>
			)}
			<p className="text-2xl max-sm:pt-4 bg-gradient-to-tr from-lime-400 to-lime-500 bg-clip-text text-transparent">
				The Vale shop
			</p>
			{pathname !== "/cart" && (
				<Link href="/cart" className="absolute right-0 top-0 py-4 hover:underline underline-offset-4">
					<Button>
						<div className="flex gap-x-2 items-center">
							<svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
								<path d="M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.49.598l-1 5a.5.5 0 01-.465.401l-9.397.472L4.415 11H13a.5.5 0 010 1H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2z" />
							</svg>
							<span className="hidden sm:inline mt-1">Cart</span>
						</div>
					</Button>
				</Link>
			)}
		</div>
	);
}
