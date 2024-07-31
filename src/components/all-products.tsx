import { useGetAllProductsQuery } from "../api/api-slice"


export const AllProducts = () => {
    const { data, isError, isLoading } = useGetAllProductsQuery({})

    if(isLoading) return <div>Loading...</div>

    if(isError) return <div>Something went wrong</div>



    return (
        <div>
            {data?.products.map((product: any)=> {
               return <h1 key={product.id} >{product.title}</h1>
            })}
        </div>
    )
}