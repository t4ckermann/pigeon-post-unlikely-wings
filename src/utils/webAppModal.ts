export class WebAppModal {
  constructor() {
    if (this.isOnSafariAndNotStandalone()) {
      const modal = document.createElement('div');
      modal.id = 'modal';
      modal.innerHTML = `
            <div id="modal-content">
              <h2>Install the app</h2>
              <p>Click the share button and select "Add to Home Screen" to install the app.</p>
              <button id="close-modal">Close</button>
            </div>
          `;
      document.body.appendChild(modal);
      const closeModal = document.getElementById('close-modal');
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
  }

  isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  }

  isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  isStandAlone() {
    return (window.navigator as any).standalone;
  }

  isOnSafariAndNotStandalone() {
    return this.isIOS() && this.isSafari() && !this.isStandAlone();
  }
}
