// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints

export const hotelstay = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery ({
        baseUrl : import.meta.env.VITE_API_URL
    }),
    endpoints : (builder) => ({
        register : builder.mutation({
            query : (data) => ({
                url: "/users/register",
                method: "POST", // Specify the HTTP method
                headers: {
                "Content-Type": "application/json", // Optional: depends on your backend
                },
                body: data, // Include the payload
            })
        }),
    })

})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const {useRegisterMutation} = hotelstay