import Image from "next/image";
import { client } from "@/tina/__generated__/client";
import { ProjectBlock } from "@/components/ProjectBlock";
import { ProfileLink } from "@/components/ProfileLink";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default async function Home() {
  const projects = await client.queries.projects({
    relativePath: "projects.md",
  });
  const about = await client.queries.about({
    relativePath: "about.md",
  });

  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Image
            src="/images/ava.jpg"
            alt="Olek"
            width={200}
            height={200}
            priority
            className="rounded-full mb-5"
          />
          <h1 className="font-bold lg:font-extrabold text-xl lg:text-4xl mb-1 lg:mb-3">
            {about.data.about.name}
          </h1>
          <div className="flex">
            <Image
              src="/images/icons/location.svg"
              width={16}
              height={16}
              alt="Location"
              className="opacity-70 me-2"
            />
            Germany
          </div>
          <div className="my-5">
            <TinaMarkdown content={about.data.about.description}></TinaMarkdown>
          </div>
          <ul className="flex justify-center items-center gap-2 lg:gap-4 lg:justify-start flex-wrap max-lg:p-6">
            {about.data.about.links?.map((link) => (
              <ProfileLink key={link?.key} {...link} />
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.data.projects.projects?.map((project) => (
            <ProjectBlock key={project?.name} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
