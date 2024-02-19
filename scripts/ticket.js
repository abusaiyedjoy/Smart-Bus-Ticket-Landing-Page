// Seat Selection
const seats = document.querySelectorAll(".seat");
let totalPrice = 0;
let Count = 0;
let countDown = 40;
let grandTotal = 0;
let ticketCount = [];
const seatlist = [];
const grandTotalElement = document.getElementById("grand-total");
for (let i = 0; i < seats.length; i++) {
  const seat = seats[i];

  // Seat Selected
  seat.addEventListener("click", function () {
    if (ticketCount.length === 4) {
      return alert("You can't Book More Than 4 Ticket");
    }
    if (seatlist.indexOf(seat.innerText) !== -1) {
      return alert("Already Selected Choose Another One")
    }
    seatlist.push(seat.innerText);
    console.log(seatlist);
    //   Seat selected
    seat.classList.add("bg-[#1DD100]");
    ticketCount.push(Math.floor(Math.random(4) * 10));
    seat.classList.add("text-white");
    // Seat count up and down
    const Price = 550;
    const busSeat = "Comfortable Seat";
    totalPrice = totalPrice + 550;
    grandTotal = totalPrice;
    grandTotalElement.innerText = grandTotal;
    document.getElementById("TotalPrice").innerText = totalPrice;
    // Seat Count
    Count = Count + 1;
    document.getElementById("seatCount").innerText = Count;
    countDown = countDown - 1;
    const vsda = (document.getElementById("availableSeat").innerText =
      countDown);

    //   Seat Bocking
    const seatName = seat.innerText;

    const seatTicket = document.createElement("li");
    seatTicket.textContent = seatName;

    document.getElementById("Seat").appendChild(seatTicket);

    const seatClass = document.createElement("li");
    seatClass.textContent = busSeat;

    document.getElementById("Class").appendChild(seatClass);

    const seatPrice = document.createElement("li");
    seatPrice.textContent = Price;

    document.getElementById("Price").appendChild(seatPrice);
  });
}

const conpunInput = document.getElementById("Input");
const applyButton = document.getElementById("ApplyButton");
conpunInput.addEventListener("input", function () {
  if (conpunInput.value == "NEW15" || conpunInput.value == "Couple 20") {
    applyButton.removeAttribute("disabled");
  } else {
    applyButton.setAttribute("disabled", "");
  }
});
let discountAmount = 0;
const discountelement = document.getElementById("discount-element");
discountelement.style.display = "none";
applyButton.addEventListener("click", function () {
  discountelement.style.display = "flex";
  document.getElementById("input-field").style.display = "none";
  if (conpunInput.value === "NEW15") {
    discountAmount = totalPrice * 0.15;
    console.log(grandTotal);

    grandTotal = grandTotal - discountAmount;
  } else if (conpunInput.value === "Couple 20") {
    discountAmount = totalPrice * 0.2;
    console.log(grandTotal);
    grandTotal = grandTotal - discountAmount;
  }
  grandTotalElement.innerText = grandTotal;
  document.getElementById("discount-amount").innerText = discountAmount;
});

const confirmButton = document.getElementById("confirm-button");
const phoneNumber = document.getElementById("phone");
phoneNumber.addEventListener("input", function () {
  const phone = phoneNumber.value;
  console.log(phone);
  if (phone.length === 11) {
    confirmButton.removeAttribute("disabled");
  } else {
    confirmButton.setAttribute("disabled", "");
  }
});
