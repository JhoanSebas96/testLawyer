import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { query, collection, where, getDocs, getFirestore } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAJjGnJ6AMa3hOx1oHea72wC32ml1NbBuI",
    authDomain: "lawft-15a2b.firebaseapp.com",
    projectId: "lawft-15a2b",
    storageBucket: "lawft-15a2b.appspot.com",
    messagingSenderId: "985988342015",
    appId: "1:985988342015:web:0bc8ac41c389a85ee52cca"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const menu = document.getElementById("links");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const inputSearch = document.getElementById("input-search")
const btnSearch = document.getElementById("btn-search");
const tabla2 = document.getElementById("tabla");


function toggleMenu(){
    menu.classList.toggle("menu-opened");
}

openMenuBtn.addEventListener("click",toggleMenu);
closeMenuBtn.addEventListener("click",toggleMenu);

btnSearch.addEventListener("click", async (e) => {
    const q = query(
      collection(db, "casos"),
      where("cedula", "==", inputSearch.value)
    );
    const querySnapshot = await getDocs(q);
    tabla2.innerHTML = "";
    querySnapshot.forEach((doc) => {
      tabla2.innerHTML += `
              <tr>
                  <td>${doc.data().cedula}</td>
                  <td><a href="${doc.data().url}" target="_blank">${doc.data().namePdf}</a></td>
              </tr>
              
          `;
    });
});