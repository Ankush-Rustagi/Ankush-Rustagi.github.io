import { useMemo, useState } from "react"
import { ArrowUpRight } from "lucide-react"

import { prototypes, type PrototypeCategory } from "@/data/prototypes"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

const CATEGORY_LABELS: Record<PrototypeCategory, string> = {
  canvas: "Canvas",
  storybook: "Storybook",
  dashboard: "Dashboard",
  prototype: "Prototype",
  tool: "Tool",
  writeup: "Writeup",
}

const STATUS_STYLES: Record<string, string> = {
  live: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
  wip: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
  archived:
    "bg-muted text-muted-foreground border-border",
}

type Filter = "all" | PrototypeCategory

function App() {
  const [filter, setFilter] = useState<Filter>("all")

  const visible = useMemo(() => {
    if (filter === "all") return prototypes
    return prototypes.filter((p) => p.category === filter)
  }, [filter])

  const categoriesPresent = useMemo(() => {
    const set = new Set<PrototypeCategory>()
    prototypes.forEach((p) => set.add(p.category))
    return Array.from(set)
  }, [])

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <header className="mb-12">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
          Ankush Rustagi
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-2xl mb-4">
          Prototypes, canvases, and experiments.
        </h1>
        <p className="text-lg text-muted-foreground max-w-prose">
          A small hub for things I'm building. Click any tile to try it.
        </p>
      </header>

      {prototypes.length === 0 ? (
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle>Nothing here yet.</CardTitle>
            <CardDescription>
              New entries will land soon. To add one, edit{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                src/data/prototypes.ts
              </code>{" "}
              and push to{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                main
              </code>
              .
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <>
          <nav
            className="flex flex-wrap gap-2 mb-8"
            aria-label="Filter prototypes by category"
          >
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              All ({prototypes.length})
            </Button>
            {categoriesPresent.map((cat) => {
              const count = prototypes.filter(
                (p) => p.category === cat
              ).length
              return (
                <Button
                  key={cat}
                  variant={filter === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(cat)}
                  className="rounded-full"
                >
                  {CATEGORY_LABELS[cat]} ({count})
                </Button>
              )
            })}
          </nav>

          <section
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            aria-label="Prototype list"
          >
            {visible.map((p) => (
              <a
                key={p.slug}
                href={p.href}
                target={p.external ? "_blank" : undefined}
                rel={p.external ? "noopener noreferrer" : undefined}
                className="group block"
              >
                <Card className="h-full transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-foreground/30">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {CATEGORY_LABELS[p.category]}
                      </span>
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-xs",
                          STATUS_STYLES[p.status]
                        )}
                      >
                        {p.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{p.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {p.description}
                    </CardDescription>
                  </CardHeader>
                  {p.tags && p.tags.length > 0 && (
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="text-xs font-normal"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  )}
                  <CardFooter className="mt-auto justify-between text-xs text-muted-foreground">
                    <time dateTime={p.date}>{p.date}</time>
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </CardFooter>
                </Card>
              </a>
            ))}
          </section>
        </>
      )}

      <footer className="mt-24 pt-8 border-t text-sm text-muted-foreground flex items-center justify-between">
        <p>Built with React + Vite + Tailwind + shadcn/ui.</p>
        <a
          href="https://github.com/Ankush-Rustagi/Ankush-Rustagi.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-4"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          Source
        </a>
      </footer>
    </main>
  )
}

export default App
