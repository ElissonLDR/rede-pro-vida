import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Rede Pró Vida Belém" },
      {
        name: "description",
        content:
          "Saiba como a Rede Pró Vida Belém coleta, usa e protege seus dados pessoais, incluindo medição de audiência via Google Tag Manager.",
      },
      { property: "og:title", content: "Política de Privacidade — Rede Pró Vida Belém" },
      {
        property: "og:description",
        content:
          "Saiba como a Rede Pró Vida Belém coleta, usa e protege seus dados pessoais, incluindo medição de audiência via Google Tag Manager.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicy,
});

const sections: { title: string; paragraphs: string[]; list?: string[] }[] = [
  {
    title: "1. Quem somos",
    paragraphs: [
      "A Rede Pró Vida Belém é uma rede de serviços de saúde localizada na Rua Veiga Cabral — Cidade Velha, Belém - PA, telefone/WhatsApp (91) 9302-2218, e-mail contato@redeprovidabelem.com.br. Esta política explica como tratamos dados pessoais coletados por meio deste site, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).",
    ],
  },
  {
    title: "2. Dados que coletamos",
    paragraphs: [
      "Ao navegar neste site, coletamos automaticamente informações técnicas de uso, por meio de ferramentas de medição de audiência:",
    ],
    list: [
      "Páginas visitadas, tempo de permanência e interações com a página (cliques em botões, envios de formulário);",
      "Informações do dispositivo e do navegador (tipo, sistema operacional, idioma);",
      "Endereço IP (parcialmente anonimizado pelas ferramentas de medição) e geolocalização aproximada (país/cidade);",
      "Fonte de origem da visita (por exemplo, campanha de anúncios, busca orgânica ou acesso direto);",
      "Identificadores de cookies e identificadores publicitários associados ao seu navegador.",
    ],
  },
  {
    title: "3. Dados que você nos fornece",
    paragraphs: [
      "Ao enviar o formulário de agendamento ou entrar em contato pelo WhatsApp, você nos fornece nome, telefone e informações sobre o atendimento desejado. Esses dados são usados exclusivamente para responder ao seu contato, agendar consultas, exames ou cirurgias e prestar informações sobre nossos serviços.",
    ],
  },
  {
    title: "4. Google Tag Manager e Google Ads",
    paragraphs: [
      "Este site utiliza o Google Tag Manager, ferramenta do Google LLC, para gerenciar códigos de medição de audiência e desempenho de campanhas. Por meio dele podem ser carregadas tags do Google Ads e de produtos de medição do Google, que utilizam cookies e identificadores para:",
    ],
    list: [
      "Medir o desempenho de campanhas de anúncios (cliques, impressões e conversões, como envios de formulário e contatos via WhatsApp);",
      "Otimizar campanhas publicitárias e mensurar o retorno dos investimentos em mídia;",
      "Gerar relatórios agregados e anônimos de uso do site.",
    ],
    // extra paragraph appended below via paragraphs[1]
  },
  {
    title: "5. Compartilhamento de dados",
    paragraphs: [
      "Os dados de medição são compartilhados com o Google LLC (e suas subsidiárias), residente nos Estados Unidos, na condição de fornecedor da plataforma de medição e anúncios. Não vendemos, alugamos nem compartilhamos seus dados pessoais com outras empresas para fins publicitários de terceiros.",
    ],
  },
  {
    title: "6. Base legal e retenção",
    paragraphs: [
      "O tratamento dos dados de navegação para medição e otimização de campanhas é realizado com base no nosso legítimo interesse em divulgar nossos serviços de saúde e melhorar a experiência do site. Os dados fornecidos voluntariamente (formulário/WhatsApp) são tratados com base no seu consentimento e na execução do atendimento solicitado. Os dados de medição são retidos pelo Google pelos prazos definidos nas configurações da ferramenta; os dados de contato são mantidos pelo tempo necessário ao atendimento.",
    ],
  },
  {
    title: "7. Seus direitos e como optar por não ser medido",
    paragraphs: [
      "Nos termos da LGPD, você pode solicitar a qualquer momento: confirmação de tratamento, acesso aos dados, correção, anonimização, bloqueio ou eliminação de dados desnecessários, além da revogação do consentimento. Para exercer esses direitos, entre em contato pelo e-mail contato@redeprovidabelem.com.br.",
      "Você também pode, por conta própria:",
    ],
    list: [
      "Bloquear ou excluir cookies nas configurações do seu navegador;",
      "Desativar a personalização de anúncios do Google em https://adssettings.google.com;",
      "Instalar o componente de desativação do Google Analytics em https://tools.google.com/dlpage/gaoptout;",
      "Utilizar navegadores ou extensões que bloqueiam rastreadores.",
    ],
  },
  {
    title: "8. Visitantes da União Europeia, Reino Unido e Suíça",
    paragraphs: [
      "Para visitantes dessas regiões, as ferramentas de medição deste site permanecem desativadas por padrão, em respeito às normas locais de consentimento de cookies (GDPR/ePrivacy), e não carregam tags de medição enquanto não houver consentimento.",
    ],
  },
  {
    title: "9. Segurança e atualizações desta política",
    paragraphs: [
      "Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou alteração indevida. Esta política pode ser atualizada periodicamente; a data da última revisão está indicada ao final da página.",
    ],
  },
];

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main className="mx-auto max-w-3xl px-4 md:px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[var(--petrol)] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar para a página inicial
        </Link>

        <h1 className="mt-8 text-4xl font-bold text-[var(--petrol)]">
          Política de Privacidade
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Última atualização: setembro de 2026
        </p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.list && (
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground list-disc pl-5">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              10. Contato do encarregado (DPO)
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Para dúvidas sobre esta política ou solicitações relacionadas aos seus
              dados, entre em contato com nosso encarregado de proteção de dados pelo
              e-mail{" "}
              <a
                href="mailto:contato@redeprovidabelem.com.br"
                className="text-[var(--petrol)] hover:underline"
              >
                contato@redeprovidabelem.com.br
              </a>{" "}
              ou pelo WhatsApp{" "}
              <a
                href="https://wa.me/559193022218"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--petrol)] hover:underline"
              >
                (91) 9302-2218
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <Link to="/">
            <Button className="bg-[var(--whatsapp)] hover:bg-[var(--whatsapp-hover)] text-white rounded-xl">
              Voltar ao site
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
