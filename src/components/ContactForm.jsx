import { CheckCircle2, AlertCircle, Github, Linkedin, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useI18n } from "../context/I18nContext.jsx";

// Chave carregada do arquivo .env (VITE_WEB3FORMS_KEY)
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export function ContactForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `Novo contato pelo Portfólio - ${formData.get("name")}`);
    formData.append("from_name", "Portfólio Igor Parizi");

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="reveal interactive-surface flex min-w-0 flex-col justify-between glass-card p-5 shadow-glow sm:p-6">
        <div>
          <p className="relative z-10 break-words font-display text-2xl font-bold leading-tight text-gradient sm:text-3xl lg:text-4xl">
            {t.contact.subtitle}
          </p>
        </div>
        <div className="relative z-10 mt-8 grid gap-3 sm:mt-12 sm:flex sm:flex-wrap">
          <a href="https://br.linkedin.com/in/igorparizi" className="button-secondary" target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            {t.contact.linkedin}
          </a>
          <a href="https://github.com/pariziigor" className="button-secondary" target="_blank" rel="noreferrer">
            <Github size={18} />
            {t.contact.github}
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="reveal glass-card min-w-0 p-5 text-ink dark:text-paper sm:p-7">
        {/* Honeypot anti-spam do Web3Forms */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        <div className="relative z-10 grid gap-5 sm:grid-cols-2">
          <label className="field-label">
            {t.contact.name}
            <input className="field-input" type="text" name="name" autoComplete="name" required />
          </label>
          <label className="field-label">
            {t.contact.email}
            <input className="field-input" type="email" name="email" autoComplete="email" required />
          </label>
        </div>
        <label className="field-label relative z-10 mt-5">
          {t.contact.message}
          <textarea className="field-input min-h-36 resize-y" name="message" required />
        </label>

        {status === "success" ? (
          <p
            role="status"
            className="relative z-10 mt-4 flex items-center gap-2 rounded-2xl border border-neon/40 bg-neon/10 px-4 py-3 text-sm font-medium text-ink dark:text-neon"
          >
            <CheckCircle2 size={18} className="shrink-0" />
            <span>{t.contact.success}</span>
          </p>
        ) : null}

        {status === "error" ? (
          <p
            role="alert"
            className="relative z-10 mt-4 flex items-center gap-2 rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400"
          >
            <AlertCircle size={18} className="shrink-0" />
            <span>{t.contact.error}</span>
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === "sending"}
          className="button-primary relative z-10 mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              {t.contact.sending}
              <Loader2 size={18} className="animate-spin" />
            </>
          ) : (
            <>
              {t.contact.submit}
              <Send size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
