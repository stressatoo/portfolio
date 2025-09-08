import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";
import { SiGithub } from "@icons-pack/react-simple-icons";

export function ProjectCard({ name, description, githubUrl }: Project) {
  return (
    <Card className="w-full hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-foreground truncate">
              {name}
            </h3>
            {description && (
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {description}
              </p>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="shrink-0 hover:bg-accent"
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${name} on GitHub`}
            >
              <SiGithub />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
