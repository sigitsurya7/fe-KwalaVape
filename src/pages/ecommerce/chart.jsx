import React, { useState } from 'react'
import { DeleteOutlined, ShoppingOutlined } from "@ant-design/icons"
import { formatCurrency } from "../../config/config"
import EcommerceLayout from "../../layout/ecommerceLayout"

const jsonData = [
  {
    id: '1',
    uid: 'kwala-food-2718-9012',
    namaproduct: 'Spageti',
    stok: '10',
    harga: '15000'
  },
  {
    id: '2',
    uid: 'kwala-food-2718-9012',
    namaproduct: 'Orange Juice',
    stok: '10',
    harga: '15000'
  }
]

const ChartEcommer = () => {
  const [items, setItems] = useState(jsonData.map(item => ({ ...item, quantity: 1, checked: false })))
  const [totalPrice, setTotalPrice] = useState(0)

  const updateTotalPrice = () => {
    const totalPrice = items.reduce((total, item) => total + (item.checked ? item.harga * item.quantity : 0), 0)
    setTotalPrice(totalPrice)
  }

  const handleCheckboxChange = (index) => {
    const updatedItems = [...items]
    updatedItems[index].checked = !updatedItems[index].checked
    setItems(updatedItems)
    updateTotalPrice()
  }

  const handleIncrement = (index) => {
    const updatedItems = [...items]
    if(updatedItems[index].quantity < updatedItems[index].stok){
        updatedItems[index].quantity += 1
        setItems(updatedItems)
        updateTotalPrice()
    }
  }

  const handleDecrement = (index) => {
    const updatedItems = [...items]
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1
      setItems(updatedItems)
      updateTotalPrice()
    }
  }

  return (
    <>
      <EcommerceLayout>
      <div className="container min-h-screen dark:bg-slate-800 py-3 lg:px-44 px-2 mx-auto">
        <h3 className='font-bold dark:text-white mb-2 text-xl'>Keranjang</h3>
        {items.map((item, index) => (
          <div key={item.id} className="container border-b-2 px-2 pb-4 pt-2 mb-2">
            <div className="flex items-center mb-4 h-full">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckboxChange(index)}
              />
              <div className="w-24 ml-4">
              <img
                src="https://asset.kompas.com/crops/oS693LHobxbClbJpljPs9TS0ES4=/103x104:903x637/750x500/data/photo/2022/09/16/6323cb33ef229.jpg"
                alt=""
                className="oject-cover rounded-lg shadow"
              />
              </div>
              <div className="mx-2">
                <p className="font-bold dark:text-white text-xl">{item.namaproduct}</p>
                <p className="text-sm my-1 text-gray-500">Blogones</p>
                <span className='font-semibold'>stok : {item.stok}</span>
                <p className="font-bold dark:text-white">
                  {formatCurrency(item.harga)}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <button className="bg-red-400 justify-center text-white font-bold rounded-xl w-full h-full px-4 py-2 flex items-center">
                  Delete <DeleteOutlined className="ml-2" />
                </button>
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="">
                    <button
                      onClick={() => handleDecrement(index)}
                      className="bg-blue-400 hover:bg-blue-600 active:bg-blue-600 text-white px-2 py-2 w-10 h-10 rounded-lg font-bold"
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <p className="my-2">{item.quantity}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => handleIncrement(index)}
                      className="bg-blue-400 hover:bg-blue-600 active:bg-blue-600 text-white px-2 py-2 w-10 h-10 rounded-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </EcommerceLayout>

      <div className="sticky bottom-1 z-50 w-full h-20 px-2 py-2">
        <div className="grid grid-cols-2 w-full h-full rounded-xl bg-slate-800 dark:bg-white">
          <div className="px-4 py-5">
            <p className="font-semibold text-center text-white dark:text-black">
              {formatCurrency(totalPrice)}
            </p>
          </div>
          <div className="">
            
            <button className="bg-blue-400 justify-center text-white font-bold rounded-tr-xl rounded-br-xl w-full h-full px-4 py-2 flex items-center">
                Check Out <ShoppingOutlined className="ml-2" />
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default ChartEcommer
