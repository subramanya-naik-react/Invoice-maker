import React from "react";
import jsPDF from "jspdf";

const Invoice = ({ invoice }) => {
  const calculateTotal = () => {
    return invoice.items
      .reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0)
      .toFixed(2);
  };

 const downloadPDF = () => {
  const doc = new jsPDF();

  // Add title
  doc.setFontSize(20);
  doc.text("Invoice", 20, 20);

  // Add customer details
  doc.setFontSize(12);
  doc.text(`Customer Name: ${invoice.customerName}`, 20, 40);
  doc.text(`Date: ${invoice.invoiceDate}`, 20, 50);

  // Add table headers
  const startX = 20; // Starting x position for the table
  const startY = 70; // Starting y position for the table
  const colWidths = [70, 30, 30, 30]; // Column widths
  const rowHeight = 10; // Row height

  doc.setFontSize(12);
  doc.text("Description", startX, startY);
  doc.text("Price", startX + colWidths[0], startY);
  doc.text("Quantity", startX + colWidths[0] + colWidths[1], startY);
  doc.text("Total", startX + colWidths[0] + colWidths[1] + colWidths[2], startY);

  // Add table rows
  let yPosition = startY + rowHeight; // Start below the headers
  invoice.items.forEach((item) => {
    doc.text(item.description, startX, yPosition); // Description column
    doc.text(
      parseFloat(item.price).toFixed(2),
      startX + colWidths[0],
      yPosition,
      { align: "right" }
    ); // Price column
    doc.text(
      item.quantity.toString(),
      startX + colWidths[0] + colWidths[1],
      yPosition,
      { align: "right" }
    ); // Quantity column
    doc.text(
      (parseFloat(item.price) * item.quantity).toFixed(2),
      startX + colWidths[0] + colWidths[1] + colWidths[2],
      yPosition,
      { align: "right" }
    ); // Total column
    yPosition += rowHeight; // Move to the next row
  });

  // Add total at the bottom
  doc.text(`Total: $${calculateTotal()}`, startX, yPosition + 10);

  // Save the PDF
  doc.save("invoice.pdf");
};

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mt-8 max-w-[800px] sm:w-[600px] md:w-[700px] mb-11">
      <h2 className="text-3xl font-bold mb-4 text-center">Invoice Preview</h2>
      <div className="flex justify-between items-center mb-6 mt-6">
        <p className="text-lg sm:text-[20px]">Customer Name: {invoice.customerName}</p>
        <p className="text-lg text-end">Date: {invoice.invoiceDate}</p>
      </div>
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className="p-2 border-b">Description</th>
            <th className="p-2 border-b">Price</th>
            <th className="p-2 border-b">Quantity</th>
            <th className="p-2 border-b">Total</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, index) => (
            <tr key={index}>
              <td className="p-2 border-b">{item.description}</td>
              <td className="p-2 border-b">${parseFloat(item.price).toFixed(2)}</td>
              <td className="p-2 border-b">{item.quantity}</td>
              <td className="p-2 border-b">
                ${(parseFloat(item.price) * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <strong>Total: </strong>${calculateTotal()}
      </div>
      <button
        onClick={downloadPDF}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600"
      >
        Download Invoice
      </button>
    </div>
  );
};

export default Invoice;
