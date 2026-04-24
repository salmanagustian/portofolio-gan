export const projects = [
  {
    num: 'PROJ.001 / 2024',
    name: 'Real-time Order Processing API',
    desc: 'High-throughput order ingestion pipeline for a logistics platform. Kafka-backed queue with idempotent consumer pattern handles burst traffic with zero message loss.',
    tags: ['Node.js', 'Kafka', 'PostgreSQL', 'Redis'],
    metric: '↑ 200K+ daily orders processed',
  },
  {
    num: 'PROJ.002 / 2024',
    name: 'Auth & Session Service',
    desc: 'Centralized authentication for a multi-tenant SaaS platform. JWT with sliding sessions, refresh token rotation, and Redis-backed session store for sub-millisecond lookups.',
    tags: ['NestJS', 'Redis', 'JWT', 'PostgreSQL'],
    metric: '↑ Serves 500K+ active users',
  },
  {
    num: 'PROJ.003 / 2023',
    name: 'Event-driven Data Pipeline',
    desc: 'Schema-on-read ETL pipeline ingesting raw events from upstream services. TypeScript consumers with exactly-once processing semantics and dead-letter queue handling.',
    tags: ['TypeScript', 'Kafka', 'PostgreSQL', 'Docker'],
    metric: '↑ 1M+ events processed per day',
  },
  {
    num: 'PROJ.004 / 2023',
    name: 'API Gateway & Rate Limiter',
    desc: 'In-house API gateway with per-client rate limiting and dynamic routing. Redis sliding window algorithm for precise enforcement without race conditions.',
    tags: ['Node.js', 'Redis', 'NestJS'],
    metric: '↓ 40% reduction in downstream load',
  },
  {
    num: 'PROJ.005 / 2022',
    name: 'Query Optimization Initiative',
    desc: 'End-to-end audit and optimization of a PostgreSQL database serving a high-read platform. Strategic indexing and Redis query caching eliminated N+1 patterns at scale.',
    tags: ['PostgreSQL', 'Redis', 'TypeScript'],
    metric: '↓ 50% average query latency reduced',
  },
  {
    num: 'PROJ.006 / 2022',
    name: 'Monolith → Microservices Migration',
    desc: 'Led the strangler fig decomposition of a Node.js monolith into focused services. Zero-downtime migration over 6 months with feature flag-based traffic shifting.',
    tags: ['NestJS', 'Kafka', 'Docker', 'AWS'],
    metric: '↑ Team deployment frequency 4×',
  },
];
