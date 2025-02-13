import { Metadata } from "next";

import HomePage from "@/component/HomePage";

export const metadata: Metadata = {
  title: "Call Log messenger",
  description: "This is a page to show the call log history",
};

export default function Home() {
  return <HomePage />;
}
