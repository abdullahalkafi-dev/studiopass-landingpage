import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface OperatingCountry {
  name: string;
  code: string;
  phoneCode: string;
  currency: string;
  currencySymbol: string;
  flag: string;
  telcos: string;
  status: string;
}

export const OPERATING_COUNTRIES: OperatingCountry[] = [
  {
    name: "Kenya",
    code: "KE",
    phoneCode: "+254",
    currency: "KES (Shilling)",
    currencySymbol: "KSh",
    flag: "🇰🇪",
    telcos: "Safaricom M-Pesa, Airtel Money",
    status: "Active Broadcasters",
  },
  {
    name: "Uganda",
    code: "UG",
    phoneCode: "+256",
    currency: "UGX (Shilling)",
    currencySymbol: "USh",
    flag: "🇺🇬",
    telcos: "MTN MoMo, Airtel Money",
    status: "Active Broadcasters",
  },
  {
    name: "Tanzania",
    code: "TZ",
    phoneCode: "+255",
    currency: "TZS (Shilling)",
    currencySymbol: "TSh",
    flag: "🇹🇿",
    telcos: "Vodacom M-Pesa, Tigo Pesa, Airtel",
    status: "Active Broadcasters",
  },
  {
    name: "Nigeria",
    code: "NG",
    phoneCode: "+234",
    currency: "NGN (Naira)",
    currencySymbol: "₦",
    flag: "🇳🇬",
    telcos: "MTN MoMo, Airtel Money, Flutterwave",
    status: "Active Market",
  },
  {
    name: "Ghana",
    code: "GH",
    phoneCode: "+233",
    currency: "GHS (Cedi)",
    currencySymbol: "GH₵",
    flag: "🇬🇭",
    telcos: "MTN MoMo, Telecel Cash, AT Money",
    status: "Active Market",
  },
  {
    name: "South Africa",
    code: "ZA",
    phoneCode: "+27",
    currency: "ZAR (Rand)",
    currencySymbol: "R",
    flag: "🇿🇦",
    telcos: "Vodacom, MTN, Capitec Pay, Ozow",
    status: "Active Market",
  },
  {
    name: "Egypt",
    code: "EG",
    phoneCode: "+20",
    currency: "EGP (Pound)",
    currencySymbol: "E£",
    flag: "🇪🇬",
    telcos: "Vodafone Cash, InstaPay, Orange Money",
    status: "Active Market",
  },
];
