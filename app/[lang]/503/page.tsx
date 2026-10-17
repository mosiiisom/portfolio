import type { Metadata } from "next";
import ServiceUnavailable from "./ServiceUnavailable";

export const metadata: Metadata = {
  title: "503",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ServiceUnavailable />;
}
