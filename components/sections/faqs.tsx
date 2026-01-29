'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsFour() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What is a fake or spoofed Wi-Fi network?',
            answer:
                'A spoofed (or evil-twin) Wi-Fi network pretends to be a trusted network, like café or airport Wi-Fi, to intercept your data. Wichain detects these networks before you connect.',
        },
        {
            id: 'item-2',
            question: 'Do I need technical knowledge to use Wichain?',
            answer:
                'No. Wichain is built for everyday users. It works automatically in the background and alerts you in simple language when a network is risky.',
        },
        {
            id: 'item-3',
            question: 'Does Wichain block Wi-Fi connections?',
            answer:
                'Wichain does not block connections by default. It analyzes the network and warns you if it detects spoofing or unsafe behavior so you can decide safely.',
        },
        {
            id: 'item-4',
            question: 'Is Wichain safe for public places like cafés and airports?',
            answer:
                'Yes. Public Wi-Fi is where spoofing attacks are most common. Wichain is designed specifically to protect users in airports, cafés, colleges, hotels, and shared offices.',
        },
        {
            id: 'item-5',
            question: 'Does Wichain collect my personal data?',
            answer:
                'No. Wichain analyzes network behavior, not your personal content. Your browsing activity, passwords, and private data are never stored or shared.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground mt-4 text-balance">
                        Common questions about Wi-Fi safety and how Wichain protects you.
                    </p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1"
                    >
                        {faqItems.map((item) => (
                            <div className="group" key={item.id}>
                                <AccordionItem
                                    value={item.id}
                                    className="peer rounded-xl border-none px-7 py-1 data-[state=open]:bg-card dark:data-[state=open]:bg-muted data-[state=open]:shadow-sm"
                                >
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                            </div>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Still have questions? Reach out to our{' '}
                        <Link href="/contact" className="text-primary font-medium hover:underline">
                            support team
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </section>
    )
}
