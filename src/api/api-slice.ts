import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}),
    endpoints: (builder)=> ({
        getAllProducts: builder.query({
            query: ()=>"products"
        }),
        getProductById: builder.query({
            query: (id)=> `products/${id}`
        }),
        addNewProduct: builder.mutation({
            query: (product)=> ({
                url: `/products/add`,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: product
            })
        })
    })
})

export const { useGetAllProductsQuery, useGetProductByIdQuery, useAddNewProductMutation } = productsApi