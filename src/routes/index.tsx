import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import wordmark from "@/assets/goat-smp-wordmark.png";

const SERVER_IP = "playgoatsmp.mcsh.io";
const DISCORD_URL = "https://discord.gg/RmZYwptrAF";

const RULES = [
  { title: "No Combat Logging", text: "Logging out during active PvP to avoid death or losing items is forbidden." },
  { title: "No Exploiting or Hacking", text: "Hacked clients, mods with unfair advantages, or game exploits are strictly prohibited." },
  { title: "No X-Raying", text: "X-ray texture packs, mods, or exploits used to find ores or bases are not allowed." },
  { title: "No Spawn Camping", text: "Do not trap, camp, or repeatedly kill players as they spawn or enter safe zones." },
  { title: "No Duping", text: "Duplicating items, blocks, or currency via glitches or bugs results in a permanent ban." },
  { title: "No Cheating in Any Way", text: "Play fair and keep the economy and gameplay balanced for everyone." },
];

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.515a.07.07 0 0 0-.032.027C.533 9.046-.319 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127c-.598.35-1.22.645-1.873.891a.077.077 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.029 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.028ZM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goat SMP — Minecraft Survival Multiplayer Server" },
      {
        name: "description",
        content:
          "Join Goat SMP, a fair-play Minecraft survival multiplayer server. Get the server IP, read the rules, and hop in the Discord.",
      },
      { property: "og:title", content: "Goat SMP — Minecraft SMP Server" },
      {
        property: "og:description",
        content: "Server IP, rules and Discord for Goat SMP, a fair-play Minecraft survival server.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [copied, setCopied] = useState(false);

  const copyIp = async () => {
    await navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <img src={wordmark} alt="Goat SMP" className="h-6 w-auto sm:h-7" />
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <DiscordIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Join the Discord</span>
            <span className="sm:hidden">Discord</span>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 pb-24">
        <section className="flex flex-col items-center pt-16 text-center sm:pt-24">
          <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
            Survival Multiplayer · Fair play only
          </span>
          <img
            src={wordmark}
            alt="Goat SMP logo"
            className="mt-8 w-full max-w-lg"
          />
          <h1 className="sr-only">Goat SMP</h1>
          <p className="mt-6 max-w-lg text-balance text-base text-muted-foreground sm:text-lg">
            A fair-play Minecraft survival multiplayer server. No cheats, no dupes — just survival,
            building and a community worth logging in for.
          </p>

          <div className="mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
            <div className="block-card flex flex-1 items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left">
              <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Server IP
                </p>
                <p className="truncate font-display text-base font-semibold">{SERVER_IP}</p>
              </div>
              <button
                onClick={copyIp}
                aria-label="Copy server IP"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <DiscordIcon className="h-5 w-5" />
              Join the Discord
            </a>
          </div>
        </section>

        <section className="mt-24" aria-labelledby="rules-heading">
          <div className="flex flex-col items-center text-center">
            <h2 id="rules-heading" className="text-2xl font-semibold sm:text-3xl">
              Server Rules
            </h2>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Six rules keep the server fair. Break them and you lose your spot.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RULES.map((rule, i) => (
              <li
                key={rule.title}
                className="block-card rounded-2xl p-6 transition-transform hover:-translate-y-1"
              >
                <p className="font-display text-xs font-semibold tracking-widest text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-base font-semibold">{rule.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{rule.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        Goat SMP · Not affiliated with Mojang or Microsoft
      </footer>
    </div>
  );
}
