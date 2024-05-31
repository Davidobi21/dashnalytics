import React from 'react'
import { wreen_action, wreen_graybg } from '../assets/images'
import { IoTrashBinSharp } from 'react-icons/io5'
import { ProductData } from '../data/ProductData'

export default function Product() {
    return (
        <main className="flex flex-col gap-4 py-10 px-4 bg-primary">
            <div className="overflow-x-scroll w-full p-4 rounded-md shadow-lg bg-white text-slate-600">
                <table className="w-full min-w-[50rem]">
                    <thead>
                        <tr>
                            <th colspan={6}>
                                <h3 className="text-lg md:text-2xl font-bold text-left">Product List</h3>
                            </th>
                        </tr>
                        <tr className='border-b boarder-slate-200 opacity-70 '>
                            <th className='px-1'>#</th>
                            <th className='py-2 text-left'>Product Name</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-500 text-center">
                        {
                            ProductData
                        }
                    </tbody>
                </table>
            </div>
        </main>
    )
}
