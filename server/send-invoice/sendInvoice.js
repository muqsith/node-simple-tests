const pathModule = require("path");
const fs = require("fs-extra");
const axios = require("axios");
const FormData = require("form-data");

const sendInvoice = async (orderId) => {
  try {
    const tokenFileData = await fs.readFile(
      pathModule.resolve(__dirname, "tmp", "token.txt")
    );
    const apiToken = `Bearer ${tokenFileData.toString("utf8")}`;
    console.log("apiToken", apiToken);

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
          <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        `);
  } catch (err) {
    console.log("Error while sending pdf : ", err);
  }
};

exports.sendInvoice = sendInvoice;

if (require.main === module) {
  sendInvoice("26a154f6-f19c-4bb2-809e-6d0e5bd3825e");
}
