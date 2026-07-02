import {
  BarChart3,
  Blocks,
  Boxes,
  Braces,
  ChartLine,
  ChartNoAxesCombined,
  ClipboardCheck,
  Database,
  FileBarChart,
  FileCog,
  FileText,
  Gauge,
  Globe,
  KeyRound,
  Layers,
  MonitorCog,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  PlugZap,
  Route,
  ServerCog,
  ShoppingCart,
  Workflow,
} from "lucide-react";
import {
  siFastapi,
  siGit,
  siPuppeteer,
  siPython,
  siReact,
  siSqlite,
  siTailwindcss,
  siTypescript,
  siVite,
} from "simple-icons";

const brandIcons = {
  react: siReact,
  vite: siVite,
  "tailwind css": siTailwindcss,
  python: siPython,
  fastapi: siFastapi,
  sqlite: siSqlite,
  puppeteer: siPuppeteer,
  typescript: siTypescript,
  git: siGit,
};

const fallbackIcons = [
  { match: ["sistemas web modernos", "modern web systems"], Icon: Globe },
  { match: ["interfaces responsivas", "responsive interfaces"], Icon: MonitorSmartphone },
  { match: ["aplicacoes para totens", "kiosk applications"], Icon: MonitorCog },
  { match: ["experiencia do usuario", "user experience"], Icon: MousePointerClick },
  { match: ["design limpo", "minimalist design"], Icon: Palette },
  { match: ["fluxos intuitivos", "intuitive flows"], Icon: Route },
  { match: ["desenvolvimento back-end", "back-end development"], Icon: ServerCog },
  { match: ["apis rest"], Icon: Braces },
  { match: ["autenticacao de usuarios", "user authentication"], Icon: KeyRound },
  { match: ["modulos de erp", "erp modules"], Icon: Blocks },
  { match: ["integracao com sistemas externos", "external system integration"], Icon: PlugZap },
  { match: ["regras de negocio", "business rules"], Icon: ClipboardCheck },
  { match: ["dashboards gerenciais", "management dashboards"], Icon: ChartNoAxesCombined },
  { match: ["analise de dados", "data analysis"], Icon: ChartLine },
  { match: ["automacao de processos", "process automation"], Icon: Workflow },
  { match: ["relatorios operacionais", "operational reports"], Icon: FileBarChart },
  { match: ["geracao automatica de pdfs", "automatic pdf generation"], Icon: FileCog },
  { match: ["melhoria de fluxos internos", "internal workflow improvement"], Icon: Gauge },
  { match: ["context api", "api modeling", "modelagem de apis"], Icon: Braces },
  { match: ["design", "ui"], Icon: Palette },
  { match: ["data", "dados", "analysis", "análise"], Icon: BarChart3 },
  { match: ["power bi", "excel"], Icon: BarChart3 },
  { match: ["sql"], Icon: Database },
  { match: ["aws"], Icon: Boxes },
  { match: ["pdf", "document"], Icon: FileText },
  { match: ["kiosk", "totem"], Icon: MonitorCog },
  { match: ["compras", "purchasing"], Icon: ShoppingCart },
  { match: ["process", "processos", "automation", "automação"], Icon: Workflow },
  { match: ["database", "banco"], Icon: Database },
];

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function SkillIcon({ name }) {
  const normalizedName = normalize(name);
  const brandIcon = brandIcons[normalizedName];

  if (brandIcon) {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0"
        role="img"
        aria-label={brandIcon.title}
      >
        <path fill="currentColor" d={brandIcon.path} />
      </svg>
    );
  }

  const fallback = fallbackIcons.find(({ match }) =>
    match.some((keyword) => normalizedName.includes(normalize(keyword)))
  );
  const Icon = fallback?.Icon || Layers;

  return <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />;
}
