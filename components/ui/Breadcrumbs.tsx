"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
    const pathname = usePathname(); 
    const slugs = pathname.split("/").filter(Boolean).slice(0, -1);

    return (
        <div>
            {slugs.map((slug, index) => {
                const path = slugs.slice(0, index + 1).join("/");
                return (
                    <span key={slug}>
                        <Link href={`/${path}`} className="capitalize">{slug}</Link>
                        {index < slugs.length - 1 && " / "}
                    </span>
                );
            })}
        </div>
    );
}