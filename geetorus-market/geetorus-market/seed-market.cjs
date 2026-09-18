const postgres = require('postgres');
const crypto = require('crypto');

const sql = postgres('postgres://postgres:postgres@localhost:5432/geetorus_market');

async function seed() {
  console.log('Seeding GeeTorus Marketplace with real team blueprints and skills...');

  // 1. Create a system creator user if not exists
  const [user] = await sql`
    INSERT INTO "user" (id, name, email, email_verified, created_at, updated_at)
    VALUES (
      ${crypto.randomUUID()},
      'Geetorus Official',
      'team@geetorus.ing',
      true,
      NOW(),
      NOW()
    )
    ON CONFLICT (email) DO UPDATE SET updated_at = NOW()
    RETURNING id, name, email
  `;

  // 2. Create creator profile
  let [creator] = await sql`
    SELECT id FROM creators WHERE user_id = ${user.id}
  `;

  if (!creator) {
    [creator] = await sql`
      INSERT INTO creators (
        id, user_id, display_name, bio, total_installs, total_revenue, verified
      )
      VALUES (
        ${crypto.randomUUID()},
        ${user.id},
        'Geetorus Team',
        'Official verified team blueprints, agent packs, and workflows for autonomous AI organizations.',
        1240,
        149000,
        true
      )
      RETURNING id
    `;
  }

  // 3. Define the blueprints and catalog items from geetorus-companies
  const catalog = [
    {
      slug: 'gstack-engineering',
      type: 'team_blueprint',
      title: 'GStack Engineering Team',
      tagline: '5 specialized agents with 27 workflow skills for planning, QA, review, and shipping.',
      description: 'Engineering company powered by gstack workflow skills — distinct cognitive modes for product vision, design critique, technical planning, security auditing, code review, shipping, deployment, and QA. Built from gstack.',
      price: 0,
      categories: ['engineering', 'saas'],
      tags: ['gstack', 'engineering', 'qa', 'code-review', 'autoplan'],
      agentCount: 5,
      installCount: 420,
      rating: '4.9',
      reviewCount: 38,
      status: 'published',
      agents: [
        { name: 'CEO', role: 'Executive & Product Vision' },
        { name: 'CTO', role: 'Architecture & Technical Planning' },
        { name: 'Staff Engineer', role: 'Core Development & Refactoring' },
        { name: 'QA Engineer', role: 'Automated Testing & Edge-case Discovery' },
        { name: 'Release Engineer', role: 'Deployment, CI/CD & Rollbacks' }
      ]
    },
    {
      slug: 'trail-of-bits-security',
      type: 'team_blueprint',
      title: 'Trail of Bits Security Audit Firm',
      tagline: '28 automated security specialists and 35 battle-tested audit skills.',
      description: 'Comprehensive cybersecurity and smart contract auditing company. Equipped with static analysis, fuzzing, penetration testing, dependency scanning, and threat modeling workflows.',
      price: 19900,
      categories: ['engineering', 'ops'],
      tags: ['security', 'audit', 'pentesting', 'fuzzing', 'code-review'],
      agentCount: 28,
      installCount: 185,
      rating: '5.0',
      reviewCount: 24,
      status: 'published',
      agents: [
        { name: 'Chief Security Officer', role: 'Security Strategy' },
        { name: 'Smart Contract Auditor', role: 'EVM & Rust Audits' },
        { name: 'Penetration Tester', role: 'Network & Web Exploits' },
        { name: 'Fuzzing Engineer', role: 'Automated Fuzz Harnesses' }
      ]
    },
    {
      slug: 'superpowers-dev-shop',
      type: 'team_blueprint',
      title: 'Superpowers Dev Shop',
      tagline: '4 agile agents with 14 superpowers skills for rapid full-stack delivery.',
      description: 'Autonomous development agency equipped with iterative development skills, test-driven loops, and architectural guidance.',
      price: 4900,
      categories: ['engineering', 'saas'],
      tags: ['superpowers', 'fullstack', 'tdd', 'rapid-dev'],
      agentCount: 4,
      installCount: 230,
      rating: '4.8',
      reviewCount: 19,
      status: 'published',
      agents: [
        { name: 'Tech Lead', role: 'Scoping & Architecture' },
        { name: 'Full-Stack Engineer', role: 'Implementation' },
        { name: 'QA Specialist', role: 'Automated Regression' },
        { name: 'Product Manager', role: 'User Stories' }
      ]
    },
    {
      slug: 'donchitos-game-studio',
      type: 'team_blueprint',
      title: 'Donchitos Game Studio',
      tagline: '48 game dev agents and 38 skills across narrative, mechanics, art, and sound.',
      description: 'A complete independent video game production studio. Features dedicated agents for game design docs, level design, dialogue trees, pixel art prompt engineering, and audio composition workflows.',
      price: 14900,
      categories: ['content', 'engineering'],
      tags: ['game-dev', 'indiedev', 'storytelling', 'unity', 'godot'],
      agentCount: 48,
      installCount: 94,
      rating: '4.9',
      reviewCount: 12,
      status: 'published',
      agents: [
        { name: 'Creative Director', role: 'Game Vision' },
        { name: 'Lead Game Designer', role: 'Mechanics & Balancing' },
        { name: 'Narrative Lead', role: 'Story & Dialogue' },
        { name: 'Lead Programmer', role: 'Engine & Physics' }
      ]
    },
    {
      slug: 'kdense-science-lab',
      type: 'team_blueprint',
      title: 'K-Dense Science & Research Lab',
      tagline: '54 scientific researchers with 177 deep domain skills.',
      description: 'Deep tech and scientific research organization. Agents specialize in literature review, data analysis, hypothesis testing, bio-informatics, machine learning paper replication, and peer-review synthesis.',
      price: 29900,
      categories: ['engineering', 'content'],
      tags: ['science', 'research', 'ai-lab', 'bioinformatics', 'papers'],
      agentCount: 54,
      installCount: 78,
      rating: '5.0',
      reviewCount: 15,
      status: 'published',
      agents: [
        { name: 'Principal Investigator', role: 'Research Grants & Vision' },
        { name: 'Bioinformatics Lead', role: 'Genomics & Proteomics' },
        { name: 'ML Research Scientist', role: 'Model Training & Evals' },
        { name: 'Scientific Writer', role: 'Paper Publication & Formatting' }
      ]
    },
    {
      slug: 'fullstack-forge',
      type: 'team_blueprint',
      title: 'Fullstack Forge Agency',
      tagline: '49 full-stack engineers and 66 modern development skills.',
      description: 'High-throughput software engineering consultancy. Covers React, Next.js, Node, Postgres, Kubernetes, Docker, GraphQL, and microservice architectures with autonomous PR loops.',
      price: 9900,
      categories: ['engineering', 'saas'],
      tags: ['fullstack', 'react', 'nextjs', 'typescript', 'microservices'],
      agentCount: 49,
      installCount: 310,
      rating: '4.8',
      reviewCount: 42,
      status: 'published',
      agents: [
        { name: 'Managing Partner', role: 'Client Delivery' },
        { name: 'Principal Architect', role: 'System Architecture' },
        { name: 'Backend Engineer', role: 'API & Database' },
        { name: 'Frontend Engineer', role: 'UI/UX & Performance' }
      ]
    },
    {
      slug: 'product-compass-consulting',
      type: 'team_blueprint',
      title: 'Product Compass Consulting',
      tagline: '48 product management agents and 65 strategy skills.',
      description: 'Elite product management consultancy. Provides market research, user persona analysis, PRD writing, roadmapping, feature prioritization, and competitive intelligence.',
      price: 8900,
      categories: ['marketing', 'saas', 'content'],
      tags: ['product-management', 'strategy', 'prd', 'roadmap', 'growth'],
      agentCount: 48,
      installCount: 165,
      rating: '4.7',
      reviewCount: 21,
      status: 'published',
      agents: [
        { name: 'Head of Product', role: 'Portfolio Strategy' },
        { name: 'Lead Growth PM', role: 'Funnel Optimization' },
        { name: 'Technical PM', role: 'Spec & Backlog Grooming' },
        { name: 'UX Researcher', role: 'Customer Discovery' }
      ]
    },
    {
      slug: 'skill-git-worktree-isolation',
      type: 'skill',
      title: 'Git Worktree Isolation & Multi-Branching',
      tagline: 'Modular skill for agents to work on isolated worktrees without git lock collisions.',
      description: 'Equips any Geetorus agent with automated worktree branching, branch cleanup, rebase conflict avoidance, and atomic commits.',
      price: 0,
      categories: ['engineering', 'ops'],
      tags: ['git', 'worktree', 'automation', 'cli'],
      agentCount: 1,
      installCount: 650,
      rating: '4.9',
      reviewCount: 52,
      status: 'published'
    },
    {
      slug: 'skill-autonomous-pr-triage',
      type: 'skill',
      title: 'Autonomous PR Triage & Greptile Scorer',
      tagline: 'Score incoming PRs, analyze code quality, and draft reviews.',
      description: 'Scores pull requests using 10 weighted signals including CI checks, diff complexity, contributor reliability, and test coverage.',
      price: 1900,
      categories: ['engineering'],
      tags: ['github', 'pr-triage', 'code-review', 'ci-cd'],
      agentCount: 1,
      installCount: 280,
      rating: '4.8',
      reviewCount: 31,
      status: 'published'
    }
  ];

  for (const item of catalog) {
    const listingId = crypto.randomUUID();
    const [inserted] = await sql`
      INSERT INTO listings (
        id, slug, type, title, tagline, description, price,
        creator_id, categories, tags, agent_count, install_count,
        rating, review_count, status
      )
      VALUES (
        ${listingId},
        ${item.slug},
        ${item.type},
        ${item.title},
        ${item.tagline},
        ${item.description},
        ${item.price},
        ${creator.id},
        ${sql.json(item.categories)},
        ${sql.json(item.tags)},
        ${item.agentCount},
        ${item.installCount},
        ${item.rating},
        ${item.reviewCount},
        ${item.status}
      )
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        tagline = EXCLUDED.tagline,
        description = EXCLUDED.description,
        price = EXCLUDED.price,
        categories = EXCLUDED.categories,
        tags = EXCLUDED.tags,
        agent_count = EXCLUDED.agent_count,
        install_count = EXCLUDED.install_count,
        rating = EXCLUDED.rating,
        review_count = EXCLUDED.review_count,
        status = EXCLUDED.status
      RETURNING id, slug, title
    `;

    if (item.agents) {
      await sql`
        INSERT INTO team_blueprints (
          id, listing_id, agents, reporting_chain, governance
        )
        VALUES (
          ${crypto.randomUUID()},
          ${inserted.id},
          ${sql.json(item.agents)},
          ${sql.json({ root: item.agents[0].name })},
          ${sql.json({ budgetMonthlyCents: 50000, canApproveHires: true })}
        )
        ON CONFLICT DO NOTHING
      `;
    }

    console.log(`✓ Seeded: [${item.type}] ${item.title}`);
  }

  console.log('\nAll marketplace blueprints and listings seeded successfully!');
  await sql.end();
}

seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
