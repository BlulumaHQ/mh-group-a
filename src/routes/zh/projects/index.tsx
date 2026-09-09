import { createFileRoute } from "@tanstack/react-router";
import { ClosingCTA, ProjectCard } from "@/components/site/Sections";
import { Reveal, SectionHeading } from "@/components/site/Primitives";
import { projects } from "@/data/projects";
import { abs, altLinks } from "@/data/site";
import { zhHome, zhMeta, zhProjects, zhProjectShared, zhProjectsIndex } from "@/data/zh";

export const Route = createFileRoute("/zh/projects/")({
  component: ZhProjectsIndex,
  head: () => ({
    meta: [
      { title: zhMeta.projects.title },
      { name: "description", content: zhMeta.projects.description },
      { property: "og:title", content: zhMeta.projects.title },
      { property: "og:description", content: zhMeta.projects.description },
      { property: "og:locale", content: "zh_TW" },
      { property: "og:url", content: abs("/zh/projects") },
    ],
    links: [
      { rel: "canonical", href: abs("/zh/projects") },
      ...altLinks("/projects", "/zh/projects"),
    ],
  }),
});

function ZhProjectsIndex() {
  return (
    <>
      <section className="bg-ink px-5 py-24 lg:px-0 lg:py-32">
        <div className="container-mh">
          <SectionHeading
            as="h1"
            eyebrow={zhProjectsIndex.eyebrow}
            title={zhProjectsIndex.h1}
          />
          <p className="mt-8 max-w-[620px] pl-10 text-[16px] leading-[1.95] text-white/70">
            {zhProjectsIndex.intro}
          </p>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-mh grid grid-cols-1 gap-2 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard
                project={project}
                eager={i < 2}
                locale="zh"
                name={zhProjects[project.slug]!.name}
                scope={zhProjectShared.scope}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <ClosingCTA
        title={zhHome.ctaHeading}
        sub={zhHome.ctaCopy}
        buttonLabel={zhHome.ctaButton}
        image="/images/upper-west-side-86th-after-03.webp"
        to="/zh/contact"
      />
    </>
  );
}
