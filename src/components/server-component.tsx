
// wait for 5 seconds and return some user data
const getData = (ms: number) => new Promise((resolve) => setTimeout(() => resolve({ name: 'John', age: 30 }), ms))


export const ServerComponent = async () => {

     const data = await getData(5000) as { name: string, age: number }

     return (
          <div>
               <p>Server components</p>
               <p>Name: {data.name}, Age: {data.age}</p>
          </div>
     )
}