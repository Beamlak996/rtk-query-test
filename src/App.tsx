import { AddNewProduct } from "./components/add-new-product"
import { AllProducts } from "./components/all-products"
import { DeleteProduct } from "./components/delete-product"
import { SpecificProduct } from "./components/specific-product"
import { UpdateProduct } from "./components/update-product"

function App() {

  return (
    <div className="" >
      {/* <AllProducts /> */}
      {/* <SpecificProduct /> */}
      {/* <AddNewProduct /> */}
      {/* <UpdateProduct id="2" /> */}
      <DeleteProduct id="2" />
    </div>
  )
}

export default App
