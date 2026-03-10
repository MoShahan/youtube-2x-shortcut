// ==UserScript==
// @name         YouTube 2x - Size & Weight Toggle
// @namespace    http://tampermonkey.net/
// @version      1.7
// @description  Small/Thin 2x when idle, Big/Bold 2x when active
// @author       Shahan
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addSpeedButton() {
        const player = document.querySelector('#movie_player') || document.querySelector('.html5-video-player');
        if (!player || player.querySelector('#brave-2x-btn')) return;

        const settingsBtn = player.querySelector('.ytp-settings-button');
        if (settingsBtn) {
            const btn = document.createElement('button');
            btn.id = 'brave-2x-btn';
            btn.className = 'ytp-button';
            btn.textContent = '2x';
            
            // Initial State: Thin and Small
            const idleStyle = `
                font-weight: 200 !important;
                font-size: 11px !important;
                color: #ddd !important;
                width: 40px !important;
                text-align: center !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                vertical-align: top !important;
                opacity: 0.7;
                transition: all 0.15s ease-in-out;
            `;

            // Active State: Bold and Big
            const activeStyle = `
                font-weight: 900 !important;
                font-size: 16px !important;
                color: white !important;
                width: 40px !important;
                text-align: center !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                vertical-align: top !important;
                opacity: 1;
                transition: all 0.1s ease-in-out;
            `;

            btn.style.cssText = idleStyle;

            btn.onclick = (e) => {
                e.preventDefault();
                const video = document.querySelector('video');
                if (video) {
                    if (video.playbackRate === 2) {
                        video.playbackRate = 1;
                        btn.style.cssText = idleStyle;
                    } else {
                        video.playbackRate = 2;
                        btn.style.cssText = activeStyle;
                    }
                }
            };

            settingsBtn.parentNode.insertBefore(btn, settingsBtn);
        }
    }

    const observer = new MutationObserver(addSpeedButton);
    observer.observe(document.body, { childList: true, subtree: true });

    addSpeedButton();
})();
