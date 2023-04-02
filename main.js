import { db } from "./firebase";
import {
  collection,
  updateDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import QRCode from "qrcode";
// import qr from "qr.js";

// console.log(qr);
// import qr from

// console.log(qr_image.image("nananana"));

// console.log(QRCode);
// var testQr = QRCode.toDataURL("nananan");
// console.log(testQr);
// QRCode.toFile("images/test.png", "nanananana", { width: 500 });

// import { uuid } from "uuidv4";
document.querySelector("#app").innerHTML = `
<div class="card mx-auto m-5 w-25">
<div class="card-body">
  <form id="form-ticket" action="">
    <div class="mb-3">
      <label for="bandName" class="form-label">Band</label>
      <input
        type="text"
        class="form-control"
        id="bandName"
        aria-describedby="bandNameHelp"
        required
      />
      <div id="bandNameHelp" class="form-text">
        Please write here the name of the Band
      </div>
    </div>
    <div class="mb-3">
      <label for="type" class="form-label">type</label>
      <select
        class="form-select"
        id="type"
        aria-label="Default select example"
        required
      >
        <option selected>----</option>
        <option value="VIP">VIP</option>
        <option value="RESA">RESA</option>
        <option value="SIMPLE">SIMPLE</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="bandName" class="form-label">Prefix</label>
      <input
        type="text"
        class="form-control"
        id="prefix"
        aria-describedby="prefixHelp"
        required
      />
      <div id="prefixHelp" class="form-text">
        Please write here the prefix of the place
      </div>
    </div>
    <div class="mb-3">
      <label for="bandName" class="form-label">Start Number</label>
      <input
        type="number"
        class="form-control"
        id="startNumber"
        aria-describedby="startNumberHelp"
        required
      />
      <div id="startNumberHelp" class="form-text">
        Please choose from where start the number of the place
      </div>
    </div>

    <div class="mb-3">
      <label for="bandName" class="form-label">Quantity</label>
      <input
        type="number"
        class="form-control"
        id="quantity"
        aria-describedby="quantityHelp"
        required
      />
      <div id="quantityHelp" class="form-text">
        how much do you want to generate?
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</div>
`;

const formTicket = document.querySelector("#form-ticket");

formTicket.addEventListener("submit", (event) => {
  event.preventDefault();
  // let elements = Array.from(event.currentTarget.elements);
  let elements = Array.prototype.slice.call(event.currentTarget.elements);
  console.log(elements);
  let quantity = parseInt(elements[4].value);
  let bandName = elements[0].value;
  let type = elements[1].value;
  let prefix = elements[2].value;
  let startNumber = parseInt(elements[3].value);

  // const cryptkey = CryptoJS.enc.Utf8.parse("hafaliana_hamamiana_lay_masoandro_12357");//Thisisasamplekeythatamusinginmyc
  // const cryptiv = CryptoJS.enc.Utf8.parse("ndao_hiara_handeha_654789");//thisismysampleiv

  const key = "hafaliana_hamamiana_lay_masoandro_12357";

  console.log(quantity);

  for (let i = startNumber; i < quantity + startNumber; i++) {
    console.log("test");
    let uuid = self.crypto.randomUUID();
    let qr_string =
      bandName.replaceAll(" ", "_") + "_15_04_2023_" + type + "_" + prefix + i;
    console.log(qr_string);
    console.log(uuid);
    // let qr = QRCode.toFile("images/" + qr_string + ".png", uuid, { width: 500 });

    // qr.then((a) => console.log(a));

    // let qr = qrcode(uuid);
    // console.log(qr);

    // console.log("eto o eto o eto o");
    // let dataUrl = document.querySelector("#qrcode").querySelector("img").src;
    // downloadURI(dataUrl, "qrcode.png");
    let dataUrl;
    let qr = QRCode.toDataURL(uuid, {
      width: 500,
      errorCorrectionLevel: "L",
      // margin: 100,
      scale: 1,
      color: {
        dark: "#FFF", // Blue dots
        light: "#0000", // Transparent background
      },
    }).then((response) => {
      dataUrl = document.createElement("img");
      dataUrl.src = response;

      var link = document.createElement("a");
      link.download = "images/" + qr_string + ".png";
      link.href = dataUrl.src;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      link = null;
      dataUrl = null;

      // setDoc(doc(db, "qr", qr_string), {
      //   band_name: bandName,
      //   type: type,
      //   place: prefix + i,
      //   filename: qr_string + ".png",
      //   uuid: uuid,
      // });
    });
  }
});

function updateDocument() {
  // const querySnapshot = await getDocs(collection(db, "qr"));
  querySnapshot.forEach((document) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(document.id, " => ", document.data());
    let ticketRef = doc(db, "qr", document.id);
    updateDoc(ticketRef, {
      status: "initialized",
    });
  });
}

// setupCounter(document.querySelector('#counter'))
