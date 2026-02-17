'use client'
import MotionWrapper from '@/components/MotionWrapper'

export default function Contact() {
    return (
        <section id="contact" className="relative py-20 px-6 bg-secondary/30">
            <div className="relative z-10 max-w-3xl mx-auto">
                <MotionWrapper className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        Let&apos;s Build the Future
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Ready to transform your business with AI? Let&apos;s talk.
                    </p>
                </MotionWrapper>

                <MotionWrapper delay={0.2}>
                    <form
                        className="space-y-6 bg-card p-10 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus:border-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">Email</label>
                                <input
                                    type="email"
                                    placeholder="you@company.com"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus:border-primary"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Subject</label>
                            <input
                                type="text"
                                placeholder="Project inquiry"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus:border-primary"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Message</label>
                            <textarea
                                placeholder="Tell us about your project..."
                                rows={5}
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all focus:border-primary"
                            />
                        </div>
                        <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 w-full hover:shadow-lg hover:-translate-y-0.5">
                            Send Message
                        </button>
                    </form>
                </MotionWrapper>
            </div>
        </section>
    )
}
