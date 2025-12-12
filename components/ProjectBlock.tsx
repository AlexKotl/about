import { ProjectsProjectsProject } from "@/tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function ProjectBlock(props: ProjectsProjectsProject) {
  return (
    <div
      className={`card bg-base-100 duration-200 col-span-1 relative overflow-hidden ${
        props.flag === "discontinued" ? "opacity-60" : ""
      }`}
    >
      {props.flag === "inprogress" && (
        <div className="absolute top-3 -right-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold pl-20 pr-10 py-1 rotate-45 shadow-lg z-10">
          In progress
        </div>
      )}
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
