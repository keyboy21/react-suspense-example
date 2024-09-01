'use client'

// create a simulation of a slow component that takes 5 seconds to load

export const SlowClientComponent = () => {

     // create a simulation of a slow component that takes 5 seconds to load

     const heavyComputation = () => {
          const start = Date.now();
          while (Date.now() - start < 300) {
               // Busy-wait for 2 seconds
          }
     };

     heavyComputation();

     return (
          <div>
               <p>Slow client component</p>
          </div>
     )
}