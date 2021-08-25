const callbackPrompt = {
  message: `Hello, enter your number we will call you later`,
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    setTimeout(() => this.showPrompt(), ms);
    // setTimeout(this.showPrompt.bind(callbackPrompt), ms);
  },
};

callbackPrompt.showDeferredPrompt(2000);
