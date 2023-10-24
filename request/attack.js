const fetch = require("node-fetch");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const createOrders = async () => {
  for (let i = 0; i < 100; i += 1) {
    try {
      const response = await fetch(
        "https://qadxb15.1next.one/____webshop/v1/qadxb15.1next.one/order",
        {
          headers: {
            accept: "*/*",
            "accept-language":
              "en-IN,en;q=0.9,te-IN;q=0.8,te;q=0.7,ar-AE;q=0.6,ar;q=0.5,ur-PK;q=0.4,ur;q=0.3,hi-IN;q=0.2,hi;q=0.1,en-GB;q=0.1,en-US;q=0.1",
            "cache-control": "no-cache",
            "content-type": "application/json",
            pragma: "no-cache",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            cookie:
              "_ga=GA1.2.699776396.1585635944; __stripe_mid=7b75a669-46b4-405e-9a7f-a345710aad3d; __stripe_sid=6be98357-90f8-4d86-8f4b-c4deb38a57a6",
          },
          referrer: "https://qadxb15.1next.one/contact-1.html",
          referrerPolicy: "no-referrer-when-downgrade",
          body: '{"order":{"number":null,"items":[{"productId":"889da800-2905-42db-8119-3c983dd55562","name":"P1","quantity":1,"productPrice":10,"productOldPrice":null,"variantId":"2a0a1ee5-06f3-43ac-9563-23180543c55e","image":"","max":null,"initialQuantity":1,"quantityChange":1,"totalPrice":10,"optionNames":[],"url":"p1","maxPerOrder":0,"type":"PHYSICAL","isDigital":false}],"email":"muqsith.one@gmail.com","billingCountry":"DK","billingFirstName":"Mohammed","billingLastName":"Irfan","billingPhoneNumber":"09502061927","billingCompany":"None","billingAddress":"#32-1A, Discovery Gardens","billingZip":"518001","billingCity":"Kurnool","shippingCountry":"DK","shippingFirstName":"Mohammed","shippingLastName":"Irfan","shippingPhoneNumber":"09502061927","shippingCompany":"None","shippingAddress":"#32-1A, Discovery Gardens","shippingZip":"518001","shippingCity":"Kurnool","userNotes":[],"transactionType":"manual","calculatedShippingCost":0,"calculatedVat":0,"calculatedSubtotal":10,"calculatedVatIncluded":0,"calculatedCurrency":"DKK","calculatedTotal":10,"calculatedDiscount":0,"couponCode":null,"captchaToken":"03AHaCkAb8SleVObsoXHZ28ne-AlkZJuYk1gh7dsN5h487KTJEffbayruHcnUpWeOZa3gqfSnBJhq_5mMTF8dkGC9eFoY-ONpNhAQwVBSjcgize6qQxPA66IkulUbFZrrt16QqJgICdMcqIIxGqMucK9oSKAG3Dp-GvF542alkzQU3edY_-KZ_bp4OujDNnSLzRodLgfJvQc05fWyNgOTu9WHUhEZ4ngMX8471moUWl3qCyywCZ66MihJhOVU20smt05cdj0dP3pN2t1JGJP_gAFirjo9e5Sc3jS0EcaBhlUpNmj41ZDG-QiALcvqj7wNv1KbmxSXlgGOQfM4YX0EJZoaSAYT5x5a0GqvHmsERaoiY9BlxfRwuV2OQkXLs9H1evCKK2CcEMk8qPntqkWoJ0Zq1eNbv9Z9E6A"},"shippingOptionId":"a32455d5-6417-40c5-8f76-069c59731cef","shippingOption":null,"successUrl":"https://qadxb15.1next.one/contact-1.html#!/order-status/success","cancelUrl":"https://qadxb15.1next.one/contact-1.html#!/order-status/paycancel"}',
          method: "POST",
          mode: "cors",
        },
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
};

createOrders();
