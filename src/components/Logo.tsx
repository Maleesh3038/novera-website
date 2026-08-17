import Link from "next/link";
import Image from "next/image";

export default function Logo({ dark = false }: { dark?: boolean }) {
  // dark=true  -> light/white background walata (logo eka thaniyama)
  // dark=false -> navy header/footer walata (white chip ekak athule)
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span
        className={
          dark
            ? "flex items-center"
            : "flex items-center rounded-xl bg-white px-2.5 py-1.5 shadow-soft"
        }
      >
        <Image
          src="/novera-logo.png"
          alt="Novera International"
          width={591}
          height={394}
          className="h-9 w-auto sm:h-10"
          priority
        />
      </span>
    </Link>
  );
}