import Image from "next/image";
import { client } from "@/tina/__generated__/client";
import { ProjectBlock } from "@/components/ProjectBlock";

export default async function Home() {
  const projects = await client.queries.projects({
    relativePath: "projects.md",
  });

  return (
    <main>
      <Image src="/ava.jpg" alt="Olek" width={300} height={300} priority />

      {projects.data.projects.projects?.map((project) => (
        <ProjectBlock key={project?.key} {...project} />
      ))}
    </main>
  );
}
