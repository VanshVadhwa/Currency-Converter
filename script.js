const currencyCountryMapping = {
  USD: { symbol: "$", name: "United States Dollar" },
  EUR: { symbol: "€", name: "Euro" },
  GBP: { sumbol: "(£)", name: "British Pound Sterling" },
  AUD: { symbol: "A$", name: "Australian Dollar" },
  CAD: { symbol: "CA$", name: "Canadian Dollar" },
  CHF: { symbol: "CHF", name: "Swiss Franc" },
  CNY: { symbol: "CN¥", name: "Chinese Yuan" },
  JPY: { symbol: "¥", name: "Japanese Yen" },
  INR: { symbol: "₹", name: "Indian Rupee" },
  NZD: { symbol: "NZ$", name: "New Zealand Dollar" },
  SGD: { symbol: "S$", name: "Singapore Dollar" },
  HKD: { symbol: "HK$", name: "Hong Kong Dollar" },
  SEK: { symbol: "kr", name: "Swedish Krona" },
  NOK: { symbol: "kr", name: "Norwegian Krone" },
  DKK: { symbol: "kr", name: "Danish Krone" },
  MXN: { symbol: "MX$", name: "Mexican Peso" },
  BRL: { symbol: "R$", name: "Brazilian Real" },
  RUB: { symbol: "₽", name: "Russian Ruble" },
  ZAR: { symbol: "R", name: "South African Rand" },
  TRY: { symbol: "₺", name: "Turkish Lira" },
  KRW: { symbol: "₩", name: "South Korean Won" },
  AED: { symbol: "د.إ", name: "United Arab Emirates Dirham" },
  SAR: { symbol: "ر.س", name: "Saudi Riyal" },
  ARS: { symbol: "$", name: "Argentine Peso" },
  CLP: { symbol: "$", name: "Chilean Peso" },
  COP: { symbol: "$", name: "Colombian Peso" },
  IDR: { symbol: "Rp", name: "Indonesian Rupiah" },
  MYR: { symbol: "RM", name: "Malaysian Ringgit" },
  PHP: { symbol: "₱", name: "Philippine Peso" },
  THB: { symbol: "฿", name: "Thai Baht" },
  VND: { symbol: "₫", name: "Vietnamese Dong" },
  PLN: { symbol: "zł", name: "Polish Zloty" },
  HUF: { symbol: "Ft", name: "Hungarian Forint" },
  CZK: { symbol: "Kč", name: "Czech Koruna" },
  ISK: { symbol: "kr", name: "Icelandic Krona" },
  HRK: { symbol: "kn", name: "Croatian Kuna" },
  RON: { symbol: "lei", name: "Romanian Leu" },
  BGN: { symbol: "лв", name: "Bulgarian Lev" },
  EGP: { symbol: "E£", name: "Egyptian Pound" },
  NGN: { symbol: "₦", name: "Nigerian Naira" },
  LKR: { symbol: "රු", name: "Sri Lankan Rupee" },
  UAH: { symbol: "₴", name: "Ukrainian Hryvnia" },
  BAM: { symbol: "KM", name: "Bosnia and Herzegovina Convertible Marka" },
  BHD: { symbol: "BD", name: "Bahraini Dinar" },
  BDT: { symbol: "৳", name: "Bangladeshi Taka" },
  BWP: { symbol: "P", name: "Botswana Pula" },
  BND: { symbol: "B$", name: "Brunei Dollar" },
  BIF: { symbol: "FBu", name: "Burundian Franc" },
  CVE: { symbol: "CVE", name: "Cape Verdean Escudo" },
  XAF: { symbol: "FCFA", name: "Central African CFA Franc" },
  XOF: { symbol: "CFA", name: "West African CFA Franc" },
  KMF: { symbol: "CF", name: "Comorian Franc" },
  XPF: { symbol: "CFP", name: "CFP Franc" },
  DJF: { symbol: "Fdj", name: "Djiboutian Franc" },
  ERN: { symbol: "Nfk", name: "Eritrean Nakfa" },
  ETB: { symbol: "Br", name: "Ethiopian Birr" },
  FJD: { symbol: "FJ$", name: "Fijian Dollar" },
  GMD: { symbol: "D", name: "Gambian Dalasi" },
  GHS: { symbol: "GH₵", name: "Ghanaian Cedi" },
  GNF: { symbol: "FG", name: "Guinean Franc" },
  HTG: { symbol: "G", name: "Haitian Gourde" },
  HNL: { symbol: "L", name: "Honduran Lempira" },
  IQD: { symbol: "ع.د", name: "Iraqi Dinar" },
  JOD: { symbol: "JD", name: "Jordanian Dinar" },
  KES: { symbol: "KSh", name: "Kenyan Shilling" },
  KWD: { symbol: "KD", name: "Kuwaiti Dinar" },
  LSL: { symbol: "LSL", name: "Lesotho Loti" },
  LRD: { symbol: "L$", name: "Liberian Dollar" },
  LYD: { symbol: "LD", name: "Libyan Dinar" },
  MGA: { symbol: "Ar", name: "Malagasy Ariary" },
  MWK: { symbol: "MK", name: "Malawian Kwacha" },
  MRO: { symbol: "UM", name: "Mauritanian Ouguiya" },
  MUR: { symbol: "Rs", name: "Mauritian Rupee" },
  MDL: { symbol: "MDL", name: "Moldovan Leu" },
  MNT: { symbol: "₮", name: "Mongolian Tugrik" },
  MAD: { symbol: "MAD", name: "Moroccan Dirham" },
  MZN: { symbol: "MT", name: "Mozambican Metical" },
  MMK: { symbol: "K", name: "Myanmar Kyat" },
  NPR: { symbol: "Rs", name: "Nepalese Rupee" },
  NAD: { symbol: "N$", name: "Namibian Dollar" },
  OMR: { symbol: "ر.ع.", name: "Omani Rial" },
  PKR: { symbol: "₨", name: "Pakistani Rupee" },
  PGK: { symbol: "PGK", name: "Papua New Guinean Kina" },
  PYG: { symbol: "₲", name: "Paraguayan Guarani" },
  QAR: { symbol: "QR", name: "Qatari Riyal" },
  RWF: { symbol: "FRw", name: "Rwandan Franc" },
  WST: { symbol: "WS$", name: "Samoan Tala" },
  STN: { symbol: "Db", name: "São Tomé and Príncipe Dobra" },
  SLL: { symbol: "Le", name: "Sierra Leonean Leone" },
  SOS: { symbol: "S", name: "Somali Shilling" },
  SSP: { symbol: "SSP", name: "South Sudanese Pound" },
  SDG: { symbol: "SDG", name: "Sudanese Pound" },
  SZL: { symbol: "SZL", name: "Swazi Lilangeni" },
  SYP: { symbol: "LS", name: "Syrian Pound" },
  TJS: { symbol: "TJS", name: "Tajikistani Somoni" },
  TZS: { symbol: "TSh", name: "Tanzanian Shilling" },
  TOP: { symbol: "T$", name: "Tongan Pa'anga" },
  TTD: { symbol: "TT$", name: "Trinidad and Tobago Dollar" },
  TND: { symbol: "DT", name: "Tunisian Dinar" },
  UGX: { symbol: "USh", name: "Ugandan Shilling" },
  UZS: { symbol: "UZS", name: "Uzbekistani Som" },
  VUV: { symbol: "VT", name: "Vanuatu Vatu" },
  YER: { symbol: "YR", name: "Yemeni Rial" },
  ZMW: { symbol: "ZK", name: "Zambian Kwacha" },
  ALL: { symbol: "Lek", name: "Albanian Lek" },
  AMD: { symbol: "֏", name: "Armenian Dram" },
  ANG: { symbol: "ƒ", name: "Netherlands Antillean Guilder" },
  AOA: { symbol: "Kz", name: "Angolan Kwanza" },
  AWG: { symbol: "ƒ", name: "Aruban Florin" },
  AZN: { symbol: "₼", name: "Azerbaijani Manat" },
  BBD: { symbol: "Bds$", name: "Barbadian Dollar" },
  BMD: { symbol: "BD$", name: "Bermudian Dollar" },
  BOB: { symbol: "Bs.", name: "Bolivian Boliviano" },
  BSD: { symbol: "B$", name: "Bahamian Dollar" },
  BTN: { symbol: "Nu.", name: "Bhutanese Ngultrum" },
  BYN: { symbol: "Br", name: "Belarusian Ruble" },
  BZD: { symbol: "BZ$", name: "Belize Dollar" },
  CDF: { symbol: "FC", name: "Congolese Franc" },
  CRC: { symbol: "₡", name: "Costa Rican Colón" },
  CUP: { symbol: "$MN", name: "Cuban Peso" },
  DOP: { symbol: "RD$", name: "Dominican Peso" },
  DZD: { symbol: "دج", name: "Algerian Dinar" },
  FKP: { symbol: "FK£", name: "Falkland Islands Pound" },
  FOK: { symbol: "FOK", name: "Faroese Króna" },
  GEL: { symbol: "₾", name: "Georgian Lari" },
  GGP: { symbol: "GGP", name: "Guernsey Pound" },
  GIP: { symbol: "£", name: "Gibraltar Pound" },
  GTQ: { symbol: "Q", name: "Guatemalan Quetzal" },
  GYD: { symbol: "G$", name: "Guyanaese Dollar" },
  ILS: { symbol: "₪", name: "Israeli New Shekel" },
  IMP: { symbol: "IMP", name: "Isle of Man Pound" },
  IRR: { symbol: "﷼", name: "Iranian Rial" },
  JEP: { symbol: "JEP", name: "Jersey Pound" },
  JMD: { symbol: "J$", name: "Jamaican Dollar" },
  KGS: { symbol: "сом", name: "Kyrgyzstani Som" },
  KHR: { symbol: "៛", name: "Cambodian Riel" },
  KID: { symbol: "KID", name: "Kiribati Dollar" },
  KYD: { symbol: "CI$", name: "Cayman Islands Dollar" },
  KZT: { symbol: "₸", name: "Kazakhstani Tenge" },
  LAK: { symbol: "₭", name: "Laotian Kip" },
  LBP: { symbol: "ل.ل", name: "Lebanese Pound" },
  MKD: { symbol: "ден", name: "Macedonian Denar" },
  MOP: { symbol: "MOP$", name: "Macanese Pataca" },
  MRU: { symbol: "UM", name: "Mauritanian Ouguiya" },
  MVR: { symbol: "MVR", name: "Maldivian Rufiyaa" },
  NIO: { symbol: "C$", name: "Nicaraguan Córdoba" },
  PAB: { symbol: "B/.", name: "Panamanian Balboa" },
  PEN: { symbol: "S/.", name: "Peruvian Nuevo Sol" },
  RSD: { symbol: "дин.", name: "Serbian Dinar" },
  SBD: { symbol: "SI$", name: "Solomon Islands Dollar" },
  SCR: { symbol: "SCR", name: "Seychellois Rupee" },
  SHP: { symbol: "SH£", name: "Saint Helena Pound" },
  SLE: { symbol: "SLL", name: "Sierra Leonean Leone" },
  SRD: { symbol: "SRD", name: "Surinamese Dollar" },
  TMT: { symbol: "TMT", name: "Turkmenistani Manat" },
  TVD: { symbol: "TVD", name: "Tuvaluan Dollar" },
  TWD: { symbol: "NT$", name: "New Taiwan Dollar" },
  UYU: { symbol: "$U", name: "Uruguayan Peso" },
  VES: { symbol: "Bs.S", name: "Venezuelan Bolívar" },
  XCD: { symbol: "EC$", name: "East Caribbean Dollar" },
  XDR: { symbol: "XDR", name: "Special Drawing Rights" },
  ZWL: { symbol: "Z$", name: "Zimbabwean Dollar" },
  AFN: { symbol: "؋", name: "Afghan Afghani" },
};

// Function to fetch currencies and populate dropdowns
function populateCurrencies() {
  fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => response.json())
    .then(data => {
      var currencies = Object.keys(data.rates);
      var fromCurrencyDropdown = document.getElementById('fromCurrency');
      var toCurrencyDropdown = document.getElementById('toCurrency');

      currencies.forEach(currency => {
        var option1 = document.createElement('option');
        option1.value = currency;
        option1.innerText = `${getCurrencyDisplayName(currency)} (${getCurrencySymbol(currency)} ${currency})`;
        fromCurrencyDropdown.appendChild(option1);

        var option2 = document.createElement('option');
        option2.value = currency;
        option2.innerText = `${getCurrencyDisplayName(currency)} (${getCurrencySymbol(currency)} ${currency})`;
        toCurrencyDropdown.appendChild(option2);
      });
    })
    .catch(error => {
      console.log(error);
      document.getElementById('result').innerText = 'Error fetching data. Please try again later.';
    });
}

function getCurrencyDisplayName(currencyCode) {
  const currencyInfo = currencyCountryMapping[currencyCode];
  return `${currencyInfo.name}`;
}

function getCurrencySymbol(currencyCode) {
  const currencyInfo = currencyCountryMapping[currencyCode];
  return currencyInfo.symbol || currencyCode;
}

document.addEventListener('DOMContentLoaded', function() {
  populateCurrencies();

  document.getElementById('convertBtn').addEventListener('click', function() {
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
    var amount = document.getElementById('amount').value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then(response => response.json())
      .then(data => {
        var rate = data.rates[toCurrency];
        var convertedAmount = amount * rate;
        document.getElementById('result').innerHTML = `<span style="font-size: larger;">${getCurrencyDisplayName(fromCurrency)} (${getCurrencySymbol(fromCurrency)}) ${amount} = ${getCurrencyDisplayName(toCurrency)} (${getCurrencySymbol(toCurrency)}) ${convertedAmount.toFixed(2)}</span>`;
      })
      .catch(error => {
        console.log(error);
        document.getElementById('result').innerText = 'Error fetching data. Please try again later.';
      });
  });
});

