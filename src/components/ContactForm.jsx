import { Github, Linkedin, Send } from "lucide-react";
import { useI18n } from "../context/I18nContext.jsx";

export function ContactForm() {
  const { t } = useI18n();

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="reveal flex min-w-0 flex-col justify-between border-2 border-current bg-acid p-5 text-ink shadow-brutalSm sm:p-6 sm:shadow-brutal">
        <div>
          <p className="break-words font-display text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">{t.contact.subtitle}</p>
        </div>
        <div className="mt-8 grid gap-3 sm:mt-12 sm:flex sm:flex-wrap">
          <a href="https://br.linkedin.com/in/igorparizi" className="button-secondary bg-paper" target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            {t.contact.linkedin}
          </a>
          <a href="https://github.com/pariziigor" className="button-secondary bg-paper" target="_blank" rel="noreferrer">
            <Github size={18} />
            {t.contact.github}
          </a>
        </div>
      </div>

      <form className="reveal min-w-0 border-2 border-current bg-paper p-5 text-ink shadow-brutalSm dark:bg-ink dark:text-paper sm:p-7 sm:shadow-brutal">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="field-label">
            {t.contact.name}
            <input className="field-input" type="text" name="name" autoComplete="name" />
          </label>
          <label className="field-label">
            {t.contact.email}
            <input className="field-input" type="email" name="email" autoComplete="email" />
          </label>
        </div>
        <label className="field-label mt-5">
          {t.contact.message}
          <textarea className="field-input min-h-36 resize-y" name="message" />
        </label>
        <button type="button" className="button-primary mt-6 w-full justify-center">
          {t.contact.submit}
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
