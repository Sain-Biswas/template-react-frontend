import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="text-center">
      <header>
        <ModeToggle />
      </header>
      <main className="min-h-screen flex flex-col items-center justify-center text-[calc(10px+2vmin)]">
        {/* <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        /> */}

        <p>
          Edit <code>src/routes/index.tsx</code> and save to reload.
        </p>
        <div className="flex justify-center gap-4 my-5 w-full">
          <Button variant="outline">
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </Button>
          <Button variant="outline">
            <a
              href="https://tanstack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn TanStack
            </a>
          </Button>
        </div>
        <Button
          onClick={() =>
            toast.success("Every thing working fine.", {
              description:
                "Edit src/routes/index.tsx or add new routes to continue.",
            })
          }
        >
          Show toast
        </Button>
      </main>
    </div>
  );
}
