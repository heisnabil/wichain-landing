import { Card, CardContent } from '@/components/ui/card'
import { Shield, Radar, WifiOff, Users } from 'lucide-react'

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-24 md:py-32 cyber-grid"
    >
      {/* subtle cyber glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <h2 className="text-cyber text-4xl font-semibold md:text-5xl">
            How Wichain Keeps You Safe on Wi-Fi
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            AI-powered Wi-Fi protection that works silently in the background 
            no setup, no technical skills required.
          </p>
        </div>

        {/* ================= ROW 1 ================= */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Feature 1 */}
         <Card className="relative h-full border border-border/40 bg-background/80 backdrop-blur-md shadow-sm">

            <CardContent className="flex h-full flex-col gap-4 p-8">
              <Radar className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">
                Live Wi-Fi Threat Monitoring
              </h3>
              <p className="text-muted-foreground">
                Continuously scans nearby Wi-Fi networks and evaluates risk
                before your device connects.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="relative h-full border border-border/40 bg-background/80 backdrop-blur-md shadow-sm">

            <CardContent className="flex h-full flex-col gap-4 p-8">
              <WifiOff className="h-8 w-8 text-secondary" />
              <h3 className="text-xl font-semibold">
                Fake & Evil-Twin Blocking
              </h3>
              <p className="text-muted-foreground">
                Detects spoofed hotspots that impersonate trusted networks in
                cafés, airports, and colleges.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="relative h-full border border-border/40 bg-background/80 backdrop-blur-md shadow-sm">

            <CardContent className="flex h-full flex-col gap-4 p-8">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">
                AI Network Fingerprinting
              </h3>
              <p className="text-muted-foreground">
                Analyzes signal behavior, metadata, and anomalies not just
                Wi-Fi names or passwords.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* ================= ROW 2 ================= */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Feature 4 */}
         <Card className="relative h-full border border-border/40 bg-background/80 backdrop-blur-md shadow-sm">

            <CardContent className="flex h-full flex-col gap-4 p-8">
              <Shield className="h-8 w-8 text-secondary" />
              <h3 className="text-xl font-semibold">
                Instant Risk Alerts
              </h3>
              <p className="text-muted-foreground">
                Get real-time warnings when a network shows signs of interception,
                spoofing, or abnormal behavior.
              </p>
            </CardContent>
          </Card>

          {/* Feature 5 */}
          <Card className="relative h-full border border-border/40 bg-background/80 backdrop-blur-md shadow-sm">


            <CardContent className="flex h-full flex-col gap-4 p-8">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">
                Built for Everyday Users
              </h3>
              <p className="text-muted-foreground">
                Students, travelers, remote workers  Wichain works automatically
                without any cybersecurity knowledge.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
