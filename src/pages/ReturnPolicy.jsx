import React from 'react'
import GoToTop from '../components/GoToTop'

const ReturnPolicy = () => {
  return (
    <div>
      <div className="pl-5">
        <h1 className="font-bold">Return and Refund Policy</h1>
        <p className="font-medium pt-3">Thank you for your interest in our clothing brand shamaim.in. We understand the importance of having a clear return and refund policy, and we strive to provide a seamless shopping experience for our customers. Below is our return and refund policy:</p>
      </div>

      <div className="pl-5 pt-3">
        <h1 className="font-bold">Returns: </h1><p className="font-medium">We accept returns within 5 days of delivery. To initiate a return, Log in to shamaim.in then tap on Account and go to Orders tab. Select the product(s) you wish to return and Tap or click on Return to create a request.</p>
      </div>

      <div className="pl-5 pt-3">
        <p className="font-medium">Select your applicable <span className="font-bold">reason of return and fill in the return form — </span>based on- 2 options will be available:</p>
        <ol className="pl-5">
          <li className="font-medium">1.Complete Refund on Return</li>
          <li className="font-medium">2.Replace</li>
        </ol>
      </div>

      <div className="pl-5 pt-3">
        <h1 className="font-bold">1) Return</h1>
        <p className="font-medium">To be eligible for a return, the item must meet the following criteria: </p>
        <ul className="font-medium pl-5">
            <li>•	It should be unused, unwashed, and in the same condition as received.</li>
            <li>•	The item should be in its original packaging with all tags attached.</li>
            <li>•	The original bill or receipt must be provided as proof of purchase.</li>
            <li>•	The return request must be initiated within 5 days of delivery</li>
            <li>•	Keep ready all the requisite items necessary for a smooth returns process — including invoice, original packaging, price tags, freebies, accessories, etc.</li>
            <li>•	The product should not be damaged or tampered with</li>
        </ul>
      </div>

      <div className="pl-5 pt-3">
          <p className="font-medium">Once the return request is approved, customers will receive a confirmation email with the details of the return process, Our logistics partner will pick up the product(s) from the customer's location</p>
          <p className="font-medium"><span className="font-bold">Refund:</span> Customers will receive a refund in their Bank Account within 3 to 5 working days of the brand receiving the returned product(s). The refund amount will be equal to the product price minus any discounts applied.</p>
      </div>

      <div className="pl-5 pt-3">
        <h1 className="font-bold">Refunds</h1>
        <p className="font-medium">Once we receive and inspect the returned item, we will notify you of the approval of your refund. If the return is approved, the refund will be processed within a reasonable timeframe.</p>
        <p className="font-medium pt-2">Refunds for eligible returns will be transferred to your bank account only. To initiate the refund, we will require your bank account details, such as the account holder's name, Bank Name, account number, and IFSC code. Please ensure the provided information is accurate to avoid any delays or issues with the refund process.</p>
        <p className="font-medium pt-2">Please note that the refund amount may vary depending on the condition of the returned item and any applicable deductions, such as shipping fees or restocking charges.</p>
        <p className="font-medium pt-2">We strive to process refunds as quickly as possible, but the actual time it takes for the refund to reflect in your bank account may vary based on your bank's policies and processing times.</p>
      </div>

      <div className="pl-5 pt-3">
        <h1 className="font-bold">Replacements</h1>
        <p className="font-medium">Your order will be exchanged for a new identical product of a different size or color. The item will be picked up by our logistics partner and the new product will be delivered within 5-7 working days from filing the replacement request. </p>
      </div>

      <div className="text-sm pl-5 pt-3">
          <p className="pt-2">Your order will be exchanged for a new identical product of a different size or color. The item will be picked up by our logistics partner and the new product will be delivered within 5-7 working days from filing the replacement request. </p>
          <p className="pt-2">Non-refundable Items: The following items are non-refundable:</p>
          <ul className="pt-2">
            <li>•	Personalized or custom-made products</li>
            <li>•	Products that have been used or damaged by the customer</li>
          </ul>
      </div>
      <GoToTop />
    </div>
  )
}

export default ReturnPolicy