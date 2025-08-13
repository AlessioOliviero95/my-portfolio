"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_a9mne86",     // Replace with your actual values
        "template_bdx9s0v",
        form.current!,
        "v1hAzGOvArAbeOwtK"
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="max-w-xl mx-auto space-y-6 md:h-dvh flex flex-col items-start md:items-center justify-center text-left"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">Contact Me</h2>
      <p className="text-muted-foreground text-center">Send me a message and I’ll get back to you soon.</p>

      <form ref={form} onSubmit={sendEmail} className="space-y-4 w-full">
        <Input name="user_name" placeholder="Your name" required />
        <Input type="email" name="user_email" placeholder="Your email" required />
        <Textarea name="message" placeholder="Your message..." rows={5} required />
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Sending..." : "Send Message"}
        </Button>
        {sent && <p className="text-green-500 text-sm mt-2 text-center">Message sent successfully! ✅</p>}
      </form>
      <div className="px-4" />
    </section>
  );
}
