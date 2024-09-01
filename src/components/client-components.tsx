'use client'

import { useState } from "react"
import { SlowClientComponent } from "./slow-client-component"

export const ClientComponents = ({ children }: { children: React.ReactNode }) => {
     const [count, setCount] = useState(0)


     return (
          <section className="flex flex-col gap-4">
               <p>Client components</p>
               <div>

                    <button
                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                         onClick={() => setCount(count + 1)}>
                         Count: {count}
                    </button>
               </div>

               <input
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs input-sm"
                    type="text"
               />

               {children}

          </section>
     )
}