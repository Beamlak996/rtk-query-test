import { useAddNewProductMutation } from "../api/api-slice"


export const AddNewProduct = () => {
    const [addNewProduct, { data, error, isLoading }] = useAddNewProductMutation()

    if(error) {
        return <h1>Error</h1>
    }
    if(isLoading) {
        return <h1>Loading...</h1>
    }

    const handleAddProduct = async () => {
        try {
            const newProduct = {
                id: 1,
                title: "New Product",
                description: "This is a new product."
            }

            await addNewProduct(newProduct)
        } catch (error) {
            
        }
    }

    return (
      <div>
        {data && (
          <>
            <h1>{data?.id}</h1>
            <h1>{data?.title}</h1>
            <h1>{data?.description}</h1>
          </>
        )}


        <button onClick={handleAddProduct} disabled={isLoading}>Add New Product</button>
      </div>
    );
}