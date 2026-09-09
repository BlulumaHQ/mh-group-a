import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { GoldColumn, LineIcon, SectionHeading } from "@/components/site/Primitives";
import { abs, altLinks, site } from "@/data/site";
import { zhContact, zhMeta } from "@/data/zh";

export const Route = createFileRoute("/zh/contact")({
  component: ZhContactPage,
  head: () => ({
    meta: [
      { title: zhMeta.contact.title },
      { name: "description", content: zhMeta.contact.description },
      { property: "og:title", content: zhMeta.contact.title },
      { property: "og:description", content: zhMeta.contact.description },
      { property: "og:locale", content: "zh_TW" },
      { property: "og:url", content: abs("/zh/contact") },
    ],
    links: [
      { rel: "canonical", href: abs("/zh/contact") },
      ...altLinks("/contact", "/zh/contact"),
    ],
  }),
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const fieldClass =
  "mt-2 w-full border border-hairline bg-white px-4 py-3 font-sans text-[15px] text-inktext outline-none transition-colors focus:border-brass";
const labelClass = "block font-sans text-[13px] tracking-[0.08em] text-mutedtext";

function ZhContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    service: zhContact.options[0]!,
    message: "",
  });

  const set = (key: keyof typeof values) => (v: string) =>
    setValues((prev) => ({ ...prev, [key]: v }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = zhContact.errors.name;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email.trim()))
      next.email = zhContact.errors.email;
    if (!values.message.trim()) next.message = zhContact.errors.message;
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    `諮詢 — ${values.service}`,
  )}&body=${encodeURIComponent(
    `姓名：${values.name}\n電子郵件：${values.email}\n電話：${values.phone}\n服務：${values.service}\n\n${values.message}`,
  )}`;

  return (
    <>
      <section className="bg-ink px-5 py-24 lg:px-0 lg:py-32">
        <div className="container-mh">
          <SectionHeading as="h1" eyebrow={zhContact.eyebrow} title={zhContact.h1} />
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[64%_36%]">
        <div className="order-1 bg-paper px-5 py-16 lg:px-20 lg:py-24">
          <div className="flex">
            <GoldColumn onPaper />
            <h2 className="text-[24px] text-inktext lg:text-[32px]">
              {zhContact.formHeading}
            </h2>
          </div>

          {sent ? (
            <div className="mt-10 border border-brass p-8">
              <p className="font-display text-[22px] text-inktext">
                {zhContact.thanksTitle}
                {values.name}
              </p>
              <p className="mt-3 text-[15px] leading-[1.95] text-mutedtext">
                {zhContact.thanksCopy} {site.email}。
              </p>
              <a href={mailto} className="btn-base mt-6 bg-brass text-white hover:bg-brass-deep">
                <span>{zhContact.thanksButton}</span>
                <span className="arrow">&rarr;</span>
              </a>
            </div>
          ) : (
            <form className="mt-10 max-w-[620px] space-y-7" onSubmit={onSubmit} noValidate>
              <div>
                <label className={labelClass} htmlFor="zh-name">
                  {zhContact.labels.name}
                </label>
                <input
                  id="zh-name"
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
                <label className={labelClass} htmlFor="zh-email">
                  {zhContact.labels.email}
                </label>
                <input
                  id="zh-email"
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
                <label className={labelClass} htmlFor="zh-phone">
                  {zhContact.labels.phone}
                </label>
                <input
                  id="zh-phone"
                  name="phone"
                  type="tel"
                  className={fieldClass}
                  maxLength={40}
                  value={values.phone}
                  onChange={(e) => set("phone")(e.target.value)}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="zh-service">
                  {zhContact.labels.service}
                </label>
                <select
                  id="zh-service"
                  name="service"
                  className={fieldClass}
                  value={values.service}
                  onChange={(e) => set("service")(e.target.value)}
                >
                  {zhContact.options.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="zh-message">
                  {zhContact.labels.message}
                </label>
                <textarea
                  id="zh-message"
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
                <span>{zhContact.submit}</span>
                <span className="arrow">&rarr;</span>
              </button>
            </form>
          )}
        </div>

        <div className="order-2 bg-ink px-5 py-16 lg:px-12 lg:py-24">
          <div className="flex">
            <GoldColumn />
            <h2 className="text-[24px] text-white lg:text-[30px]">{zhContact.rightHeading}</h2>
          </div>
          <ul className="mt-10 space-y-8">
            <li className="flex items-start gap-4">
              <LineIcon name="phone" size={22} />
              <div>
                <p className="font-sans text-[12px] tracking-[0.12em] text-brass">
                  {zhContact.labels.phone}
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
                <p className="font-sans text-[12px] tracking-[0.12em] text-brass">
                  {zhContact.labels.email}
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
                <p className="font-sans text-[12px] tracking-[0.12em] text-brass">地點</p>
                <p className="mt-1 text-[16px] text-white">{zhContact.location}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
