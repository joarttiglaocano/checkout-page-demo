window.showPopupModal = function ({ url, apiKey }) {
  const modalContent = `
    <div class="modal-background"></div>
      <div class="modal-popup">
      <div class="modal-popup__icon-close"></div>
      <iframe 
        id="iframe-invoice" 
        class="iframe-invoice"
        title="Invoice">
      </iframe>
    </div>`;
  document.getElementById("modal").innerHTML = modalContent;

  const modalBg = document.querySelector(".modal-background");
  const modalPopup = document.querySelector(".modal-popup");
  const iframe = document.querySelector(".iframe-invoice");
  modalBg.classList.add("modal-background--blackout");
  modalPopup.classList.add("modal-popup--visible");

  iframe.src = `${url}?api_key=${apiKey}`;
};
