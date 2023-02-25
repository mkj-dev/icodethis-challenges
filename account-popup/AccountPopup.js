const accountPopup = {
    props: {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        }
    },
    methods: {
        showAccountInfo() {
            const accountPopup = document.getElementById('account-popup');
            const html =
            /*html*/
            `<div id="account-modal" class="account-wrapper visible">
                <img src="./avatar.png" class="account-profile-img">
                <div class="account-info">
                    <h2 style="margin-bottom: 0;">${ this.name }</h2>
                    <p style="margin-top: 0; font-size: 1.25rem;">${ this.username }</p>
                </div>
                <div class="connect-other-account-wrapper">
                    <p class="add-account-sign">+</p>
                    <p class="add-account-p">Connect other account</p>
                </div>
                <hr class="div-line">
                <div class="account-interactions">
                    <div class="interaction">
                        <p><span class="material-symbols-outlined">
                        support_agent
                        </span></p>
                        <p>Support</p>
                    </div>
                    <div class="interaction">
                        <p><span class="material-symbols-outlined">
                        settings
                        </span></p>
                        <p>Settings</p>
                    </div>
                    <div class="interaction">
                        <p><span class="material-symbols-outlined">
                        star
                        </span></p>
                        <p>Upgrade</p>
                    </div>
                    <div class="interaction">
                        <p><span class="material-symbols-outlined">
                        logout
                        </span></p>
                        <p>Log out</p>
                    </div>
                </div>
            </div>`
             
            accountPopup.insertAdjacentHTML('beforebegin', html);
        }
    },
    template:
    /*html*/
    `<div id="account-popup" class="account-wrapper" @click="showAccountInfo">
        <img src="./avatar.png" class="account-profile-img">
        <div class="account-info">
            <h2 style="margin-bottom: 0;">{{ name }}</h2>
            <p style="margin-top: 0; font-size: 1.25rem;">{{ username }}</p>
        </div>
    </div>`
};