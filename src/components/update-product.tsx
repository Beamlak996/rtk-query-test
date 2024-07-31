import { useUpdateProductMutation } from "../api/api-slice"

export const UpdateProduct = ({id}: {id: string}) => {
    const [updateProduct, { data, isError, isLoading }] =
      useUpdateProductMutation();

    if (isError) {
      return <h1>Error</h1>;
    }
    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    const handleUpdate = async () => {
        try {
            const udpateProductData = {
                title: "Updated product"
            }

            await updateProduct({ id, updateProduct: udpateProductData });
        } catch (error) {
            
        }
    }

    return (
        <div>
            {data && (
                <h1>{data.title}</h1>
            )}
            <button onClick={handleUpdate} disabled={isLoading} >click</button>
        </div>
    )
}   