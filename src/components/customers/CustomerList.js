import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, assignCustomers] = useState([])

    useEffect(() => {
        fetch("http://localhost:8088/customers")
        .then((data) => data.json())
        .then ((customerArray) => {
            assignCustomers(customerArray)
        })
    },[])

    return (
        <div>
            {customers.map((customerObject) => {
                return (
                    <p key={customerObject.id}> 
                    {customerObject.name}</p>
                )
            })}
        </div> 
    )
}