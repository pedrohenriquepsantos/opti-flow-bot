import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  Bot,
  Clock,
  Zap,
  Users,
  ArrowRightLeft,
  TrendingDown,
  Scale,
  Check,
  ArrowRight,
  Sparkles,
  Plug,
  Workflow,
  Settings2,
  Rocket,
  BarChart3,
  Star,
  Menu,
  Brain,
  Shield,
  Headphones,
  ChevronDown,
  ShoppingBag,
  Shirt,
  Footprints,
  Watch,
  Gem,
  Tag,
  MapPin,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OptFlow — Automação Inteligente para WhatsApp" },
      {
        name: "description",
        content:
          "Automatize seu WhatsApp e atenda clientes 24h por dia. Qualifique leads, agende serviços e venda mais com a OptFlow.",
      },
      { property: "og:title", content: "OptFlow — Automatize seu WhatsApp" },
      {
        property: "og:description",
        content:
          "Transforme seu WhatsApp em um atendente automático com IA. Responda, qualifique e venda 24/7.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const WHATSAPP_URL = "https://wa.me/5500000000000";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <LogoStrip />
      <Benefits />
      <HowItWorks />
      <Features />
      <Pricing />
      <Differentiators />
      <Testimonials />
      <FAQ />
      <StoreShopping />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ───────────────── NAV ───────────────── */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#beneficios", label: "Benefícios" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#recursos", label: "Recursos" },
    { href: "#planos", label: "Planos" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <Logo />
          <span className="text-lg font-bold tracking-tight">OptFlow</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={WHATSAPP_URL}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md border border-border p-2 md:hidden"
          aria-label="Menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background/95 md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)]">
      <Workflow className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
    </div>
  );
}

/* ───────────────── HERO ───────────────── */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-32 lg:pt-28">
        <div className="animate-[fade-up_0.7s_ease-out_both]">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Automação com IA para WhatsApp
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Automação Inteligente para WhatsApp que{" "}
            <span className="text-gradient">trabalha 24 horas</span> por dia
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Transforme seu WhatsApp em um atendente automático capaz de responder
            clientes, qualificar leads, agendar serviços e encaminhar atendimentos
            para sua equipe — sem complicação.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              Solicitar Demonstração
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4 text-accent" />
              Falar no WhatsApp
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <Trust icon={Check} label="Sem instalação" />
            <Trust icon={Check} label="Use seu número atual" />
            <Trust icon={Check} label="Implementação em dias" />
          </div>
        </div>

        <HeroMock />
      </div>
    </section>
  );
}

function Trust({ icon: Icon, label }: { icon: typeof Check; label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <Icon className="h-4 w-4 text-primary" />
      {label}
    </span>
  );
}

function HeroMock() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-3xl" />
      <div className="glass relative rounded-3xl p-5 shadow-[var(--shadow-card)] animate-float">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-accent/20">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold">OptFlow Bot</p>
              <p className="text-xs text-accent">● online</p>
            </div>
          </div>
          <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
            WhatsApp
          </span>
        </div>
        <div className="space-y-3">
          <Bubble side="in">Olá! Bem-vindo à OptFlow 👋 Como posso te ajudar?</Bubble>
          <Bubble side="in">
            <span className="block text-xs text-muted-foreground">Escolha uma opção:</span>
            <span className="mt-1 block">1️⃣ Falar com vendas</span>
            <span>2️⃣ Agendar demonstração</span>
            <span>3️⃣ Suporte</span>
          </Bubble>
          <Bubble side="out">2</Bubble>
          <Bubble side="in">
            Perfeito! Pode me dizer seu nome e o melhor horário para a demo?
          </Bubble>
          <div className="flex items-center gap-2 rounded-2xl bg-secondary/60 px-3 py-2">
            <div className="flex gap-1">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent [animation-delay:0ms]" />
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent [animation-delay:150ms]" />
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent [animation-delay:300ms]" />
            </div>
            <span className="text-xs text-muted-foreground">qualificando lead…</span>
          </div>
        </div>
      </div>

      {/* floating cards */}
      <div className="glass absolute -left-6 top-12 hidden rounded-2xl px-4 py-3 shadow-[var(--shadow-card)] sm:block animate-float [animation-delay:1s]">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15">
            <Brain className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">IA ativa</p>
            <p className="text-sm font-semibold">+312 leads/mês</p>
          </div>
        </div>
      </div>
      <div className="glass absolute -bottom-4 -right-2 hidden rounded-2xl px-4 py-3 shadow-[var(--shadow-card)] sm:block animate-float [animation-delay:2s]">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent/20">
            <Clock className="h-4 w-4 text-accent" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Resposta média</p>
            <p className="text-sm font-semibold">&lt; 2 segundos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ side, children }: { side: "in" | "out"; children: React.ReactNode }) {
  const isIn = side === "in";
  return (
    <div className={isIn ? "flex" : "flex justify-end"}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isIn
            ? "rounded-tl-sm bg-secondary text-foreground"
            : "rounded-tr-sm bg-accent text-accent-foreground"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function LogoStrip() {
  const items = ["AutoFlow", "VendaJá", "ClínicaPro", "ImobMax", "EduTech", "LogiStart"];
  return (
    <section className="border-y border-border/50 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Empresas que confiam na OptFlow
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70">
          {items.map((n) => (
            <span key={n} className="text-lg font-semibold tracking-tight text-muted-foreground">
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── BENEFITS ───────────────── */
function Benefits() {
  const items = [
    { icon: Clock, t: "Atendimento 24/7", d: "Responda seus clientes a qualquer hora do dia ou da noite." },
    { icon: Zap, t: "Mais Agilidade", d: "Reduza o tempo de resposta e aumente a satisfação dos clientes." },
    { icon: Users, t: "Captação de Leads", d: "Colete informações importantes antes mesmo do atendimento humano." },
    { icon: ArrowRightLeft, t: "Transferência Inteligente", d: "Encaminhe automaticamente para o setor ou responsável correto." },
    { icon: TrendingDown, t: "Redução de Custos", d: "Diminua o tempo gasto com tarefas repetitivas." },
    { icon: Scale, t: "Escalabilidade", d: "Atenda dezenas ou centenas de clientes simultaneamente." },
  ];
  return (
    <Section id="beneficios" eyebrow="Benefícios" title="Por que automatizar seu atendimento?">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, t, d }) => (
          <div
            key={t}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────── HOW IT WORKS ───────────────── */
function HowItWorks() {
  const steps = [
    { icon: Plug, t: "Conectamos seu WhatsApp", n: "01" },
    { icon: Workflow, t: "Configuramos o fluxo de atendimento", n: "02" },
    { icon: Settings2, t: "Personalizamos perguntas e respostas", n: "03" },
    { icon: Rocket, t: "Sua empresa começa a atender automaticamente", n: "04" },
    { icon: BarChart3, t: "Você acompanha tudo em tempo real", n: "05" },
  ];
  return (
    <Section id="como-funciona" eyebrow="Como Funciona" title="Seu WhatsApp trabalhando por você">
      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:block" />
        <div className="grid gap-5 lg:grid-cols-5">
          {steps.map(({ icon: Icon, t, n }, i) => (
            <div
              key={n}
              className="glass relative rounded-2xl p-6 transition-all hover:border-primary/40"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider text-primary">{n}</span>
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <p className="mt-6 text-sm font-medium leading-snug">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ───────────────── FEATURES ───────────────── */
function Features() {
  const list = [
    "Menus interativos",
    "Respostas automáticas",
    "Integração com IA",
    "Horário de atendimento",
    "Encaminhamento para humano",
    "Captura de leads",
    "Qualificação de clientes",
    "Mensagens automáticas",
    "FAQ automatizado",
    "Múltiplos setores",
    "Histórico de atendimento",
    "Relatórios básicos",
    "Integrações personalizadas",
  ];
  return (
    <Section id="recursos" eyebrow="Recursos" title="Tudo que sua empresa precisa">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((f) => (
          <div
            key={f}
            className="flex items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3.5 transition-colors hover:border-primary/40 hover:bg-card"
          >
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-primary/15">
              <Check className="h-4 w-4 text-primary" />
            </span>
            <span className="text-sm font-medium">{f}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────── PRICING ───────────────── */
function Pricing() {
  return (
    <Section id="planos" eyebrow="Planos" title="Escolha o plano ideal para o seu negócio">
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
        <PlanCard
          name="Básico"
          price="119"
          cents=",00"
          tagline="Ideal para pequenos negócios."
          features={[
            "1 WhatsApp",
            "Menu automático",
            "Mensagens automáticas",
            "Horário de funcionamento",
            "Encaminhamento para humano",
            "Suporte básico",
          ]}
          cta="Começar Agora"
        />
        <PlanCard
          name="Profissional"
          price="199"
          cents=",90"
          tagline="Para empresas que desejam automatizar vendas e atendimento."
          features={[
            "Tudo do plano Básico",
            "Inteligência Artificial",
            "Captação de leads",
            "Qualificação automática",
            "Integrações personalizadas",
            "Relatórios",
            "Fluxos avançados",
            "Suporte prioritário",
          ]}
          cta="Solicitar Demonstração"
          highlight
        />
      </div>
    </Section>
  );
}

function PlanCard({
  name,
  price,
  cents,
  tagline,
  features,
  cta,
  highlight,
}: {
  name: string;
  price: string;
  cents: string;
  tagline: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl border p-8 transition-all ${
        highlight
          ? "border-primary/50 bg-gradient-to-b from-primary/10 to-transparent shadow-[var(--shadow-glow)]"
          : "border-border bg-card"
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          Mais escolhido
        </span>
      )}
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Plano {name}
      </h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-sm font-medium text-muted-foreground">R$</span>
        <span className="text-5xl font-bold tracking-tight">{price}</span>
        <span className="text-2xl font-bold">{cents}</span>
        <span className="ml-1 text-sm text-muted-foreground">/mês</span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{tagline}</p>
      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${highlight ? "text-primary" : "text-accent"}`} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contato"
        className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
          highlight
            ? "bg-primary text-primary-foreground hover:scale-[1.02]"
            : "border border-border bg-secondary/40 hover:bg-secondary"
        }`}
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

/* ───────────────── DIFFERENTIATORS ───────────────── */
function Differentiators() {
  const items = [
    { icon: Headphones, t: "Atendimento personalizado" },
    { icon: Rocket, t: "Implementação rápida" },
    { icon: Sparkles, t: "Sem necessidade técnica" },
    { icon: Workflow, t: "Fluxos sob medida" },
    { icon: Shield, t: "Suporte contínuo" },
    { icon: Brain, t: "Tecnologia moderna" },
    { icon: Zap, t: "Alta disponibilidade" },
    { icon: Scale, t: "Escalável para crescimento" },
  ];
  return (
    <Section eyebrow="Diferenciais" title="Por que escolher a OptFlow?">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, t }) => (
          <div
            key={t}
            className="group flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 transition-colors group-hover:bg-accent/25">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <p className="text-sm font-semibold leading-snug">{t}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────── TESTIMONIALS ───────────────── */
function Testimonials() {
  const items = [
    {
      n: "Marina Costa",
      r: "Diretora — Clínica Bem-Estar",
      q: "Reduzimos 70% do tempo de resposta. Agora atendemos pacientes de madrugada sem esforço.",
    },
    {
      n: "Ricardo Almeida",
      r: "CEO — ImobMax",
      q: "Triplicamos a captação de leads qualificados em 2 meses. A IA realmente entende nossos clientes.",
    },
    {
      n: "Juliana Pires",
      r: "Gerente — VendaJá",
      q: "A equipe finalmente foca em vendas. As tarefas repetitivas viraram passado com a OptFlow.",
    },
  ];
  return (
    <Section eyebrow="Depoimentos" title="O que dizem nossos clientes">
      <div className="grid gap-5 lg:grid-cols-3">
        {items.map((it) => (
          <figure
            key={it.n}
            className="flex flex-col rounded-2xl border border-border bg-card p-7"
          >
            <div className="flex gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/90">
              “{it.q}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
                {it.n[0]}
              </div>
              <div>
                <p className="text-sm font-semibold">{it.n}</p>
                <p className="text-xs text-muted-foreground">{it.r}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────── FAQ ───────────────── */
function FAQ() {
  const items = [
    {
      q: "A automação substitui meus atendentes?",
      a: "Não. Ela automatiza tarefas repetitivas e encaminha casos específicos para sua equipe humana.",
    },
    { q: "Posso usar meu número atual?", a: "Sim, você mantém o mesmo número de WhatsApp." },
    {
      q: "Quanto tempo leva para configurar?",
      a: "Normalmente em poucos dias, dependendo da complexidade do seu fluxo.",
    },
    { q: "Preciso instalar algo?", a: "Não. Tudo funciona na nuvem, sem instalação." },
    { q: "Posso cancelar quando quiser?", a: "Sim. Sem fidelidade nem multas." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" eyebrow="FAQ" title="Perguntas frequentes">
      <div className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <button
              key={it.q}
              onClick={() => setOpen(isOpen ? null : i)}
              className="block w-full px-6 py-5 text-left transition-colors hover:bg-secondary/40"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold sm:text-base">{it.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    isOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </div>
              {isOpen && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground animate-[fade-up_0.3s_ease-out_both]">
                  {it.a}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </Section>
  );
}

/* ───────────────── FINAL CTA ───────────────── */
function FinalCTA() {
  return (
    <section id="contato" className="px-6 py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-primary/15 via-card to-accent/10 p-10 text-center sm:p-16">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Comece em poucos dias
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            Pronto para <span className="text-gradient">automatizar seu WhatsApp?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Pare de perder clientes por demora no atendimento. Automatize sua operação e
            permita que sua empresa atenda mais pessoas com menos esforço.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              Falar com Especialista
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4 text-accent" />
              WhatsApp Direto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── FOOTER ───────────────── */
function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-lg font-bold tracking-tight">OptFlow</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Automatize seu WhatsApp. Venda mais. Atenda melhor.
          </p>
        </div>
        <FooterCol
          title="Navegação"
          links={[
            ["Início", "#"],
            ["Recursos", "#recursos"],
            ["Planos", "#planos"],
          ]}
        />
        <FooterCol
          title="Contato"
          links={[
            ["WhatsApp", WHATSAPP_URL],
            ["Solicitar Demonstração", "#contato"],
          ]}
        />
        <FooterCol
          title="Legal"
          links={[
            ["Termos de Uso", "#"],
            ["Política de Privacidade", "#"],
          ]}
        />
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} OptFlow. Todos os direitos reservados.</span>
          <span>Feito com tecnologia e ☕</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───────────────── SECTION WRAPPER ───────────────── */
function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
