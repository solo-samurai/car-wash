import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-background">
      <div className="relative flex items-center justify-center">
        <Spinner className="size-12 text-primary" />
        <div className="absolute inset-0 size-12 animate-pulse rounded-full bg-primary/20 blur-xl" />
      </div>
      <p className="animate-pulse text-lg font-medium text-muted-foreground">
        Loading...
      </p>
    </div>
  );
}
