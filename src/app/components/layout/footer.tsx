import Image from "next/image";
import NewsletterInput from "../common/newsletter-input";
import GradientBorder from "../ui/gradient-border";
import ThemeToggle from "../common/theme-toggle";

export default function Footer() {
  return (
    <footer className="relative bg-surface-2">
      <div className="container pt-20 pb-12">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <GradientBorder
              radius="rounded-4xl"
              innerClassName="bg-muted p-6 md:p-8"
            >
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <h3 className="text-brand-gradient text-2xl">Contact us</h3>
                  <div className="mt-4 space-y-1">
                    <p className="font-semibold">Main Office</p>
                    <p>
                      33a Portsmouth Rd
                      <br />
                      Woolston
                      <br />
                      Southampton
                      <br />
                      SO19 9BA
                    </p>
                    <p className="mt-4">
                      <span className="">Tel:</span> 02382 123 336
                    </p>
                    <p>
                      <span className="">E:</span>{" "}
                      <a
                        className="underline"
                        href="mailto:hello@genio-accountants.co.uk"
                      >
                        hello@genio-accountants.co.uk
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-brand-gradient text-2xl">Hampshire</h3>
                  <div className="mt-4 space-y-1">
                    <p className="font-semibold">Satellite Office</p>
                    <p>
                      The Old Bond Store
                      <br />
                      Back of the Walls
                      <br />
                      Hampshire
                      <br />
                      Southampton
                      <br />
                      SO14 3BH
                    </p>
                    <p className="mt-4">
                      <span className="">Tel:</span> 0345 222 1066 / 02382 123
                      336
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-brand-gradient text-2xl">Wartling</h3>
                  <div className="mt-4 space-y-1">
                    <p className="font-semibold">Satellite Office</p>
                    <p>
                      Well House
                      <br />
                      Wartling Road
                      <br />
                      Wartling
                      <br />
                      Eastbourne
                      <br />
                      BN27 1RX
                    </p>
                    <p className="mt-4">
                      <span className="">Tel:</span> 0345 222 1066 / 02382 123
                      336
                    </p>
                  </div>
                </div>
              </div>
            </GradientBorder>
          </div>

          <div className="lg:col-span-5 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-brand-gradient text-2xl">Visit Us</h3>
              <p className="mt-4">
                Monday - Friday 09:00–1730
                <br />
                Evening and Weekend appointments are available on request.
              </p>
              <p className="mt-4">
                To make an appointment,
                <br />
                please email{" "}
                <a
                  className="underline"
                  href="mailto:hello@genio-accountants.co.uk"
                >
                  hello@genio-accountants.co.uk
                </a>
                <br />
                or call us on{" "}
                <span className="whitespace-nowrap">02382 123 336</span>
              </p>
            </div>

            <div>
              <h3 className="text-brand-gradient text-2xl">
                Newsletter Sign-Up
              </h3>
              <p className="mt-4">
                With our newsletter, you automatically receive our latest news
                by e-mail and get access to the archive including advanced
                search options!
              </p>
              <div className="mt-16">
                <NewsletterInput />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-10">
          <Image
            src="/svgs/freeagent.svg"
            alt="FreeAgent"
            width={88}
            height={49}
          />
          <Image
            src="/svgs/sage.svg"
            alt="Sage"
            width={74}
            height={32}
            className="h-10 w-auto"
          />
        </div>

         <div className="mt-10 flex max-sm:flex-col sm:items-center sm:justify-between gap-6">
          <div className="text-foreground/50 text-sm leading-relaxed">
            <p>
              Copyright © 2019-2024 GEN10 Ltd T/A Genio Accountants VAT Number:
              GB306428811
              <br />
              Company Number: 11269181 Address: 33a Portsmouth Road, Southampton,
              SO19 9BA
            </p>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
