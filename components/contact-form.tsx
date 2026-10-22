"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4 bg-card p-8 shadow-soft"
    >
      {sent ? (
        <p className="py-16 text-center font-display text-2xl">
          Thank you! We&apos;ll be in touch soon.
        </p>
      ) : (
        <>
          {(["Name", "Email", "Phone"] as const).map((f) => (
            <input
              key={f}
              required={f !== "Phone"}
              type={f === "Email" ? "email" : "text"}
              placeholder={f}
              className="w-full rounded-xl border bg-background px-4 py-3.5 outline-none focus:ring-2 focus:ring-ring"
            />
          ))}
          <textarea
            required
            rows={4}
            placeholder="Tell us about your event"
            className="w-full rounded-xl border bg-background px-4 py-3.5 outline-none focus:ring-2 focus:ring-ring"
          />
          <button className="w-full rounded-full bg-primary py-4 font-medium text-primary-foreground transition hover:opacity-90">
            Send Request
          </button>
        </>
      )}
    </form>
  );
}
