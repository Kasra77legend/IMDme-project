// js/signInNotification.js

export function setupSignInNotification() {
    const notifElement = document.querySelector(".sign-in-notif");

    if (!notifElement) return;

    const showNotification = () => notifElement.classList.add("notif");
    const hideNotification = () => notifElement.classList.remove("notif");

    setTimeout(() => {
        showNotification();
        setTimeout(hideNotification, 10000);
    }, 2000);
}