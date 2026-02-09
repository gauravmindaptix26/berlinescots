import { Suspense } from "react";
import ContactClient from "./ContactClient";

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#fff7fb]" />}>
      <ContactClient />
    </Suspense>
  );
}
