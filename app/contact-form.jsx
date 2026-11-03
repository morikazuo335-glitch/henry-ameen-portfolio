"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", projectType: "", budget: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function update(event) {
    setForm(current => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function submit(event) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Message could not be sent.");
      setStatus("sent");
      setFeedback("Thanks — your message has been sent. I’ll get back to you soon.");
      setForm({ name: "", email: "", projectType: "", budget: "", message: "" });
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <form className="contactForm" onSubmit={submit}>
      <div className="formRow">
        <label>Your name<input name="name" value={form.name} onChange={update} placeholder="Jane Smith" autoComplete="name" required maxLength={120} /></label>
        <label>Your email<input name="email" type="email" value={form.email} onChange={update} placeholder="jane@company.com" autoComplete="email" required maxLength={254} /></label>
      </div>
      <div className="formRow">
        <label>What do you need?
          <select name="projectType" value={form.projectType} onChange={update}>
            <option value="">Choose a project type</option>
            <option>Webflow website</option><option>Shopify store</option><option>Framer website</option><option>Website redesign</option><option>Not sure yet</option>
          </select>
        </label>
        <label>Estimated budget
          <select name="budget" value={form.budget} onChange={update}>
            <option value="">Choose a range</option>
            <option>Under $500</option><option>$500–$1,000</option><option>$1,000–$3,000</option><option>$3,000+</option><option>Let’s discuss</option>
          </select>
        </label>
      </div>
      <label>Tell me about your project<textarea name="message" value={form.message} onChange={update} placeholder="What are you building, and what would you like the website to achieve?" required maxLength={5000} rows={5} /></label>
      <button className="button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send project enquiry ↗"}</button>
      {feedback && <p className={`formFeedback ${status}`} role="status">{feedback}</p>}
      <small className="formPrivacy">Your details are used only to respond to your enquiry.</small>
    </form>
  );
}
