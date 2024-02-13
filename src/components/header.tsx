import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="bg-zinc-800 flex items-center justify-between px-2 py-4 h-24 border-b-zinc-900 text-zinc-100">
      <div className="m-4">
        <Link href={"/"} className=" text-2xl">
          Gabriel Queiroz
        </Link>
      </div>
      <nav className="mx-5">
        <Link className="px-2" href={""}>
          {t("about")}
        </Link>
        <Link className="px-2" href={""}>
          {t("experience")}
        </Link>
        <Link className="px-2" href={""}>
          {t("projects")}
        </Link>
        <Link className="px-2" href={""}>
          {t("contact")}
        </Link>
      </nav>
    </header>
  );
}
