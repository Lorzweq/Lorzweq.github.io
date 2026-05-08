import emailjs from "emailjs-com";
import { useState } from "react";

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState(null);

  function sendEmail(e) {
    e.preventDefault();
    setSubmitStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          e.target.reset();
          setSubmitStatus("success");
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          setSubmitStatus("error");
        }
      );
  }

  return (
    <section
      id="contact"
      className="relative py-20 min-h-screen bg-gradient-to-b from-slate-950/97 via-blue-950/95 to-slate-950 text-white overflow-hidden"
    >
      <div className="absolute -left-12 top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-cyan-100">Let&apos;s Build Something Great</h2>
          <p className="text-base md:text-lg mt-4 text-blue-100/85 max-w-2xl mx-auto">
            Open to developer opportunities and exciting projects. Send a
            message or connect through one of the quick links.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          <aside className="lg:col-span-2 rounded-2xl border border-blue-800/60 bg-blue-950/35 p-6 md:p-7 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-cyan-100">Quick Contact</h3>
            <p className="text-sm text-blue-100/80 mt-2 mb-6">
              Choose a channel that works best for you.
            </p>

            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/leevihanninen/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-blue-600/60 bg-gradient-to-b from-blue-800/55 to-blue-950/60 px-4 py-3 text-blue-100 hover:from-blue-700/60 hover:to-blue-900/70 shadow-[inset_0_1px_0_rgba(191,219,254,0.18)] transition"
              >
                <span className="font-medium">LinkedIn</span>
                <span className="text-sm">Professional profile</span>
              </a>
              <a
                href="https://github.com/Lorzweq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-slate-500/60 bg-slate-800/60 px-4 py-3 text-slate-100 hover:border-cyan-300 hover:text-cyan-200 transition"
              >
                <span className="font-medium">GitHub</span>
                <span className="text-sm">Code and projects</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-900/80">
              <p className="text-xs uppercase tracking-wider text-blue-200/70">
                Also available on
              </p>
              <a
                href="https://discord.com/users/lorzweq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-3 items-center gap-2 rounded-lg border border-blue-700 px-3 py-2 text-sm text-blue-100 hover:border-cyan-300 hover:text-cyan-200 transition"
              >
                Discord
              </a>
            </div>
          </aside>

          <form
            onSubmit={sendEmail}
            className="lg:col-span-3 rounded-2xl border border-blue-800/70 bg-blue-950/45 p-6 md:p-7 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-5">Send Message</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-sm font-medium text-blue-100"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="w-full p-3 mt-2 bg-slate-900/85 border border-blue-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-blue-100"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 mt-2 bg-slate-900/85 border border-blue-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                className="block text-sm font-medium text-blue-100"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 mt-2 bg-slate-900/85 border border-blue-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Tell me about your project, role, or question"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
            >
              Send Message
            </button>

            {submitStatus === "success" && (
              <div className="mt-4 p-3 rounded-lg bg-emerald-900/50 border border-emerald-600/50 text-emerald-100 text-sm">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mt-4 p-3 rounded-lg bg-red-900/50 border border-red-600/50 text-red-100 text-sm">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="https://discord.com/users/lorzweq" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-blue-700 bg-blue-950/60 text-blue-100 hover:text-cyan-200 hover:border-cyan-300 transition">
            <span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
              </svg>
            </span>
          </a>
          <a href="https://github.com/Lorzweq" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-blue-700 bg-blue-950/60 text-blue-100 hover:text-cyan-200 hover:border-cyan-300 transition">
            <span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </span>
          </a>
          <a href="https://www.linkedin.com/in/leevihanninen/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-blue-700 bg-blue-950/60 text-blue-100 hover:text-cyan-200 hover:border-cyan-300 transition">
            <span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </span>
          </a>
        </div>

        <footer className="text-blue-100/80 py-4 mt-10 w-full text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Leevi Hänninen. All rights
            reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
