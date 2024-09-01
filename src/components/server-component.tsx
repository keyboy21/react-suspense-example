
// wait for 5 seconds
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))


export const ServerComponent = async () => {

     await sleep(10000)

     return (
          <div>
               <p>Server components</p>
          </div>
     )
}