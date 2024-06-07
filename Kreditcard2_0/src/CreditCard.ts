class CreditCard {
  creditCardNumber: number;
  cardHolder: string;
  expirationDate: Date;
  cvv: number;
  constructor(
    creditCardNumber: number,
    cardHolder: string,
    expirationDate: Date,
    cvv: number
  ) {
    this.creditCardNumber = creditCardNumber;
    this.cardHolder = cardHolder;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
  }
}
export default CreditCard;
