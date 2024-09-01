import { ClientComponents } from "@/components/client-components";
import { ServerComponent } from "@/components/server-component";
import { SlowClientComponent } from "@/components/slow-client-component";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <ClientComponents>
        <SlowClientComponent />
      </ClientComponents>
      <Suspense fallback={<p>Loading...</p>}>
        <ClientComponents>
          <SlowClientComponent />
          <ServerComponent />
        </ClientComponents>
      </Suspense>
    </main>
  );
}
