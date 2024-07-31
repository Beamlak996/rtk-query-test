import { useDeleteProductMutation } from "../api/api-slice"


export const DeleteProduct = ({id}: {id: string}) => {
    const [deleteProduct, { data, isError, isLoading }] = useDeleteProductMutation()

    if(isError) return <h1>error</h1> 
    if(isLoading) return <h1>Loading..</h1> 

    const handleDelete = async () => {
        try {
            await deleteProduct(id)
        } catch (error) {
            console.log("Error")
        }
    }

    return (
        <div>
            {data?.title ? `${data.title} has been deleted`: ""}
            <button onClick={handleDelete} disabled={isLoading} >Delete</button>
        </div>
    )
}