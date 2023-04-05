const app = Vue.createApp({
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    saveSettings(e) {
      e.preventDefault();
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  watch: {
    showModal(value) {
      const form = document.querySelector('form');
      if (value) {
        form.classList.add('modal-open');
      } else {
        form.classList.remove('modal-open');
      }
    }
  },
  template:
    `<div class="container">
          <dialog id="saved-modal" :open="showModal">
              <p>Your settings have been saved.</p>
              <button @click="closeModal">Close</button>
          </dialog>
          <form>
              <h3 class="title">Get email updates when:</h3>
              <div class="checkbox-container">
                  <div class="flex-container">
                      <input type="checkbox" id="owner" name="owner" checked>
                      <label for="owner">You're the owner</label>
                  </div>
                  <div class="flex-container">
                      <input type="checkbox" id="assigne" name="assigne">
                      <label for="assigne">You're the assigne</label>
                  </div>
                  <div class="flex-container">
                      <input type="checkbox" id="reporter" name="reporter">
                      <label for="reporter">You're the reporter</label>
                  </div>
                  <div class="flex-container">
                      <input type="checkbox" id="mentioned" name="mentioned" checked>
                      <label for="mentioned">Someone mentions you</label>
                  </div>
                  <div class="flex-container">
                      <input type="checkbox" id="assigned" name="assigned">
                      <label for="assigned">Someone is assigning you</label>
                  </div>
              </div>
              <div class="notification-info">
                  <p>You may also receive other email notifications your admin configured. <a href="#">Learn more</a></p>
              </div>
              <h3 class="title">Email format:</h3>
              <div class="radio-container">
                  <div class="flex-container">
                      <input type="radio" id="html" name="emailFormat">
                      <label for="html">HTML</label>
                  </div>
                  <div class="flex-container">
                      <input type="radio" id="text" name="emailFormat" checked>
                      <label for="text">Text</label>
                  </div>
              </div>
              <button type="submit" class="save-button" @click="saveSettings">Save</button>
          </form>
      </div >`
});

app.mount('#app');