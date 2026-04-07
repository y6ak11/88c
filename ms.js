// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// ===== Firebase Config نفس config الأدمن =====
firebase.initializeApp({
  apiKey: "AIzaSyD4pAwLVIJp-YOzMX2WDqxAseTDxP3lek8",
  authDomain: "cafe-51180.firebaseapp.com",
  projectId: "cafe-51180",
  messagingSenderId: "723529852593",
  appId: "1:723529852593:web:f7899b203b47c2f5b6a490"
});

const messaging = firebase.messaging();

// استقبال الإشعارات في الخلفية
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon, // أيقونة
    image: payload.notification.image, // صورة كبيرة
    vibrate: [200, 100, 200], // اهتزاز
    sound: payload.notification.sound // صوت
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});