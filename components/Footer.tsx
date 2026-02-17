import Link from 'next/link'

const footerLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
]

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-bold tracking-tight text-foreground mb-4">
                            <span className="text-primary">GREP</span>FLOW
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                            Next-generation AI &amp; Cloud technology company building the future of intelligent systems.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>hello@grepflow.io</li>
                            <li>San Francisco, CA</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} GrepFlow. All rights reserved.</p>
                    <p className="text-xs text-muted-foreground">
                        Built with AI. Powered by Cloud.
                    </p>
                </div>
            </div>
        </footer>
    )
}
