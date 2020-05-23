import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCO-jaH_21HLtMpNrGs-dQEYfw1d9GQKFg",
    authDomain: "tinbot-twgvbp.firebaseapp.com",
    databaseURL: "https://tinbot-twgvbp.firebaseio.com",
    projectId: "tinbot-twgvbp",
    storageBucket: "tinbot-twgvbp.appspot.com",
    messagingSenderId: "12875515310",
    appId: "1:12875515310:web:6e2360b0e8635ac604b43f"
  };

var fire = firebase.initializeApp(firebaseConfig);
export default fire;
