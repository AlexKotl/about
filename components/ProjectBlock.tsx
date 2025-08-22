import { ProjectsProjectsProject } from "@/tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function ProjectBlock(props: ProjectsProjectsProject) {
  return (
    <div
      className={`card bg-base-100 duration-200 col-span-1 ${
        props.flag === "discontinued" ? "opacity-60" : ""
      }`}
    >
      <div className="card-body p-5">
        <a href={props.url ?? "#"} target="_blank">
          <div className="card-title">{props.title}</div>
        </a>
        <TinaMarkdown content={props.description}></TinaMarkdown>
        <a href={props.url ?? "#"} target="_blank" className=" btn-link">
          {props.url?.replace(/https:|http:|\//g, "")}
        </a>
      </div>
    </div>
  );
}
