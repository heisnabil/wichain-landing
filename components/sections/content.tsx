import Image from 'next/image'

export default function ContentSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* SECTION GRID */}
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          
          {/* LEFT — TEXT */}
          <div className="space-y-6">
            <h2 className="max-w-xl text-4xl font-semibold leading-tight lg:text-5xl">
              Wichain continuously analyzes the Wi-Fi around you.
            </h2>

            <p className="max-w-lg text-muted-foreground">
              Public Wi-Fi networks often look safe but behave differently behind the scenes.
              <span className="font-semibold text-foreground">
                {' '}Wichain monitors those hidden signals in real time.
              </span>
            </p>

            <p className="max-w-lg text-muted-foreground">
              Instead of relying on network names or passwords, Wichain uses AI-driven
              behavior analysis to detect spoofing, interception attempts, and abnormal
              traffic patterns before damage happens.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 text-sm text-muted-foreground">
              “I used to avoid public Wi-Fi completely. With Wichain, I finally know
              when a network is actually safe to use.”
              <span className="mt-3 block font-medium text-foreground">
                Beta user, frequent traveler
              </span>
              <span className="block text-xs">
                Airport & café Wi-Fi protection
              </span>
            </blockquote>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-xl rounded-2xl bg-gradient-to-b from-zinc-200 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/images/wichain.png"
                alt="Wichain security dashboard"
                width={1200}
                height={929}
                priority
                className="rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
