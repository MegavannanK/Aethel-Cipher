"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "NeuralCore Engine",
        category: "AI Platform",
        description:
            "Enterprise AI inference engine processing 10M+ requests daily with sub-100ms latency.",
        tags: ["PyTorch", "Kubernetes", "gRPC"],
    },
    {
        title: "CloudMatrix",
        category: "Cloud Infrastructure",
        description:
            "Multi-region cloud orchestration platform managing 500+ microservices across 3 cloud providers.",
        tags: ["Terraform", "AWS", "GCP"],
    },
    {
        title: "DataPulse Analytics",
        category: "Data Engineering",
        description:
            "Real-time analytics pipeline processing 50TB of data daily for a Fortune 500 retail company.",
        tags: ["Apache Spark", "Kafka", "BigQuery"],
    },
    {
        title: "VisionGuard AI",
        category: "Computer Vision",
        description:
            "AI-powered surveillance system with 99.7% accuracy for anomaly detection in manufacturing.",
        tags: ["TensorFlow", "Edge AI", "ONNX"],
    },
];

export default function Work() {
    return (
        <section id="work" className="relative py-24 px-6 bg-background">
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        Selected Work
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A selection of projects that showcase our expertise in AI, cloud, and
                        modern engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300"
                        >
                            {/* Simple visual header */}
                            <div className="h-2 bg-gradient-to-r from-primary to-primary/50" />

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                                        {project.category}
                                    </span>
                                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-transparent"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
