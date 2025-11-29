import { useState, useEffect } from "react";
import { Worker, WORKERS } from "@/lib/data";
import { Loader2, User, Star } from "lucide-react";

interface WorkerAssignmentProps {
  onAssign: (worker: Worker) => void;
}

export function WorkerAssignment({ onAssign }: WorkerAssignmentProps) {
  const [status, setStatus] = useState<"searching" | "found">("searching");
  const [assignedWorker, setAssignedWorker] = useState<Worker | null>(null);

  useEffect(() => {
    // Simulate searching for a worker
    const timer = setTimeout(() => {
      // Find a random available worker
      const availableWorkers = WORKERS.filter((w) => w.isAvailable);
      const randomWorker =
        availableWorkers[Math.floor(Math.random() * availableWorkers.length)];

      if (randomWorker) {
        setAssignedWorker(randomWorker);
        setStatus("found");
        onAssign(randomWorker);
      }
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [onAssign]);

  return (
    <div className="py-12 text-center">
      {status === "searching" ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
            <div className="relative bg-background p-4 rounded-full border-2 border-primary">
              <Loader2 className="h-8 w-8 text-primary animate-spin" />
            </div>
          </div>
          <h3 className="text-xl font-semibold">Finding nearby washer...</h3>
          <p className="text-muted-foreground">
            We are connecting you with the best available professional in your
            area.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-6 animate-in fade-in zoom-in duration-500">
          <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center">
            <User className="h-12 w-12 text-primary" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground">
              {assignedWorker?.name}
            </h3>
            <div className="flex items-center justify-center gap-1 mt-2">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="text-lg font-medium">
                {assignedWorker?.rating}
              </span>
            </div>
          </div>

          <div className="bg-green-500/10 text-green-600 px-4 py-2 rounded-full font-medium">
            Arriving in 15 mins
          </div>
        </div>
      )}
    </div>
  );
}
