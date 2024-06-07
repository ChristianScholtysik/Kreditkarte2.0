//!

// Aufgabe

// - Erstelle eine interaktive HTML-Seite, auf der Benutzer:innen mehrere Kreditkarteninformationen eingeben können.
// - Es sollen maximal 5 Kreditkarten erfasst werden können

// ? Formular
// - Das Eingabeformular sollte die folgenden Felder enthalten:
//    * - Kartennummer (16-stellige Nummer)
//    * - Karteninhaber
//    * - Ablaufdatum ([Monat/Jahr] -> muss in Zukunft liegen
//    * - CVV (3-stellige Nummer auf der Rückseite der Karte)
//    * → Zeige für das CVV-Feld einen Tooltip an, der erklärt, wo Benutzer:innen die CVV-Nummer auf ihrer Kreditkarte finden können.

// ? Funktion Submit:
// - Über einen Button “Submit” wird geprüft, ob die Daten gültig sind und die Kreditkarte gespeichert
//
// * -> Speicherung als Objekt in Arraation unter Bedingung
// * -> Klasse CreditCard
// * -> Arraation Anlegen
// - bei gültigen Daten wird eine Instanz einer Klasse CreditCard angelegt - die Kreditkarten sollen in einem Arraation verwaltet werden
// * -> Prüfung Gültigkeit/Validierung:
// - Die Eingaben sollen alle validiert werden
// * Bedingung 1:
// - Überprüfung Kartennummer: Stelle sicher, dass die eingegebene Kartennummer 16-stellig und gültig ist.
// * Bedingung 2:
// - Überprüfung Ablaufdatum: Überprüfe, ob das Ablaufdatum in der Zukunft liegt.
// * Bedingung 3:
// - CVV-Überprüfung: Überprüfe, ob der CVV eine dreistellige Zahl ist
// * Wenn eine/mehrere Bedingungen not true, dann gebe Fehlermeldung aus
// - Zeige dem Benutzer entsprechende Fehlermeldungen an, falls die eingegebenen Informationen nicht den Anforderungen entsprechen.

// * Ausgabe 1 Kreditkarte bei Erfüllung aller Bedingungen:
// * Ausgabefunktion:
// - die eingegebenen Daten werden dann oben auf dem Bild einer Kreditkarte angezeigt
// - legt man weitere Kreditkarten an, werden sie nebeneinander über dem Formular angezeigt
// - als Hintergrundbild(er) kannst du Bilder verwenden, die echten Kreditkarten ähneln
// * Löschfunktion:
// - klickt man doppelt auf eine Kreditkarte, wird sie gelöscht

import CreditCard from "./CreditCard";

const ouputField = document.getElementById("output-field") as HTMLOutputElement;
const cardNumberInput = document.getElementById(
  "card-number-input"
) as HTMLInputElement;
const cardHolderInput = document.getElementById(
  "card-holder-input"
) as HTMLInputElement;
const dateInput = document.getElementById("date-input") as HTMLInputElement;
const cvvInput = document.getElementById("cvv-input") as HTMLInputElement;
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;




//bedingung 1
function cardNumberValidation () {
  const cardNumberInputValue = cardNumberInput.value;
  if (cardNumberInputValue.length !== 16) {
    console.log("Die Länge der Kartennummer besteht nicht aus 16 Zeichen");
    return false;
  }if (!/^\d+$/.test(cardNumberInputValue)) {
    console.log("Die Kartennummer enthält ungültige Zeichen");
    return false;
  }
  return true;
  
}

//bedingung 2
function cvvValidation () {
  const cvvInputValue = cvvInput.value;
  if (cvvInputValue.length !== 3) {
    console.log("Die Länge der CVVnummer besteht nicht aus 3 Zeichen");
    return false;
  }
  if (!/^\d+$/.test(cvvInputValue)) {
    console.log("Die CVVnummer enthält ungültige Zeichen");
    return false;
  }
  return true;
}





const allCreditCards: CreditCard[] = [];

function resultCard() {
  const outputField = document.getElementById("outputField");
  if (outputField) {
    allCreditCards.forEach((creditCard) => {
      const card = document.createElement("div");
      card.className = "credit-card";

      const cardHeader = document.createElement("div");
      cardHeader.className = "card-header";
      const bankName = document.createElement("span");
      bankName.className = "bank-name";
      bankName.innerText = "NEO Bank";
      const chip = document.createElement("img");
      chip.src = "./assets/img/chip.png";
      chip.alt = "Chip";
      chip.className = "chip";
      cardHeader.appendChild(bankName);
      cardHeader.appendChild(chip);
      card.appendChild(cardHeader);

      const cardNumber = document.createElement("div");
      cardNumber.className = "card-number";
      cardNumber.innerText = creditCard.creditCardNumber.toString();
      card.appendChild(cardNumber);

      const cardDetails = document.createElement("div");
      cardDetails.className = "card-details";
      const cardHolder = document.createElement("div");
      cardHolder.className = "card-holder";
      const cardHolderLabel = document.createElement("span");
      cardHolderLabel.className = "label";
      cardHolderLabel.innerText = "Card Holder";
      const cardHolderValue = document.createElement("span");
      cardHolderValue.className = "value";
      cardHolderValue.innerText = creditCard.cardHolder;
      cardHolder.appendChild(cardHolderLabel);
      cardHolder.appendChild(cardHolderValue);

      const expirationDate = document.createElement("div");
      expirationDate.className = "expiration-date";
      const expirationDateLabel = document.createElement("span");
      expirationDateLabel.className = "label";
      expirationDateLabel.innerText = "Valid Thru";
      const expirationDateValue = document.createElement("span");
      expirationDateValue.className = "value";
      expirationDateValue.innerText = creditCard.expirationDate.toDateString();
      expirationDate.appendChild(expirationDateLabel);
      expirationDate.appendChild(expirationDateValue);

      cardDetails.appendChild(cardHolder);
      cardDetails.appendChild(expirationDate);
      card.appendChild(cardDetails);

      const cardFooter = document.createElement("div");
      cardFooter.className = "card-footer";
      const visaLogo = document.createElement("img");
      visaLogo.src = "./assets/img/visa_logo.png";
      visaLogo.alt = "Visa Logo";
      visaLogo.className = "visa-logo";
      cardFooter.appendChild(visaLogo);
      card.appendChild(cardFooter);

      outputField.appendChild(card);
    });
  }
}

resultCard(); //TODO: Delete!!

