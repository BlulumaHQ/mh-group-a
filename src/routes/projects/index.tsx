import { createFileRoute } from "@tanstack/react-router";
import { ClosingCTA, ProjectCard } from "@/components/site/Sections";
import { Reveal, SectionHeading } from "@/components/site/Primitives";
import { projects } from "@/data/projects";

const title = "Projects | MH Group LLC";
const description =
  "Completed Manhattan renovations managed end to end by MH Group LLC — Upper East Side, Sutton Place, Upper West Side and Midtown East residences.";

export const Route = createFileRoute("/projects/")({
  component: ProjectsIndex,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function ProjectsIndex() {
  return (
    <>
      <section className="bg-ink px-5 py-24 lg:px-0 lg:py-32">
        <div className="container-mh">
          <SectionHeading
            as="h1"
            eyebrow="OUR WORK"
            title="Completed Manhattan Residences"
          />
          <p className="mt-8 max-w-[560px] pl-10 text-[16px] leading-[1.75] text-white/70">
            Four full renovations delivered under a single point of responsibility — from
            board approvals and contractor vetting to material selection and final
            inspection.
          </p>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-mh grid grid-cols-1 gap-2 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} eager={i < 2} />
            </Reveal>
          ))}
        </div>
      </section>

      <ClosingCTA
        title="Ready to Begin Your Journey?"
        sub="Let us take care of the details, so you can enjoy the possibilities."
        buttonLabel="Get in Touch"
        image="/images/upper-west-side-86th-after-03.webp"
      />
    </>
  );
}