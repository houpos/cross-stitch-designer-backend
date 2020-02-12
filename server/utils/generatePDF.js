const puppeteer = require("puppeteer");
const { generateDetails, generateColors } = require("./generateHTML");

async function printPDF(projectDetails) {
  const htmlContent = `
  <!doctype html>
  <html>
    <head><meta charset='UTF-8'>
      <title>Test</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
      <h1 id="title">Project Title</h1>
      <div class="container">
        <div class="row">
          ${projectDetails.grid}
        </div>
        <div class="row">
          <div class="column">
            <h3>Details</h3>
            ${generateDetails(projectDetails)}
          </div>
          <div class="column">
            <h3>Shopping List</h3>
            ${generateColors(
              projectDetails.allColors,
              projectDetails.colorCount
            )}
          </div>
        </div>
      </div>
    </body>
  </html>
`;
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  const pdf = await page.pdf({ margin: "10px" });
  await browser.close();
  return pdf;
}

module.exports = printPDF;
