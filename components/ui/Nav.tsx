"use client";

import Link from "next/link";
import {useParams, useRouter} from "next/navigation";
import { useMemo } from "react";

export default function Nav() {
	const router = useRouter();
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
		<div className="relative flex h-12 justify-center w-full">
			{backUrl && (
				<Link href={backUrl} className="absolute left-0 top-0 p-4 hover:underline underline-offset-4">
					&lt; Back
				</Link>
			)}

		</div>
	);
}
