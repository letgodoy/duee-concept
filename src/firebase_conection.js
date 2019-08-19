// Set the configuration for your app
  // TODO: Replace with your project's config object
  var firebaseConfig = {
    apiKey: "AIzaSyDAw2n2qtVLOuQOqLi3Lb8WDe36J46SANM",
    authDomain: "duee-site.firebaseapp.com",
    databaseURL: "https://duee-site.firebaseio.com",
    projectId: "duee-site",
    storageBucket: "",
    messagingSenderId: "84661138996",
    appId: "1:84661138996:web:dafd0359a41cb228"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();