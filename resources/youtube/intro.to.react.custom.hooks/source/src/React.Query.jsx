import { QueryClientProvider, QueryClient, useQuery, useMutation } from 'react-query'
// npm install react-query
console.clear();
const queryClient = new QueryClient();

const fetchJoke = async ()=>{
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const json = await res.json();
  return json;
}

function Dashboard(){
  // useQuery( queryKey, queryFn );
  const { data, isLoading, error } = useQuery( 
    "joke",
    fetchJoke, {
      retry: 3,
      refetchOnWindowFocus: true
    });

  if ( isLoading ){
    return <h2>Loading...</h2>
  }

  if ( error ){
    return <h2>Error: { error.message }</h2>
  }

  return (
    <div>
      <h2>Dashboard</h2>
      { data.value }
    </div>
  )
}

export default function ReactQuery(){
  return (
    <QueryClientProvider client={queryClient}>
      <h1>React Query</h1>
      <Dashboard />
      {/* <Panel /> */}
    </QueryClientProvider>
  )
}