import { useGetProductByIdQuery } from "../api/api-slice"


export const SpecificProduct = ()=> {
    const { data, isError, isLoading } = useGetProductByIdQuery(2)

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Something went wrong</div>;

    return (
        <div>
            {data.title}
        </div>
    )
}