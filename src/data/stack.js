export const stackCols = [
  {
    header: 'LANGUAGES',
    items: [
      { label: 'TypeScript', variant: 'primary' },
      { label: 'JavaScript', variant: 'primary' },
      { label: 'SQL',        variant: 'primary' },
      { label: 'Bash',       variant: 'secondary' },
    ],
  },
  {
    header: 'FRAMEWORKS',
    items: [
      { label: 'NestJS',     variant: 'primary', featured: true },
      { label: 'Express.js', variant: 'primary' },
      { label: 'Fastify',    variant: 'primary' },
      { label: 'Prisma ORM', variant: 'secondary' },
    ],
  },
  {
    header: 'DATA & MESSAGING',
    items: [
      { label: 'PostgreSQL', variant: 'primary', featured: true },
      { label: 'Redis',      variant: 'primary' },
      { label: 'Kafka',      variant: 'primary', featured: true },
      { label: 'RabbitMQ',   variant: 'secondary' },
    ],
  },
  {
    header: 'INFRASTRUCTURE',
    items: [
      { label: 'Docker',         variant: 'primary' },
      { label: 'AWS EC2/RDS',    variant: 'primary' },
      { label: 'Nginx',          variant: 'primary' },
      { label: 'GitHub Actions', variant: 'secondary' },
    ],
  },
];

export const proficiency = [
  { name: 'NestJS',     pct: 95 },
  { name: 'PostgreSQL', pct: 98 },
  { name: 'Kafka',      pct: 87 },
  { name: 'Node.js',    pct: 96 },
  { name: 'Redis',      pct: 90 },
  { name: 'Docker',     pct: 84 },
];
