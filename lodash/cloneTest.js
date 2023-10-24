const _ = require("lodash");

const tables = {
  v6: [
    {
      name: "shops",
      fields: ["email", "paypalemail", "address"],
      values: [
        "testdata@test.tes",
        "testpaypal@test.tes",
        '{"street": "test street","city": "test","zip": "12345","countryId": "AE","displayCountry": "United Arab Emirates"}',
      ],
    },
    {
      name: "orders",
      fields: ["email", "key", "paymentmethod"],
      values: [
        "testdata@test.tes",
        "testkey",
        '{"id": "123456","shopid": "123456","enabled": true,"archived": false,"paymenttype": "testpaypal","paymentdetails": {"email": "test@webshop.test"}}',
      ],
    },
    {
      name: "order_payment_log",
      fields: ["transactionid", "transactiondata", "paymentgateway"],
      values: ["testdata", "{}", "testdata"],
    },
    {
      name: "payment_methods",
      fields: ["paymentdetails"],
      values: ['{"email":"test@webshop.test"}'],
    },
    {
      name: "stripe_connect",
      fields: [
        "access_token",
        "refresh_token",
        "stripe_user_id",
        "stripe_publishable_key",
      ],
      values: [
        "access-token-testid",
        "refresh-token-testid",
        "stripe-user-id-testid",
        "stripe-publishable-key-testid",
      ],
    },
  ],
};

let cloned = _.clone(tables.v6);
let deepCloned = _.cloneDeep(tables.v6);

console.log("original: ", tables.v6[0]);
console.log("cloned: ", cloned[0]);
console.log("deepCloned: ", deepCloned[0]);

console.log("cloned: ", tables.v6[0] === cloned[0]);
console.log("deepCloned: ", tables.v6[0] === deepCloned[0]);
