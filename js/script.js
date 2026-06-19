<script>
function sendWhatsApp() {
  let name = document.getElementById("cust-name").value.trim();
  let cell = document.getElementById("cust-cell").value.trim();
  let delivery = document.getElementById("cust-delivery").value;
  let date = document.getElementById("cust-date")? document.getElementById("cust-date").value : "";
  let address = document.getElementById("cust-address")? document.getElementById("cust-address").value.trim() : "";

  if (!name ||!cell ||!delivery) {
    alert("Please fill Name, Cell, and Pickup/Delivery");
    return;
  }

  let message = "*Beez Bakery New Order*\n\n";
  message += "*Customer Details*\n";
  message += "Name: " + name + "\n";
  message += "Cell: " + cell + "\n";
  message += "Type: " + delivery + "\n";
  if (delivery === "Delivery" && address) message += "Address: " + address + "\n";
  if (date) message += "Date: " + date + "\n\n";
  message += "*Order Items*\n";

  let table = document.getElementById("order-table");
  let rows = table.rows;
  let hasOrder = false;

  for (let i = 1; i < rows.length; i++) {
    let cols = rows[i].cells;
    if (cols.length < 4) continue;

    let prod = cols[0].querySelector("input")? cols[0].querySelector("input").value : cols[0].innerText.trim();
    let detail = cols[1].querySelector("input")? cols[1].querySelector("input").value : cols[1].innerText.trim();
    let item = prod + (detail? " - " + detail : "");

    let qtyEl = cols[3].querySelector("select") || cols[3].querySelector("input");
    let qty = qtyEl? qtyEl.value : "0";

    if (qty && qty!== "0" && qty!== "") {
      message += "• " + item + " x" + qty + "\n";
      hasOrder = true;
    }
  }

  if (!hasOrder) {
    alert("Select at least 1 item with quantity > 0");
    return;
  }

  let phone = "27764233543";  
  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

<script>
    function sendEnquiry() {
        let name = document.getElementById("enq-name").value.trim();
        let cell = document.getElementById("enq-cell").value.trim();
        let email = document.getElementById("enq-email").value.trim();
        let type = document.getElementById("enq-type").value;
        let date = document.getElementById("enq-date").value;
        let message = document.getElementById("enq-message").value.trim();

        if (!name || !cell || !type || !message) {
            alert("Please fill in Name, Cell, Enquiry Type and Message");
            return;
        }

        let whatsappMsg = "*Beez Bakery Enquiry*\n\n";
        whatsappMsg += "*Name:* " + name + "\n";
        whatsappMsg += "*Cell:* " + cell + "\n";
        if(email) whatsappMsg += "*Email:* " + email + "\n";
        whatsappMsg += "*Type:* " + type + "\n";
        if(date) whatsappMsg += "*Date Needed:* " + date + "\n\n";
        whatsappMsg += "*Message:* " + message;

        let phone = "27764233543"; // +27 76 423 3543
        let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(whatsappMsg);
        window.open(url, "_blank");
    }
    </script>