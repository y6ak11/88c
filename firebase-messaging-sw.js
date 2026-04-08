importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD4pAwLVIJp-YOzMX2WDqxAseTDxP3lek8",
  authDomain: "cafe-51180.firebaseapp.com",
  projectId: "cafe-51180",
  messagingSenderId: "723529852593",
  appId: "1:723529852593:web:f7899b203b47c2f5b6a490"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910761.png",
    vibrate: [500,200,500]
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
