import type { Metadata } from "next";
import RegisterForm from "./RegisterForm";

export const metadata: Metadata = {
  title: "Create account – Medium",
  description: "Create your Medium account.",
};

function safeRedirect(path: string | undefined): string {
  if (typeof path !== "string" || !path.startsWith("/") || path.startsWith("//")) {
    return "/";
  }
  return path;
}

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const params = await searchParams;
  const redirectTo = safeRedirect(params.redirect);

  return (
    // ...
    <RegisterForm redirectTo={redirectTo} />
  );
}