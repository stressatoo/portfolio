import type { ReactNode } from "react";

export function TypographyH1(text: string) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
      {text}
    </h1>
  );
}

export function TypographyH2(text: string) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {text}
    </h2>
  );
}
export function TypographyH3(text: string) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {text}
    </h3>
  );
}
export function TypographyH4(text: string) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{text}</h4>
  );
}
export function TypographyP(text: string) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{text}</p>;
}
export function TypographyBlockquote(text: string) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{text}</blockquote>
  );
}

export function TypographyList(listElements: unknown[]) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      {listElements.map((element, index) => (
        <li key={index}>{element as ReactNode}</li>
      ))}
    </ul>
  );
}

export function TypographyInlineCode(text: string) {
  return (
    <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {text}
    </code>
  );
}

export function TypographyLead(text: string) {
  return <p className="text-muted-foreground text-xl">{text as ReactNode}</p>;
}

export function TypographyLarge(text: string) {
  return <div className="text-lg font-semibold">{text}</div>;
}

export function TypographySmall(text: string) {
  return <div className="text-sm leading-none font-medium">{text}</div>;
}

export function TypographyMuted(text: string) {
  return <div className="text-sm text-muted-foreground">{text}</div>;
}

export function TypographyA(text: string, href: string) {
  return (
    <a
      href={href}
      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
    >
      {text}
    </a>
  );
}
