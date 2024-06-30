import { ProjectsProjectsProject } from "@/tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function ProjectBlock(props: ProjectsProjectsProject) {
  return (
    <div className="card">
      <div className="card-title">{props.title}</div>
      <div className="card-body">
        <TinaMarkdown content={props.description}></TinaMarkdown>
      </div>
    </div>
  );
}
