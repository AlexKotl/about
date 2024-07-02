import { AboutLinksLink } from "@/tina/__generated__/types";
import Image from "next/image";

export function ProfileLink(props: AboutLinksLink) {
  return (
    <li>
      <a href={props.url ?? ""} className="btn btn-square btn-ghost group">
        <Image
          src={`/images/icons/${props.name}.svg`}
          alt=""
          width={30}
          height={30}
          className="opacity-70"
        />
      </a>
    </li>
  );
}
