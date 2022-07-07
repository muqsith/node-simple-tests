const pathModule = require("path");
const fs = require("fs-extra");
const axios = require("axios");
const FormData = require("form-data");

const apiToken =
  "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZDZySUlhQWliNjBUZ1pPcGI2Zk14MU9SaDNXQWZFLzJKQWNzMzZJMXhIMkE4QU4zV3dLdXhKY3FiVHRGeDdlVzZLZnNWQ0xwS0Y2cURiUWtJZWFRN1d5Qk9KV3dHNUFwcXBJY0FDU1l5cnBjeTdxRGRFYk9Fb2c0ZXNoU3l2T201QTJ5cGhaWkhRNWl2b2MrMWxsQTNDYytmYTJsS2FOUC9KOEc0UXhXMHhTYVZJbTJTc2FTeVlLUTJtNEhLWHAwTCtaQWp2QVYrVDVJQ2RxYXZRSTBOV1JrY1lYVk05NEZFTkkwUXl6a0xnYnZ5VzRNem05S1ZZbmlCcXg0Zm1xYlY5RFZ5dFRGbDdBWjBNOVo5Z3lzbXZUVklsS2tlMEJrYzZRUGZ5NUwxQTdUN0RPYW9OQk41M2ZHZGh3cnNhaW9xTHRIRzhvdVhQQnBpSjQzRnN4ZUpKQ0UvdHRHOUNidXdva20vMVlHWXJyUFB6czNrcFR4M2JYVHBrMjV5bkQ1QzVLcHhJZ0JZckt3Z2hnK0dVQjhBcHVCK3U1NjFCYU1GbWt0bDFJVXkrYitZdVhYSGpMbEtHMWIyVW1jbzkxRm1yY1dFQmZKMmZCTVJUNkx1aEYraG8vbTBXV29rQXpIaDR6TDdrVzFzUW1MT3V5WmVXMm5XTGYySkhsZ2NGelJFeTNBU0s0SVExNmxYZy9WQVhqWnljdmNhV1NkZlRhQVhnTDdlWkJYbVJGWjNta3l5MG9pT2UvcDNwS2NIWVc1cjZ1R1BVOVhqUWg3L3ducWNWeDFNWWErU0JFZ3FvbkhtUEdycFhBME5aWHVHaCtIbVJSTHlBaENJQWtQYjhmdFBFRWxsVEZwMm12NFBFa282SDBtUldZNThzVjFiZW40aUg1OXpVVWRIeXc9IiwiaWF0IjoxNjU3MDgzNDg2LCJleHAiOjQ4MzQ3OTQ4MzgsImF1ZCI6Im15LXRlc3QtYXBwLWlkIiwiaXNzIjoiaHR0cHM6Ly93ZWJzaG9wLm9uZS5jb20iLCJzdWIiOiIifQ.mgwIylIzjxPcWkLjWQCWtC3KFK3P2WkqrB8d4QRoh0Zyxc6Z4AInbpQVpmHokXxrmpYYYn4IOqPR1D45z9SnCrFAe0RyjReTM_2aVTMZIjXJf9-k10mBIStVUA6RlryDYXbKKQ8tvTDIci2ih_AbifjgmiSr7x9gMgfG7eKjHnGf0VwAbOtmg7gADsAe-oysp7hcgnvRBTbm9O3xud0nEZcXnZYKvWZVjOjOfPTkkYXIhtufbO-GyNlpGDJDQpFyesi7ORkAZfRCa3dVrr2ZuUOmQ_CM5fQlkhw7ic_4f-2sB8xRmdLYagjQfk8ifLOOKtRimwaPzlFuLz3YvLWXsv4FIuzXJTzhMVC-lXWV7KPIyUhjOmNhU5lXuFOpaFx64ap5yVca6XGxaRrlm21jHCdvUOi2OPWzNqk4mC7is_iJeFScBiPGeeod-0kDo__QbEAq3_W9GY19tUYs10_0sOnhfAqjB1_Zvsh9TW8ArtyXI40FpknN4Nh5QpueZoOWy2X_8Ai0ZUp17jUUwUfLPobPnCwIuU8Gb_AvowLL7g9c36C_bTxWG2N_nsA5kNSw3MMgqR4qlPSyQ6DbjAl84SaFehBvXzRt_7yiPJ-4QCLVlyVLhcj6I8HEEEU8OzbmHhqnd0m-EkBRfXuWIHSVjwyOfxC8prvsWRYl1FCMdJ8";

const sendInvoice = async (orderId) => {
  try {
    const pdfFilePath = pathModule.resolve(__dirname, "tmp", "2.pdf");

    const data = new FormData();
    data.append("", fs.createReadStream(pdfFilePath));

    var requestConfig = {
      method: "post",
      url: `http://local.one.com:5000/api/v2/order/${orderId}/send-invoice`,
      headers: {
        Authorization: apiToken,
        ...data.getHeaders(),
      },
      data: data,
    };

    const response = await axios(requestConfig);
    console.log(`
          Response status: ${response.status},
          response data: ${JSON.stringify(response.data)}
        `);
  } catch (err) {
    console.log("Error while sending pdf : ", err);
  }
};

exports.sendInvoice = sendInvoice;

if (require.main === module) {
  sendInvoice("26a154f6-f19c-4bb2-809e-6d0e5bd3825e");
}
