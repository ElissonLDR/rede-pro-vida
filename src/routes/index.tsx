import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2, MessageCircle, Menu, X, Stethoscope, Building2, Zap, Wallet,
  UserRound, Sofa, Calendar, PhoneCall, ClipboardCheck, HeartPulse,
  FlaskConical, Scissors, Smile, Briefcase, Package, Star, MapPin, Clock,
  ShieldCheck, AlertCircle, ArrowRight, Phone, Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import logoAsset from "@/assets/logo-provida.svg.asset.json";
import heroDoctor from "@/assets/hero-doctor.jpg";

const WA_NUMBER = "559193022218";
const WA_MSG = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de agendar um atendimento.",
);
const waLink = (extra?: string) =>
  `https://wa.me/${WA_NUMBER}?text=${extra ? encodeURIComponent(extra) : WA_MSG}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rede Pró Vida Belém — Consultas, Exames e Cirurgias Acessíveis" },
      {
        name: "description",
        content:
          "Mais de 20 especialidades médicas em um só lugar. Consultas, exames e cirurgias com preço justo e atendimento humanizado em Belém. Agende no WhatsApp.",
      },
      { property: "og:title", content: "Rede Pró Vida Belém — Consultas, Exames e Cirurgias Acessíveis" },
      {
        property: "og:description",
        content:
          "Mais de 20 especialidades médicas em um só lugar. Consultas, exames e cirurgias com preço justo e atendimento humanizado em Belém. Agende no WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>
        <Hero />
        <Pains />
        <HowItWorks />
        <Differentials />
        <Services />
        <Combos />
        <Testimonials />
        <Numbers />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyCTA />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#servicos", label: "Serviços" },
    { href: "#combos", label: "Combos" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="Rede Pró Vida Belém" className="h-8 md:h-10 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:+${WA_NUMBER}`} className="hidden lg:flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary">
            <Phone className="h-4 w-4" /> (91) 9302-2218
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[var(--whatsapp)] hover:bg-[var(--whatsapp-hover)] text-white gap-2 shadow-sm">
              <MessageCircle className="h-4 w-4" /> Agendar no WhatsApp
            </Button>
          </a>
        </div>
        <button className="md:hidden p-2 -mr-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-2 text-base font-medium" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-[var(--whatsapp)] hover:bg-[var(--whatsapp-hover)] text-white gap-2">
                <MessageCircle className="h-4 w-4" /> Agendar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* subtle blue accents */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_10%,rgba(27,117,188,0.08),transparent_55%),radial-gradient(circle_at_85%_0%,rgba(74,155,216,0.10),transparent_55%)]" />
      <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[var(--coral-soft)] blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* copy */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--coral-soft)] bg-[var(--coral-soft)]/60 px-3.5 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--whatsapp)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--whatsapp)]" />
            </span>
            <span className="text-xs md:text-sm font-medium text-[var(--petrol)]">
              Agendamento aberto hoje — resposta em minutos
            </span>
          </div>

          <h1 className="mt-6 text-[2.5rem] leading-[1.05] md:text-6xl lg:text-[4.25rem] font-semibold tracking-tight text-foreground">
            Sua saúde <span className="text-[var(--petrol)] font-bold">não pode</span> esperar
            <br className="hidden md:block" /> por uma vaga no SUS.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Consultas a partir de <strong className="text-foreground">R$ 80</strong>, exames e cirurgias
            com preço fechado — <strong className="text-foreground">+20 especialidades</strong> no mesmo lugar,
            em Belém, com agendamento direto no WhatsApp.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-[var(--whatsapp)] hover:bg-[var(--whatsapp-hover)] text-white gap-2 text-base h-14 px-8 shadow-lg shadow-[var(--whatsapp)]/25 font-semibold rounded-xl">
                <MessageCircle className="h-5 w-5" /> Agendar agora no WhatsApp
              </Button>
            </a>
            <a href="#combos" className="sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-7 border-[var(--petrol)] bg-white text-[var(--petrol)] hover:bg-[var(--coral-soft)] hover:text-[var(--petrol)] text-base rounded-xl">
                Ver combos e preços <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </a>
          </div>

          {/* trust row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[0,1,2,3,4].map((i) => (
                  <Star key={i} className="h-4 w-4 text-[var(--petrol)] fill-[var(--petrol)]" />
                ))}
              </div>
              <span><strong className="text-foreground">4.9</strong> no Google</span>
            </div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[var(--whatsapp)]" /> Preço fechado, sem surpresa</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-[var(--whatsapp)]" /> Vagas para esta semana</div>
          </div>

          {/* stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl border-t border-border pt-8">
            {[
              { n: "+10", l: "Anos em Belém" },
              { n: "+20", l: "Especialidades" },
              { n: "+50k", l: "Pacientes atendidos" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl md:text-4xl font-bold text-[var(--petrol)]">{s.n}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* image column */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[var(--coral-soft)] blur-2xl opacity-60" />
          <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-border shadow-xl shadow-[var(--petrol)]/10">
            <img src={heroDoctor} alt="Médica em atendimento humanizado na Rede Pró Vida Belém" width={1280} height={1280} className="w-full h-auto object-cover" />
          </div>

          {/* floating price card */}
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white text-foreground rounded-2xl shadow-xl p-4 pr-5 flex items-center gap-3 ring-1 ring-border max-w-[16rem]">
            <div className="h-11 w-11 rounded-xl bg-[var(--whatsapp)]/10 grid place-items-center shrink-0">
              <Wallet className="h-5 w-5 text-[var(--whatsapp)]" />
            </div>
            <div>
              <div className="text-[0.7rem] uppercase tracking-wide text-muted-foreground font-semibold">Consulta a partir de</div>
              <div className="text-xl font-bold leading-tight text-[var(--petrol)]">R$ 80,00</div>
            </div>
          </div>

          {/* floating rating */}
          <div className="hidden md:flex absolute -top-4 -right-4 bg-white text-foreground rounded-2xl shadow-lg px-4 py-3 items-center gap-2 ring-1 ring-border">
            <Star className="h-4 w-4 text-[var(--petrol)] fill-[var(--petrol)]" />
            <span className="text-sm font-semibold text-[var(--petrol)]">4.9 no Google</span>
          </div>
        </div>
      </div>

      {/* bottom trust bar */}
      <div className="relative border-t border-border bg-[var(--soft)]">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-2 text-xs md:text-sm text-muted-foreground">
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--petrol)]" /> 3 unidades em Belém</div>
          <div className="flex items-center gap-2"><Stethoscope className="h-4 w-4 text-[var(--petrol)]" /> Clínico, Cardio, Pediatria, Ginecologia…</div>
          <div className="flex items-center gap-2"><FlaskConical className="h-4 w-4 text-[var(--petrol)]" /> Exames laboratoriais e de imagem</div>
          <div className="flex items-center gap-2"><Scissors className="h-4 w-4 text-[var(--petrol)]" /> Cirurgias com pacote fechado</div>
        </div>
      </div>
    </section>
  );
}


/* ---------------- Pains ---------------- */
function Pains() {
  const items = [
    "Adiando a consulta porque o particular é caro demais?",
    "Rodando clínica, laboratório e hospital pra fechar um só tratamento?",
    "Esperando semanas por um horário disponível no sistema?",
    "Sem saber o valor final até chegar no balcão da clínica?",
  ];
  return (
    <section className="bg-[var(--soft)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Badge className="bg-[var(--coral-soft)] hover:bg-[var(--coral-soft)] text-[var(--petrol)] border-0 mb-5">Talvez você se identifique</Badge>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-foreground">
            Sua saúde (e a da sua família) está passando por isso?
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {items.map((it) => (
            <div key={it} className="group flex gap-4 rounded-2xl bg-white hover:shadow-md transition-shadow border border-border p-6 shadow-sm">
              <div className="shrink-0 h-11 w-11 rounded-xl bg-[var(--coral-soft)] grid place-items-center">
                <AlertCircle className="h-5 w-5 text-[var(--petrol)]" />
              </div>
              <p className="text-lg text-foreground leading-snug pt-1">{it}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href={waLink()} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[var(--whatsapp)] hover:bg-[var(--whatsapp-hover)] text-white gap-2 h-14 px-7 rounded-xl">
              <MessageCircle className="h-5 w-5" /> Resolver agora no WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}


/* ---------------- How it works ---------------- */
function HowItWorks() {
  const steps = [
    { i: PhoneCall, t: "Fale com a gente", d: "Chame no WhatsApp e conte o que você precisa." },
    { i: ClipboardCheck, t: "Escolha", d: "Consulta, exame, cirurgia ou um combo completo." },
    { i: Calendar, t: "Agende", d: "Marcamos o horário mais rápido para você." },
    { i: HeartPulse, t: "Cuide-se", d: "Atendimento humanizado, do jeito que você merece." },
  ];
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest text-[var(--coral)]">Como funciona</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[var(--petrol)] leading-tight">
            Seu cuidado completo em 4 passos simples
          </h2>
        </div>
        <div className="mt-16 relative grid md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[var(--petrol)]/25 to-transparent" />
          {steps.map((s, i) => (
            <div key={s.t} className="relative text-center">
              <div className="relative mx-auto h-16 w-16 rounded-2xl bg-[var(--coral-soft)] text-[var(--petrol)] grid place-items-center">
                <s.i className="h-7 w-7" />
                <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-[var(--petrol)] text-white text-sm font-bold grid place-items-center ring-4 ring-white">
                  {i + 1}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-[var(--petrol)]">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Differentials ---------------- */
function Differentials() {
  const items = [
    { i: Stethoscope, t: "Atendimento Humanizado", d: "Cuidado próximo e sem pressa, do jeito que você precisa." },
    { i: Building2, t: "Mais de 20 Especialidades", d: "Tudo em um só lugar, sem precisar procurar em outro canto." },
    { i: Zap, t: "Agendamento Rápido", d: "Sem espera longa pra marcar sua consulta." },
    { i: Wallet, t: "Preços Acessíveis", d: "Qualidade que cabe no seu bolso." },
    { i: UserRound, t: "Equipe Experiente", d: "Profissionais altamente qualificados cuidando de você." },
    { i: Sofa, t: "Estrutura Confortável", d: "Ambiente moderno e pensado para o seu bem-estar." },
  ];
  return (
    <section className="bg-[var(--soft)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest text-[var(--coral)]">Diferenciais</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[var(--petrol)] leading-tight">
            Por que escolher a Rede Pró Vida Belém
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <Card key={it.t} className="border-0 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl">
              <CardContent className="p-7">
                <div className="h-12 w-12 rounded-xl bg-[var(--petrol)]/10 text-[var(--petrol)] grid place-items-center">
                  <it.i className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[var(--petrol)]">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const services = [
    { i: Stethoscope, t: "Consultas Médicas", d: "Mais de 20 especialidades com agendamento rápido.", msg: "Olá! Gostaria de agendar uma consulta médica." },
    { i: FlaskConical, t: "Exames", d: "Diagnósticos ágeis com equipamentos modernos.", msg: "Olá! Gostaria de agendar um exame." },
    { i: Scissors, t: "Cirurgias Acessíveis", d: "Procedimentos com equipe experiente e preço justo.", msg: "Olá! Gostaria de saber sobre cirurgias." },
    { i: Smile, t: "Odontologia", d: "Tratamentos completos, do preventivo ao avançado.", msg: "Olá! Gostaria de agendar um atendimento odontológico." },
    { i: Briefcase, t: "Medicina do Trabalho", d: "Exames e laudos dentro do prazo exigido por lei.", msg: "Olá! Gostaria de saber sobre medicina do trabalho." },
    { i: Package, t: "Combos Promocionais", d: "Consulta e exames juntos, com mais economia.", msg: "Olá! Gostaria de saber sobre os combos promocionais." },
  ];
  return (
    <section id="servicos" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest text-[var(--coral)]">Nossos serviços</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[var(--petrol)] leading-tight">
            Cuidado Completo Para Cada Etapa da Sua Saúde
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Encontre o serviço ideal para sua necessidade:</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Card key={s.t} className="group border border-border/60 bg-white hover:border-[var(--petrol)]/40 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
              <CardContent className="p-7 flex flex-col h-full">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[var(--petrol)] to-[var(--petrol-light)] text-white grid place-items-center shadow-md shadow-[var(--petrol)]/20">
                  <s.i className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[var(--petrol)]">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.d}</p>
                <a href={waLink(s.msg)} target="_blank" rel="noopener noreferrer" className="mt-5">
                  <Button variant="ghost" className="w-full justify-between text-[var(--whatsapp-hover)] hover:text-[var(--whatsapp-hover)] hover:bg-[var(--whatsapp)]/10 -mx-2">
                    <span className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Agendar no WhatsApp</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Combos ---------------- */
function Combos() {
  const combos = [
    {
      t: "Combo Saúde da Mulher",
      price: "199,00",
      items: ["Consulta ginecológica", "Exames laboratoriais de rotina", "Papanicolau"],
      popular: true,
    },
    {
      t: "Combo Check-up Pediátrico",
      price: "179,00",
      items: ["Consulta pediátrica", "Exames laboratoriais essenciais"],
    },
    {
      t: "Combo Pré-Cirúrgico",
      price: "249,00",
      items: ["Avaliação médica completa", "Risco cirúrgico", "Exames básicos"],
    },
    {
      t: "Combo Hipertensão e Diabetes",
      price: "189,00",
      items: ["Consulta médica", "Exames de acompanhamento e controle"],
    },
  ];
  return (
    <section id="combos" className="bg-[var(--soft)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest text-[var(--coral)]">Combos</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[var(--petrol)] leading-tight">
            Combos completos para cuidar de quem você ama
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {combos.map((c) => (
            <Card
              key={c.t}
              className={`relative rounded-2xl transition-all duration-300 hover:-translate-y-1 bg-white shadow-sm hover:shadow-xl ${
                c.popular
                  ? "border-2 border-[var(--petrol)] ring-1 ring-[var(--coral-soft)]"
                  : "border border-border"
              }`}
            >
              {c.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--petrol)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Mais Completo
                </div>
              )}
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-bold text-[var(--petrol)]">{c.t}</h3>
                <div className="mt-3">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">a partir de</div>
                  <div className="mt-1 text-3xl font-bold text-foreground">
                    R$ {c.price}
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5 flex-1">
                  {c.items.map((i) => (
                    <li key={i} className="flex gap-2.5 text-sm">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--whatsapp)]" />
                      <span className="text-foreground/80">{i}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Olá! Quero saber mais sobre o ${c.t}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6"
                >
                  <Button className="w-full gap-2 h-12 rounded-xl bg-[var(--whatsapp)] hover:bg-[var(--whatsapp-hover)] text-white">
                    <MessageCircle className="h-4 w-4" /> Quero esse combo
                  </Button>
                </a>
              </CardContent>
            </Card>

          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const tests = [
    { q: "Atendimento maravilhoso do início ao fim. Agendei no mesmo dia pelo WhatsApp e fiz minha consulta sem complicação.", n: "Maria S.", c: "Cidade Velha" },
    { q: "Excelente estrutura e os preços realmente cabem no bolso. Recomendo para toda a família.", n: "João P.", c: "Umarizal" },
    { q: "O atendimento humanizado faz toda a diferença. Médicos atenciosos e ambiente muito limpo e organizado.", n: "Ana C.", c: "Marco" },
  ];
  return (
    <section id="depoimentos" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest text-[var(--coral)]">Depoimentos</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[var(--petrol)] leading-tight">
            Quem já é paciente, recomenda
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {tests.map((t) => (
            <Card key={t.n} className="border border-border bg-white rounded-2xl shadow-sm">
              <CardContent className="p-7">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[var(--coral)] text-[var(--coral)]" />
                  ))}
                </div>
                <p className="mt-4 text-foreground/80 leading-relaxed">"{t.q}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-[var(--petrol)] text-white grid place-items-center font-bold">
                    {t.n.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--petrol)]">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.c}, Belém</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Numbers ---------------- */
function Numbers() {
  const stats = [
    { n: "10+", l: "Anos de atuação em Belém" },
    { n: "20+", l: "Especialidades médicas" },
    { n: "50k+", l: "Pacientes atendidos" },
    { n: "4.9★", l: "Nota no Google" },
  ];
  return (
    <section className="bg-white border-y border-border py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-[var(--petrol)]">{s.n}</div>
            <div className="mt-2 text-sm md:text-base text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>

    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQSection() {
  const faqs = [
    { q: "Preciso ter plano de saúde para ser atendido?", a: "Não! Atendemos de forma particular com preços acessíveis e condições facilitadas para quem não tem plano de saúde." },
    { q: "Quanto custa uma consulta particular?", a: "Oferecemos valores super acessíveis que cabem no seu bolso. Entre em contato pelo WhatsApp para conferir os valores atualizados por especialidade." },
    { q: "Vocês atendem crianças?", a: "Sim, contamos com pediatras experientes e estrutura acolhedora para atendimento infantil." },
    { q: "Consigo fazer consulta, exame e cirurgia no mesmo lugar?", a: "Sim! Nossa proposta é resolver toda a sua jornada de saúde em um só lugar, com agilidade e integração." },
    { q: "Como funciona o agendamento pelo WhatsApp?", a: "É simples e imediato. Basta clicar em qualquer botão desta página, falar com nossa equipe e escolher o melhor dia e horário." },
  ];
  return (
    <section id="faq" className="bg-[var(--soft)] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-widest text-[var(--coral)]">FAQ</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[var(--petrol)] leading-tight">
            Perguntas Frequentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-white rounded-xl border border-border/60 px-5 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-[var(--petrol)] hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- Final CTA + Form ---------------- */
function FinalCTA() {
  const [form, setForm] = useState({ nome: "", telefone: "", especialidade: "" });
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.nome}. Telefone: ${form.telefone}. Tenho interesse em: ${form.especialidade || "não informado"}. Gostaria de agendar um atendimento.`;
    window.open(waLink(msg), "_blank");
  }
  return (
    <section id="contato" className="relative bg-[var(--soft)] py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[var(--coral-soft)] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[var(--coral-soft)] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-foreground">
            Pronto para cuidar da sua saúde hoje?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-lg">
            Fale agora com a Rede Pró Vida Belém e agende seu atendimento no mesmo dia.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-foreground"><MapPin className="h-5 w-5 text-[var(--petrol)]" /> Rua Veiga Cabral — Cidade Velha, Belém - PA</div>
            <div className="flex items-center gap-3 text-foreground"><Clock className="h-5 w-5 text-[var(--petrol)]" /> Atendimento de segunda a sábado</div>
            <div className="flex items-center gap-3 text-foreground"><ShieldCheck className="h-5 w-5 text-[var(--petrol)]" /> Equipe qualificada e ambiente seguro</div>
          </div>
          <div className="mt-8">
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[var(--whatsapp)] hover:bg-[var(--whatsapp-hover)] text-white gap-2 h-14 px-7 rounded-xl">
                <MessageCircle className="h-5 w-5" /> Prefiro falar direto no WhatsApp
              </Button>
            </a>
          </div>
        </div>
        <Card className="bg-white text-foreground rounded-2xl shadow-xl border border-border">

          <CardContent className="p-7 md:p-8">
            <h3 className="text-2xl font-bold text-[var(--petrol)]">Agende em 1 minuto</h3>
            <p className="mt-1 text-sm text-muted-foreground">Preencha e nossa equipe fala com você no WhatsApp.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div>
                <Label htmlFor="nome" className="text-[var(--petrol)]">Nome completo</Label>
                <Input id="nome" required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} placeholder="Seu nome" className="mt-1.5 h-12" />
              </div>
              <div>
                <Label htmlFor="tel" className="text-[var(--petrol)]">Telefone (WhatsApp)</Label>
                <Input id="tel" required type="tel" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} placeholder="(91) 9 0000-0000" className="mt-1.5 h-12" />
              </div>
              <div>
                <Label className="text-[var(--petrol)]">Especialidade de interesse</Label>
                <Select value={form.especialidade} onValueChange={(v) => setForm({ ...form, especialidade: v })}>
                  <SelectTrigger className="mt-1.5 h-12"><SelectValue placeholder="Selecione uma opção" /></SelectTrigger>
                  <SelectContent>
                    {["Clínica Geral","Ginecologia","Pediatria","Cardiologia","Ortopedia","Dermatologia","Odontologia","Exames","Cirurgias","Medicina do Trabalho","Outra"].map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" size="lg" className="w-full h-14 bg-[var(--whatsapp)] hover:bg-[var(--whatsapp-hover)] text-white gap-2 text-base">
                <MessageCircle className="h-5 w-5" /> Agendar pelo WhatsApp
              </Button>
              <p className="text-xs text-muted-foreground text-center">Ao enviar, você concorda em ser contatado via WhatsApp.</p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-[var(--coral-soft)]/40 text-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logoAsset.url} alt="Rede Pró Vida Belém" className="h-10 w-auto" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            A Rede Pró Vida Belém nasceu para aproximar consultas, exames e cirurgias
            de quem mais precisa, com preço justo e atendimento de verdade. Estamos na
            Rua Veiga Cabral, no coração da Cidade Velha, prontos para cuidar de você
            e da sua família.
          </p>
          <div className="mt-6 space-y-2 text-sm text-foreground">
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--petrol)]" /> Rua Veiga Cabral — Cidade Velha, Belém - PA</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-[var(--petrol)]" /> (91) 9302-2218</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-[var(--petrol)]" /> contato@redeprovidabelem.com.br</div>
          </div>
        </div>
        <div>
          <h4 className="text-[var(--petrol)] font-bold mb-4">Serviços</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Consultas","Exames","Cirurgias","Odontologia","Medicina do Trabalho","Combos"].map((s) => (
              <li key={s}><a href="#servicos" className="hover:text-[var(--petrol)] transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[var(--petrol)] font-bold mb-4">Institucional</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#faq" className="hover:text-[var(--petrol)]">Perguntas frequentes</a></li>
            <li><a href="#depoimentos" className="hover:text-[var(--petrol)]">Depoimentos</a></li>
            <li><a href="#" className="hover:text-[var(--petrol)]">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-[var(--petrol)]">Política de Privacidade</a></li>
          </ul>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
            <Button className="bg-[var(--whatsapp)] hover:bg-[var(--whatsapp-hover)] text-white gap-2 rounded-xl">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Button>
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Rede Pró Vida Belém. Todos os direitos reservados.</div>
          <div>CNPJ 00.000.000/0001-00 · Belém - PA</div>
        </div>
      </div>

      {/* GTM / Meta Pixel placeholder */}
      {/* <script>...</script> */}
    </footer>
  );
}

/* ---------------- Floating & Sticky ---------------- */
function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[var(--whatsapp)] hover:bg-[var(--whatsapp-hover)] text-white items-center justify-center shadow-2xl wa-pulse transition-colors"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-border p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a href={waLink()} target="_blank" rel="noopener noreferrer">
        <Button size="lg" className="w-full h-13 bg-[var(--whatsapp)] hover:bg-[var(--whatsapp-hover)] text-white gap-2 h-13">
          <MessageCircle className="h-5 w-5" /> Agendar no WhatsApp
        </Button>
      </a>
    </div>
  );
}
