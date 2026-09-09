import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { GoldColumn, LineIcon, SectionHeading } from "@/components/site/Primitives";
import { abs, services, site } from "@/data/site";

const title = "Contact | MH Group LLC";
const description =
  "Speak with MH Group LLC about a Manhattan renovation, property management, purchase or move-in. Based in New York, NY.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: abs("/contact") },
    ],
    links: [{ rel: "canonical", href: abs("/contact") }],
  }),
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const fieldClass =
  "mt-2 w-full border border-hairline bg-white px-4 py-3 font-sans text-[15px] text-inktext outline-none transition-colors focus:border-brass";
const labelClass =
  "block font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-mutedtext";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0]!.title,
    message: "",
  });

  const set = (key: keyof typeof values) => (v: string) =>
    setValues((prev) => ({ ...prev, [key]: v }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!values.message.trim()) next.message = "Please tell us about your project.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    `Enquiry — ${values.service}`,
  )}&body=${encodeURIComponent(
    `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nService: ${values.service}\n\n${values.message}`,
  )}`;

  return (
    <>
      <section className="bg-ink px-5 py-24 lg:px-0 lg:py-32">
        <div className="container-mh">
          <SectionHeading as="h1" eyebrow="CONTACT" title="Let's Start the Conversation" />
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[64%_36%]">
        <div className="order-1 bg-paper px-5 py-16 lg:px-20 lg:py-24">
          <div className="flex">
            <GoldColumn onPaper />
            <h2 className="text-[26px] text-inktext lg:text-[34px]">Send Us a Note</h2>
          </div>

          {sent ? (
            <div className="mt-10 border border-brass p-8">
              <p className="font-display text-[22px] text-inktext">Thank you, {values.name}.</p>
              <p className="mt-3 text-[15px] leading-[1.75] text-mutedtext">
                Your details are ready to send. To reach us directly, open the message in
                your email client below or write to {site.email}.
              </p>
              <a href={mailto} className="btn-base mt-6 bg-brass text-white hover:bg-brass-deep">
                <span>Open in Email</span>
                <span className="arrow">&rarr;</span>
              </a>
            </div>
          ) : (
            <form className="mt-10 max-w-[620px] space-y-7" onSubmit={onSubmit} noValidate>
              <div>
                <label className={labelClass} htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className={fieldClass}
                  maxLength={100}
                  value={values.name}
                  onChange={(e) => set("name")(e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name ? (
                  <p className="mt-2 text-[13px] text-brass-deep">{errors.name}</p>
                ) : null}
              </div>

              <div>
                <label className={labelClass} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={fieldClass}
                  maxLength={255}
                  value={values.email}
                  onChange={(e) => set("email")(e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email ? (
                  <p className="mt-2 text-[13px] text-brass-deep">{errors.email}</p>
                ) : null}
              </div>

              <div>
                <label className={labelClass} htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={fieldClass}
                  maxLength={40}
                  value={values.phone}
                  onChange={(e) => set("phone")(e.target.value)}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="service">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className={fieldClass}
                  value={values.service}
                  onChange={(e) => set("service")(e.target.value)}
                >
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1500}
                  className={fieldClass}
                  value={values.message}
                  onChange={(e) => set("message")(e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? (
                  <p className="mt-2 text-[13px] text-brass-deep">{errors.message}</p>
                ) : null}
              </div>

              <button type="submit" className="btn-base bg-brass text-white hover:bg-brass-deep">
                <span>Send Enquiry</span>
                <span className="arrow">&rarr;</span>
              </button>
            </form>
          )}
        </div>

        <div className="order-2 bg-ink px-5 py-16 lg:px-12 lg:py-24">
          <div className="flex">
            <GoldColumn />
            <h2 className="text-[26px] text-white lg:text-[34px]">Speak With Us</h2>
          </div>
          <ul className="mt-10 space-y-8">
            <li className="flex items-start gap-4">
              <LineIcon name="phone" size={22} />
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-brass">
                  Phone
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-1 block text-[16px] text-white transition-colors hover:text-brass"
                >
                  {site.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <LineIcon name="mail" size={22} />
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-brass">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block break-all text-[16px] text-white transition-colors hover:text-brass"
                >
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <LineIcon name="pin" size={22} />
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-brass">
                  Location
                </p>
                <p className="mt-1 text-[16px] text-white">{site.location}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}