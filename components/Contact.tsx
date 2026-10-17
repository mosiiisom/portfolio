"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, Calendar } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/config/site";
import { sendEmail } from "@/app/actions/send-email";
import { useI18n } from "./I18nProvider";

export default function Contact() {
  const { dict, locale } = useI18n();
  const t = dict.contact;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    const res = await sendEmail(formData);
    if (res?.error) {
      setErrorMessage(res.error);
      setStatus("error");
    } else {
      setStatus("success");
    }
  }

  return (
    <section className="bg-background py-32 px-4 md:px-8 w-full relative overflow-hidden" id="contact">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(32px,5vw,64px)] fa:text-[clamp(28px,4vw,52px)] fa:leading-snug font-bold tracking-tight text-white mb-4">
            {t.title}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-medium text-white mb-3">{t.getInTouch}</h3>
              <p className="text-zinc-400 leading-relaxed font-light">
                {t.intro}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-5 p-4 rounded-3xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-500 backdrop-blur-md">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-950 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors duration-500">
                  <Mail className="w-6 h-6 text-zinc-300 group-hover:text-indigo-400 transition-colors duration-500" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-mono tracking-wider mb-1">{t.emailLabel}</p>
                  <p className="text-zinc-300 group-hover:text-white transition-colors duration-500" dir="ltr">{siteConfig.email}</p>
                </div>
              </a>

              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 p-4 rounded-3xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-500 backdrop-blur-md">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-950 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors duration-500">
                  <FaLinkedin className="w-6 h-6 text-zinc-300 group-hover:text-blue-400 transition-colors duration-500" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-mono tracking-wider mb-1">{t.linkedinLabel}</p>
                  <p className="text-zinc-300 group-hover:text-white transition-colors duration-500">{t.linkedinText}</p>
                </div>
              </a>

              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 p-4 rounded-3xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-500 backdrop-blur-md">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-950 group-hover:bg-white/20 group-hover:text-white transition-colors duration-500">
                  <FaGithub className="w-6 h-6 text-zinc-300 group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-mono tracking-wider mb-1">{t.githubLabel}</p>
                  <p className="text-zinc-300 group-hover:text-white transition-colors duration-500">{t.githubText}</p>
                </div>
              </a>

              <a href={siteConfig.links.cal} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 p-4 rounded-3xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-500 backdrop-blur-md">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-950 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors duration-500">
                  <Calendar className="w-6 h-6 text-zinc-300 group-hover:text-purple-400 transition-colors duration-500" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-mono tracking-wider mb-1">{t.meetingLabel}</p>
                  <p className="text-zinc-300 group-hover:text-white transition-colors duration-500">{t.meetingText}</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form action={handleSubmit} className="flex flex-col gap-5 bg-zinc-900/20 border border-white/5 p-8 md:p-10 rounded-[2rem] backdrop-blur-md hover:bg-zinc-900/30 transition-colors duration-500">
              <input type="hidden" name="locale" value={locale} />
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-zinc-400 font-medium ms-1">{t.nameLabel}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={t.namePlaceholder}
                  className="bg-zinc-950/50 border border-white/5 rounded-2xl px-5 py-4 text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-zinc-400 font-medium ms-1">{t.emailFieldLabel}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={t.emailPlaceholder}
                  dir="ltr"
                  className="bg-zinc-950/50 border border-white/5 rounded-2xl px-5 py-4 text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-zinc-400 font-medium ms-1">{t.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder={t.messagePlaceholder}
                  className="bg-zinc-950/50 border border-white/5 rounded-2xl px-5 py-4 text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all duration-300 resize-none"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-xl text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <p>{errorMessage}</p>
                </div>
              )}
              
              {status === "success" && (
                <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 p-3 rounded-xl text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <p>{t.success}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="mt-2 flex items-center justify-center gap-3 bg-white text-black font-medium px-6 py-4 rounded-2xl hover:bg-zinc-200 transition-colors duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? t.sending : status === "success" ? t.sent : t.send}
                {status !== "loading" && status !== "success" && (
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1 transition-transform duration-300" />
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Simple Footer */}
      <div className="absolute bottom-6 left-0 w-full text-center">
        <p className="text-zinc-600 text-sm font-light">
          © {new Date().getFullYear()} {t.footer}
        </p>
      </div>
    </section>
  );
}
