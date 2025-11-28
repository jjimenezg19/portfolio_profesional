// src/sections/Contact.tsx
import { useEffect, useState } from "react";
import Title from "@/components/Title";

import { Player } from "@lottiefiles/react-lottie-player";

import axios from "axios";
import { toast } from "react-toastify";

const MAILGUN_KEY = import.meta.env.VITE_MAILGUN_KEY as string;
const MAILGUN_URL = import.meta.env.VITE_MAILGUN_URL as string;
const SECRET_WORD = import.meta.env.VITE_SECRET_WORD as string;

type ContactContent = {
  title: string;
  subtitle: string;
  email: string;
  subject: string;
  message: string;
  button: string;
};

type ContactProps = {
  id?: string;
  className?: string;
  content: ContactContent;
};

type ContactFormState = {
  email: string;
  subject: string;
  text: string;
};

const DEFAULT_VALUES: ContactFormState = {
  email: "",
  subject: "",
  text: "",
};

export default function Contact({
  id = "contact",
  className = "",
  content,
}: ContactProps) {
  const [contactForm, setContactForm] =
    useState<ContactFormState>(DEFAULT_VALUES);
  const [validForm, setValidForm] = useState(false);

  // Validación básica + SECRET_WORD en el asunto
  useEffect(() => {
    const { email, subject, text } = contactForm;
    const isValid =
      email.trim().length > 0 &&
      subject.trim().length > 0 &&
      text.trim().length > 0 &&
      (!SECRET_WORD || subject.includes(SECRET_WORD));

    setValidForm(isValid);
  }, [contactForm]);

  const handleInput = (field: keyof ContactFormState, value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
  };

  const sendEmail = async () => {
    if (!validForm) return;

    try {
      const { email, subject, text } = contactForm;

      const form = new FormData();
      form.append("from", `Web Portfolio <${email}>`);
      form.append("to", "jjimenezg242@gmail.com"); // cámbialo si quieres otro correo
      form.append("subject", subject);
      form.append("text", text);

      await axios.post(
        `https://api.mailgun.net/v3/${MAILGUN_URL}/messages`,
        form,
        {
          auth: {
            username: "api",
            password: MAILGUN_KEY,
          },
        }
      );

      setContactForm(DEFAULT_VALUES);
      toast.success("Thank you for your email ✨");
    } catch (error) {
      console.error(error);
      toast.error("Sorry, something went wrong. Please try again.");
    }
  };

  return (
    <section
      id={id}
      className={`
      relative
      py-20 md:py-28
      flex flex-col items-center gap-10 md:gap-14
      px-4
      ${className}
    `}
    >
      {/* Título + subtítulo */}
      <div className="flex flex-col items-center text-center gap-4 max-w-2xl">
        <Title text={content.title} />
        <p className="text-sm sm:text-base md:text-lg text-[var(--color-neutral-100)]/80">
          {content.subtitle}
        </p>
      </div>

      {/* Card principal */}
      <div
        className="
        relative w-full max-w-5xl
        rounded-3xl
        bg-[color-mix(in_hsl,var(--color-primary-400)_85%,black_15%)]
        border border-[rgba(111,213,180,0.35)]
        shadow-[0_0_35px_rgba(4,173,147,0.45)]
        overflow-hidden
        px-4 sm:px-6 md:px-10
        py-8 md:py-10
      "
      >
        {/* 2 columnas en desktop: Lottie (izq) + Form (der) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* --- Columna LOTTIE --- */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <div
              className="
              relative
              w-52 sm:w-60 md:w-72
          
              rounded-[2.5rem]
              flex items-center justify-center
            
            "
            >
              {/* Glow interior para 10% de la paleta (accent morado) */}
              <div
                className="
                pointer-events-none
                absolute inset-6 rounded-[2rem]
                opacity-80
              "
              />

              <Player
                autoplay
                loop
                src="https://lottie.host/02131d3a-b8ac-4e4d-91ce-a41f811bceea/l7DORFO7SD.json"
                style={{ width: "75%", height: "75%" }}
                className="relative drop-shadow-[0_0_25px_rgba(4,173,147,0.9)]"
              />
            </div>
          </div>

          {/* --- Columna FORMULARIO --- */}
          <div className="order-1 md:order-2 flex flex-col gap-4 md:gap-5">
            <div className="flex flex-col gap-1 text-left">
              <label className="text-xs sm:text-sm font-semibold tracking-wide text-[var(--color-secondary-400)]">
                {content.email}
              </label>
              <input
                value={contactForm.email}
                onInput={({ target }) =>
                  handleInput("email", (target as HTMLInputElement).value)
                }
                className="h-input w-full text-sm md:text-base"
                placeholder="you@example.com"
                type="email"
              />
            </div>

            <div className="flex flex-col gap-1 text-left">
              <label className="text-xs sm:text-sm font-semibold tracking-wide text-[var(--color-secondary-400)]">
                {content.subject}
              </label>
              <input
                value={contactForm.subject}
                onInput={({ target }) =>
                  handleInput("subject", (target as HTMLInputElement).value)
                }
                className="h-input w-full text-sm md:text-base"
                placeholder={content.subject}
              />
              {SECRET_WORD && (
                <p className="text-[0.68rem] sm:text-xs text-white/50 mt-1">
                  * Include the secret word{" "}
                  <span className="text-[var(--color-secondary-400)] font-semibold">
                    {SECRET_WORD}
                  </span>{" "}
                  in the subject so your message reaches my inbox.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1 text-left">
              <label className="text-xs sm:text-sm font-semibold tracking-wide text-[var(--color-secondary-400)]">
                {content.message}
              </label>
              <textarea
                value={contactForm.text}
                onInput={({ target }) =>
                  handleInput("text", (target as HTMLTextAreaElement).value)
                }
                className="h-textarea w-full h-32 md:h-40 text-sm md:text-base"
                placeholder={content.message}
              />
            </div>

            <div className="flex justify-end mt-2">
              <button
                disabled={!validForm}
                onClick={sendEmail}
                className={`
                px-5 md:px-7 py-2.5 md:py-3
                text-sm md:text-base font-bold
                rounded-full
                bg-[var(--color-secondary-600)]
                text-[var(--color-primary-800,#02040a)]
                shadow-[0_0_18px_rgba(111,213,180,0.85)]
                hover:bg-[var(--color-secondary-400)]
                hover:shadow-[0_0_26px_rgba(111,213,180,1)]
                transition
                disabled:bg-white/10 disabled:text-white/40
                disabled:shadow-none disabled:cursor-not-allowed
              `}
              >
                {content.button}
              </button>
            </div>
          </div>
        </div>

        {/* Glow extra alrededor del card */}
        <div
          className="
          pointer-events-none
          absolute inset-0 rounded-3xl
          border border-[rgba(4,173,147,0.25)]
          mix-blend-screen
        "
        />
      </div>
    </section>
  );
}
