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

      // When component is not loaded, fallback will be shown
      // when it is loaded, react will swap out the fallback with the component
      // you can see this in the devtools on production mode
      <Suspense fallback={<p>Loading...</p>}>
          <SlowClientComponent />
          <ServerComponent />
      </Suspense>
    </main>
  );
}
