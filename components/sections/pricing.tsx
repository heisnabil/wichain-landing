import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Pricing() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">
                        Simple pricing for everyday Wi-Fi safety
                    </h1>
                    <p className="text-muted-foreground">
                        Start free. Upgrade only if you need deeper protection.
                        No hidden fees. Cancel anytime.
                    </p>
                </div>

                <div className="mt-8 grid gap-6 [--color-card:var(--color-muted)] *:border-none *:shadow-none md:mt-20 md:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">

                    {/* Free */}
                    <Card className="bg-muted flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Free</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">$0 / mo</span>
                            <CardDescription className="text-sm">
                                Basic protection
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />
                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'Basic fake Wi-Fi detection',
                                    'Public hotspot risk alerts',
                                    'Manual network scan',
                                    'Community support',
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button asChild variant="outline" className="w-full">
                                <Link href="/signup">Get Started</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Pro */}
                    <Card className="bg-muted relative">
                        <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
                            Most Popular
                        </span>

                        <div className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-medium">Pro</CardTitle>
                                <span className="my-3 block text-2xl font-semibold">$9 / mo</span>
                                <CardDescription className="text-sm">
                                    Always-on protection
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <hr className="border-dashed" />
                                <ul className="list-outside space-y-3 text-sm">
                                    {[
                                        'Everything in Free',
                                        'Real-time Wi-Fi monitoring',
                                        'Automatic spoof detection',
                                        'AI-based risk scoring',
                                        'Instant danger alerts',
                                        'Priority support',
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button asChild className="w-full">
                                    <Link href="/signup">Upgrade to Pro</Link>
                                </Button>
                            </CardFooter>
                        </div>
                    </Card>

                    {/* Family */}
                    <Card className="bg-muted flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Family</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">$19 / mo</span>
                            <CardDescription className="text-sm">
                                Protect multiple devices
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />
                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    'Everything in Pro',
                                    'Up to 5 devices',
                                    'Shared protection dashboard',
                                    'Family safety alerts',
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button asChild variant="outline" className="w-full">
                                <Link href="/signup">Protect Your Family</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                </div>
            </div>
        </section>
    )
}
