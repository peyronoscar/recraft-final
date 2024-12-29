import { Logo } from "@/svgs/layout/logo";

export function Contact() {
  return (
    <div className="space-y-16 md:space-y-32 py-16 md:py-32 container text-center flex flex-col items-center text-lg">
      <Logo className="w-24 md:w-32" />
      <div className="space-y-5">
        <div>
          <h2>Want to order or collaborate?</h2>
          <p className="font-bold">Please reach out to us!</p>
        </div>
        <div>
          <a
            href="mailto:info@recraftdesign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            info@recraftdesign.com
          </a>
          <a
            href="https://www.instagram.com/recraftdesignstudio_/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            ig: recraftdesignstudio_
          </a>
        </div>
      </div>
    </div>
  );
}
