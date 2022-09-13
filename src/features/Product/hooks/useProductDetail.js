/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import productApi from '../../../api/productApi'
export default function useProductDetail(productId) {
    const [product, setProduct] = useState({})

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const reponse = await productApi.get(productId)
                setProduct(reponse)
            } catch (err) {
                alert(err)
            }
            setLoading(false)
        })()
    }, [productId])

    return { product, setLoading }
}
