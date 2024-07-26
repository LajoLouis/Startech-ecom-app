import { useContext, useEffect } from 'react'
import { Link, useSearchParams, Navigate } from 'react-router-dom'
import EcomContext from '../../context/EcomContext'

function ThankYou() {
  const {createOrder} = useContext(EcomContext)
  const [searchParams] = useSearchParams()
  const tx_ref = searchParams.get("tx_ref")
  const transaction_id = searchParams.get("transaction_id")


  if (!isAuthenticated) {
    return <Navigate to="/login"/>
  }

  useEffect(() => {
    if (transaction_id && tx_ref) {
      createOrder(transaction_id, tx_ref)
    }
  }, [transaction_id, tx_ref, createOrder])
  

  return (
    <div className='py-[5%] px-[10px] bg-cover bg-[100%] bg-no-repeat text-center mb-[-3%]' style={{backgroundImage: `url(/img/thanks2.jpeg)`, height:`100vh`}}>
        <div className='bg-white rounded-md py-[20px] opacity-85 w-[50%] mx-auto'>
            <p className='text-xl'>Thank you for your patronage. A representative will contact you shortly, Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ad consectetur necessitatibus magni voluptatibus deleniti iste accusamus cumque, possimus vel!

            </p>
        <Link to={"/"}>
            <button className='bg-blue-950 p-[10px] rounded-lg mt-[10px] text-white'>Back to product</button>
        </Link>
        </div>
    </div>
  )
}

export default ThankYou