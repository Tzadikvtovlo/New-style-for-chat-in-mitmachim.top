// ==UserScript==
// @name         עיצוב צאט מתמחים.טופ
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  New style for chat in mitmachim.top
// @author       צדיק וטוב לו
// @match        https://mitmachim.top/*
// @updateURL    https://raw.githubusercontent.com/Tzadikvtovlo/New-style-for-chat-in-mitmachim.top/main/Tampermonkey.user.js
// @downloadURL  https://raw.githubusercontent.com/Tzadikvtovlo/New-style-for-chat-in-mitmachim.top/main/Tampermonkey.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mitmachim.top
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let sy = document.createElement('style');

sy.innerHTML = `

/* רקע הצ'אט בצבע חום-בז' עם תבנית הציורים - מותאם לחלונית קטנה ולמסך מלא */
.modal-content, [component="chat/main-wrapper"] {
    background-color: #efeae2 !important;
    background-image: url(https://mitmachim.top/assets/uploads/files/1689758993836-%D7%94%D7%95%D7%A8%D7%93%D7%94.png) !important;
    background-repeat: repeat !important;
}

/* הצד השני - הודעות נכנסות */
[data-self="0"][component="chat/message"]{
    background-color: #fff !important;
    border-radius: 20px 20px 0px 20px !important;
    margin-left: 50px !important;
    padding-right: 21px !important;
    margin-left: auto !important;
    width: fit-content;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15) !important; /* הצללה לנוכחות בולטת */
}

/* הצד שלי - הודעות יוצאות */
[data-self="1"][component="chat/message"]{
    background-color: #d9fdd3 !important; /* ירוק וואצאפ */
    width: fit-content;
    border-radius: 20px 20px 20px 0px !important;
    margin-right: auto !important;
    padding-left: 21px !important;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15) !important; /* הצללה לנוכחות בולטת */
}

.chat-message.mx-2.pe-2.clear{
    margin-bottom: 10px;
    padding: 15px 20px 0px 20px !important;
}

[component="chat/message"] {
    margin-top: 9px;
    padding-right: 17px;
}

[component="chat/message"][data-break="false"] {
    padding-top: 13px;
}

`

document.body.append(sy);

$(document).on('dblclick', '[component="chat/message/body"]', function () {
    const massage = this.innerText;
    const lines = massage.split('\n');
    const [input] = $('[component="chat/input"]');
    input.value += `>${lines.join('>')}\n\n`;
    input.focus()
});

})();
