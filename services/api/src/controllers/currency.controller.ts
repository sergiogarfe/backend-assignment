import { Request, Response } from "express";
import Currency, { ICurrency } from "../models/currency";

import {
  getCurrenciesRepository,
  createCurrencyRepository,
  deleteCurrencyRepository,
  getCurrencyByCodeRepository
  
} from "../repositories/currency.repository";


const physicalCurrencyList = [
  {
      "code": "AED"
  },
  {
      "code": "AFN"
  },
  {
      "code": "ALL"
  },
  {
      "code": "AMD"
  },
  {
      "code": "ANG"
  },
  {
      "code": "AOA"
  },
  {
      "code": "ARS"
  },
  {
      "code": "AUD"
  },
  {
      "code": "AWG"
  },
  {
      "code": "AZN"
  },
  {
      "code": "BAM"
  },
  {
      "code": "BBD"
  },
  {
      "code": "BDT"
  },
  {
      "code": "BGN"
  },
  {
      "code": "BHD"
  },
  {
      "code": "BIF"
  },
  {
      "code": "BMD"
  },
  {
      "code": "BND"
  },
  {
      "code": "BOB"
  },
  {
      "code": "BRL"
  },
  {
      "code": "BSD"
  },
  {
      "code": "BTN"
  },
  {
      "code": "BWP"
  },
  {
      "code": "BZD"
  },
  {
      "code": "CAD"
  },
  {
      "code": "CDF"
  },
  {
      "code": "CHF"
  },
  {
      "code": "CLF"
  },
  {
      "code": "CLP"
  },
  {
      "code": "CNH"
  },
  {
      "code": "CNY"
  },
  {
      "code": "COP"
  },
  {
      "code": "CUP"
  },
  {
      "code": "CVE"
  },
  {
      "code": "CZK"
  },
  {
      "code": "DJF"
  },
  {
      "code": "DKK"
  },
  {
      "code": "DOP"
  },
  {
      "code": "DZD"
  },
  {
      "code": "EGP"
  },
  {
      "code": "ERN"
  },
  {
      "code": "ETB"
  },
  {
      "code": "EUR"
  },
  {
      "code": "FJD"
  },
  {
      "code": "FKP"
  },
  {
      "code": "GBP"
  },
  {
      "code": "GEL"
  },
  {
      "code": "GHS"
  },
  {
      "code": "GIP"
  },
  {
      "code": "GMD"
  },
  {
      "code": "GNF"
  },
  {
      "code": "GTQ"
  },
  {
      "code": "GYD"
  },
  {
      "code": "HKD"
  },
  {
      "code": "HNL"
  },
  {
      "code": "HRK"
  },
  {
      "code": "HTG"
  },
  {
      "code": "HUF"
  },
  {
      "code": "ICP"
  },
  {
      "code": "IDR"
  },
  {
      "code": "ILS"
  },
  {
      "code": "INR"
  },
  {
      "code": "IQD"
  },
  {
      "code": "IRR"
  },
  {
      "code": "ISK"
  },
  {
      "code": "JEP"
  },
  {
      "code": "JMD"
  },
  {
      "code": "JOD"
  },
  {
      "code": "JPY"
  },
  {
      "code": "KES"
  },
  {
      "code": "KGS"
  },
  {
      "code": "KHR"
  },
  {
      "code": "KMF"
  },
  {
      "code": "KPW"
  },
  {
      "code": "KRW"
  },
  {
      "code": "KWD"
  },
  {
      "code": "KYD"
  },
  {
      "code": "KZT"
  },
  {
      "code": "LAK"
  },
  {
      "code": "LBP"
  },
  {
      "code": "LKR"
  },
  {
      "code": "LRD"
  },
  {
      "code": "LSL"
  },
  {
      "code": "LYD"
  },
  {
      "code": "MAD"
  },
  {
      "code": "MDL"
  },
  {
      "code": "MGA"
  },
  {
      "code": "MKD"
  },
  {
      "code": "MMK"
  },
  {
      "code": "MNT"
  },
  {
      "code": "MOP"
  },
  {
      "code": "MRO"
  },
  {
      "code": "MRU"
  },
  {
      "code": "MUR"
  },
  {
      "code": "MVR"
  },
  {
      "code": "MWK"
  },
  {
      "code": "MXN"
  },
  {
      "code": "MYR"
  },
  {
      "code": "MZN"
  },
  {
      "code": "NAD"
  },
  {
      "code": "NGN"
  },
  {
      "code": "NOK"
  },
  {
      "code": "NPR"
  },
  {
      "code": "NZD"
  },
  {
      "code": "OMR"
  },
  {
      "code": "PAB"
  },
  {
      "code": "PEN"
  },
  {
      "code": "PGK"
  },
  {
      "code": "PHP"
  },
  {
      "code": "PKR"
  },
  {
      "code": "PLN"
  },
  {
      "code": "PYG"
  },
  {
      "code": "QAR"
  },
  {
      "code": "RON"
  },
  {
      "code": "RSD"
  },
  {
      "code": "RUB"
  },
  {
      "code": "RUR"
  },
  {
      "code": "RWF"
  },
  {
      "code": "SAR"
  },
  {
      "code": "SBDf"
  },
  {
      "code": "SCR"
  },
  {
      "code": "SDG"
  },
  {
      "code": "SDR"
  },
  {
      "code": "SEK"
  },
  {
      "code": "SGD"
  },
  {
      "code": "SHIB"
  },
  {
      "code": "SHP"
  },
  {
      "code": "SLL"
  },
  {
      "code": "SOS"
  },
  {
      "code": "SRD"
  },
  {
      "code": "SYP"
  },
  {
      "code": "SZL"
  },
  {
      "code": "THB"
  },
  {
      "code": "TJS"
  },
  {
      "code": "TMT"
  },
  {
      "code": "TND"
  },
  {
      "code": "TOP"
  },
  {
      "code": "TRY"
  },
  {
      "code": "TTD"
  },
  {
      "code": "TWD"
  },
  {
      "code": "TZS"
  },
  {
      "code": "UAH"
  },
  {
      "code": "UGX"
  },
  {
      "code": "USD"
  },
  {
      "code": "UYU"
  },
  {
      "code": "UZS"
  },
  {
      "code": "VND"
  },
  {
      "code": "VUV"
  },
  {
      "code": "WBTC"
  },
  {
      "code": "WST"
  },
  {
      "code": "XAF"
  },
  {
      "code": "XCD"
  },
  {
      "code": "XDR"
  },
  {
      "code": "XOF"
  },
  {
      "code": "XPF"
  },
  {
      "code": "YER"
  },
  {
      "code": "ZAR"
  },
  {
      "code": "ZMW"
  },
  {
      "code": "ZWL"
  }
];

const digitalCurrencyList = [
  {
      "code": "1ST"
  },
  {
      "code": "2GIVE"
  },
  {
      "code": "808"
  },
  {
      "code": "AAVE"
  },
  {
      "code": "ABT"
  },
  {
      "code": "ABY"
  },
  {
      "code": "AC"
  },
  {
      "code": "ACT"
  },
  {
      "code": "ADA"
  },
  {
      "code": "ADT"
  },
  {
      "code": "ADX"
  },
  {
      "code": "AE"
  },
  {
      "code": "AEON"
  },
  {
      "code": "AGI"
  },
  {
      "code": "AGRS"
  },
  {
      "code": "AI"
  },
  {
      "code": "AID"
  },
  {
      "code": "AION"
  },
  {
      "code": "AIR"
  },
  {
      "code": "AKY"
  },
  {
      "code": "ALGO"
  },
  {
      "code": "ALIS"
  },
  {
      "code": "AMBER"
  },
  {
      "code": "AMP"
  },
  {
      "code": "AMPL"
  },
  {
      "code": "ANC"
  },
  {
      "code": "ANT"
  },
  {
      "code": "APPC"
  },
  {
      "code": "APX"
  },
  {
      "code": "ARDR"
  },
  {
      "code": "ARK"
  },
  {
      "code": "ARN"
  },
  {
      "code": "AST"
  },
  {
      "code": "ATB"
  },
  {
      "code": "ATM"
  },
  {
      "code": "ATOM"
  },
  {
      "code": "ATS"
  },
  {
      "code": "AUR"
  },
  {
      "code": "AVAX"
  },
  {
      "code": "AVT"
  },
  {
      "code": "B3"
  },
  {
      "code": "BAND"
  },
  {
      "code": "BAT"
  },
  {
      "code": "BAY"
  },
  {
      "code": "BBR"
  },
  {
      "code": "BCAP"
  },
  {
      "code": "BCC"
  },
  {
      "code": "BCD"
  },
  {
      "code": "BCH"
  },
  {
      "code": "BCN"
  },
  {
      "code": "BCPT"
  },
  {
      "code": "BCX"
  },
  {
      "code": "BCY"
  },
  {
      "code": "BDL"
  },
  {
      "code": "BEE"
  },
  {
      "code": "BELA"
  },
  {
      "code": "BET"
  },
  {
      "code": "BFT"
  },
  {
      "code": "BIS"
  },
  {
      "code": "BITB"
  },
  {
      "code": "BITBTC"
  },
  {
      "code": "BITCNY"
  },
  {
      "code": "BITEUR"
  },
  {
      "code": "BITGOLD"
  },
  {
      "code": "BITSILVER"
  },
  {
      "code": "BITUSD"
  },
  {
      "code": "BIX"
  },
  {
      "code": "BLITZ"
  },
  {
      "code": "BLK"
  },
  {
      "code": "BLN"
  },
  {
      "code": "BLOCK"
  },
  {
      "code": "BLZ"
  },
  {
      "code": "BMC"
  },
  {
      "code": "BNB"
  },
  {
      "code": "BNT"
  },
  {
      "code": "BNTY"
  },
  {
      "code": "BOST"
  },
  {
      "code": "BOT"
  },
  {
      "code": "BQ"
  },
  {
      "code": "BRD"
  },
  {
      "code": "BRK"
  },
  {
      "code": "BRX"
  },
  {
      "code": "BSV"
  },
  {
      "code": "BTA"
  },
  {
      "code": "BTC"
  },
  {
      "code": "BTCB"
  },
  {
      "code": "BTCD"
  },
  {
      "code": "BTCP"
  },
  {
      "code": "BTG"
  },
  {
      "code": "BTM"
  },
  {
      "code": "BTS"
  },
  {
      "code": "BTSR"
  },
  {
      "code": "BTT"
  },
  {
      "code": "BTX"
  },
  {
      "code": "BURST"
  },
  {
      "code": "BUSD"
  },
  {
      "code": "BUZZ"
  },
  {
      "code": "BYC"
  },
  {
      "code": "BYTOM"
  },
  {
      "code": "C20"
  },
  {
      "code": "CAKE"
  },
  {
      "code": "CANN"
  },
  {
      "code": "CAT"
  },
  {
      "code": "CCRB"
  },
  {
      "code": "CDT"
  },
  {
      "code": "CFI"
  },
  {
      "code": "CHAT"
  },
  {
      "code": "CHIPS"
  },
  {
      "code": "CLAM"
  },
  {
      "code": "CLOAK"
  },
  {
      "code": "CMP"
  },
  {
      "code": "CMT"
  },
  {
      "code": "CND"
  },
  {
      "code": "CNX"
  },
  {
      "code": "COFI"
  },
  {
      "code": "COMP"
  },
  {
      "code": "COSS"
  },
  {
      "code": "COVAL"
  },
  {
      "code": "CRBIT"
  },
  {
      "code": "CREA"
  },
  {
      "code": "CREDO"
  },
  {
      "code": "CRO"
  },
  {
      "code": "CRW"
  },
  {
      "code": "CSNO"
  },
  {
      "code": "CTR"
  },
  {
      "code": "CTXC"
  },
  {
      "code": "CURE"
  },
  {
      "code": "CVC"
  },
  {
      "code": "DAI"
  },
  {
      "code": "DAR"
  },
  {
      "code": "DASH"
  },
  {
      "code": "DATA"
  },
  {
      "code": "DAY"
  },
  {
      "code": "DBC"
  },
  {
      "code": "DBIX"
  },
  {
      "code": "DCN"
  },
  {
      "code": "DCR"
  },
  {
      "code": "DCT"
  },
  {
      "code": "DDF"
  },
  {
      "code": "DENT"
  },
  {
      "code": "DFS"
  },
  {
      "code": "DGB"
  },
  {
      "code": "DGC"
  },
  {
      "code": "DGD"
  },
  {
      "code": "DICE"
  },
  {
      "code": "DLT"
  },
  {
      "code": "DMD"
  },
  {
      "code": "DMT"
  },
  {
      "code": "DNT"
  },
  {
      "code": "DOGE"
  },
  {
      "code": "DOPE"
  },
  {
      "code": "DOT"
  },
  {
      "code": "DRGN"
  },
  {
      "code": "DTA"
  },
  {
      "code": "DTB"
  },
  {
      "code": "DYN"
  },
  {
      "code": "EAC"
  },
  {
      "code": "EBST"
  },
  {
      "code": "EBTC"
  },
  {
      "code": "ECC"
  },
  {
      "code": "ECN"
  },
  {
      "code": "EDG"
  },
  {
      "code": "EDO"
  },
  {
      "code": "EFL"
  },
  {
      "code": "EGC"
  },
  {
      "code": "EGLD"
  },
  {
      "code": "EKT"
  },
  {
      "code": "ELA"
  },
  {
      "code": "ELEC"
  },
  {
      "code": "ELF"
  },
  {
      "code": "ELIX"
  },
  {
      "code": "EMB"
  },
  {
      "code": "EMC"
  },
  {
      "code": "EMC2"
  },
  {
      "code": "ENG"
  },
  {
      "code": "ENJ"
  },
  {
      "code": "ENRG"
  },
  {
      "code": "EOS"
  },
  {
      "code": "EOT"
  },
  {
      "code": "EQT"
  },
  {
      "code": "ERC"
  },
  {
      "code": "ETC"
  },
  {
      "code": "ETH"
  },
  {
      "code": "ETHD"
  },
  {
      "code": "ETHOS"
  },
  {
      "code": "ETN"
  },
  {
      "code": "ETP"
  },
  {
      "code": "ETT"
  },
  {
      "code": "EVE"
  },
  {
      "code": "EVX"
  },
  {
      "code": "EXCL"
  },
  {
      "code": "EXP"
  },
  {
      "code": "FCT"
  },
  {
      "code": "FIL"
  },
  {
      "code": "FLDC"
  },
  {
      "code": "FLO"
  },
  {
      "code": "FLT"
  },
  {
      "code": "FRST"
  },
  {
      "code": "FTC"
  },
  {
      "code": "FTT"
  },
  {
      "code": "FUEL"
  },
  {
      "code": "FUN"
  },
  {
      "code": "GAM"
  },
  {
      "code": "GAME"
  },
  {
      "code": "GAS"
  },
  {
      "code": "GBG"
  },
  {
      "code": "GBX"
  },
  {
      "code": "GBYTE"
  },
  {
      "code": "GCR"
  },
  {
      "code": "GEO"
  },
  {
      "code": "GLD"
  },
  {
      "code": "GNO"
  },
  {
      "code": "GNT"
  },
  {
      "code": "GOLOS"
  },
  {
      "code": "GRC"
  },
  {
      "code": "GRT"
  },
  {
      "code": "GRS"
  },
  {
      "code": "GRWI"
  },
  {
      "code": "GTC"
  },
  {
      "code": "GTO"
  },
  {
      "code": "GUP"
  },
  {
      "code": "GVT"
  },
  {
      "code": "GXS"
  },
  {
      "code": "HBN"
  },
  {
      "code": "HEAT"
  },
  {
      "code": "HMQ"
  },
  {
      "code": "HPB"
  },
  {
      "code": "HSR"
  },
  {
      "code": "HT"
  },
  {
      "code": "HUSH"
  },
  {
      "code": "HVN"
  },
  {
      "code": "HXX"
  },
  {
      "code": "ICN"
  },
  {
      "code": "ICX"
  },
  {
      "code": "IFC"
  },
  {
      "code": "IFT"
  },
  {
      "code": "IGNIS"
  },
  {
      "code": "INCNT"
  },
  {
      "code": "IND"
  },
  {
      "code": "INF"
  },
  {
      "code": "INK"
  },
  {
      "code": "INS"
  },
  {
      "code": "INSTAR"
  },
  {
      "code": "INT"
  },
  {
      "code": "INXT"
  },
  {
      "code": "IOC"
  },
  {
      "code": "ION"
  },
  {
      "code": "IOP"
  },
  {
      "code": "IOST"
  },
  {
      "code": "IOTA"
  },
  {
      "code": "IOTX"
  },
  {
      "code": "IQT"
  },
  {
      "code": "ITC"
  },
  {
      "code": "IXC"
  },
  {
      "code": "IXT"
  },
  {
      "code": "J8T"
  },
  {
      "code": "JNT"
  },
  {
      "code": "KCS"
  },
  {
      "code": "KICK"
  },
  {
      "code": "KIN"
  },
  {
      "code": "KLAY"
  },
  {
      "code": "KMD"
  },
  {
      "code": "KNC"
  },
  {
      "code": "KORE"
  },
  {
      "code": "KSM"
  },
  {
      "code": "LBC"
  },
  {
      "code": "LCC"
  },
  {
      "code": "LEND"
  },
  {
      "code": "LEO"
  },
  {
      "code": "LEV"
  },
  {
      "code": "LGD"
  },
  {
      "code": "LINDA"
  },
  {
      "code": "LINK"
  },
  {
      "code": "LKK"
  },
  {
      "code": "LMC"
  },
  {
      "code": "LOCI"
  },
  {
      "code": "LOOM"
  },
  {
      "code": "LRC"
  },
  {
      "code": "LSK"
  },
  {
      "code": "LTC"
  },
  {
      "code": "LUN"
  },
  {
      "code": "LUNA"
  },
  {
      "code": "MAID"
  },
  {
      "code": "MANA"
  },
  {
      "code": "MATIC"
  },
  {
      "code": "MAX"
  },
  {
      "code": "MBRS"
  },
  {
      "code": "MCAP"
  },
  {
      "code": "MCO"
  },
  {
      "code": "MDA"
  },
  {
      "code": "MEC"
  },
  {
      "code": "MED"
  },
  {
      "code": "MEME"
  },
  {
      "code": "MER"
  },
  {
      "code": "MGC"
  },
  {
      "code": "MGO"
  },
  {
      "code": "MINEX"
  },
  {
      "code": "MINT"
  },
  {
      "code": "MIOTA"
  },
  {
      "code": "MITH"
  },
  {
      "code": "MKR"
  },
  {
      "code": "MLN"
  },
  {
      "code": "MNE"
  },
  {
      "code": "MNX"
  },
  {
      "code": "MOD"
  },
  {
      "code": "MONA"
  },
  {
      "code": "MRT"
  },
  {
      "code": "MSP"
  },
  {
      "code": "MTH"
  },
  {
      "code": "MTN"
  },
  {
      "code": "MUE"
  },
  {
      "code": "MUSIC"
  },
  {
      "code": "MYB"
  },
  {
      "code": "MYST"
  },
  {
      "code": "MZC"
  },
  {
      "code": "NAMO"
  },
  {
      "code": "NANO"
  },
  {
      "code": "NAS"
  },
  {
      "code": "NAV"
  },
  {
      "code": "NBT"
  },
  {
      "code": "NCASH"
  },
  {
      "code": "NDC"
  },
  {
      "code": "NEBL"
  },
  {
      "code": "NEO"
  },
  {
      "code": "NEOS"
  },
  {
      "code": "NET"
  },
  {
      "code": "NLC2"
  },
  {
      "code": "NLG"
  },
  {
      "code": "NMC"
  },
  {
      "code": "NMR"
  },
  {
      "code": "NOBL"
  },
  {
      "code": "NOTE"
  },
  {
      "code": "NPXS"
  },
  {
      "code": "NSR"
  },
  {
      "code": "NTO"
  },
  {
      "code": "NULS"
  },
  {
      "code": "NVC"
  },
  {
      "code": "NXC"
  },
  {
      "code": "NXS"
  },
  {
      "code": "NXT"
  },
  {
      "code": "OAX"
  },
  {
      "code": "OBITS"
  },
  {
      "code": "OCL"
  },
  {
      "code": "OCN"
  },
  {
      "code": "ODEM"
  },
  {
      "code": "ODN"
  },
  {
      "code": "OF"
  },
  {
      "code": "OK"
  },
  {
      "code": "OMG"
  },
  {
      "code": "OMNI"
  },
  {
      "code": "ONION"
  },
  {
      "code": "ONT"
  },
  {
      "code": "OPT"
  },
  {
      "code": "ORN"
  },
  {
      "code": "OST"
  },
  {
      "code": "PART"
  },
  {
      "code": "PASC"
  },
  {
      "code": "PAY"
  },
  {
      "code": "PBL"
  },
  {
      "code": "PBT"
  },
  {
      "code": "PFR"
  },
  {
      "code": "PING"
  },
  {
      "code": "PINK"
  },
  {
      "code": "PIVX"
  },
  {
      "code": "PIX"
  },
  {
      "code": "PLBT"
  },
  {
      "code": "PLR"
  },
  {
      "code": "PLU"
  },
  {
      "code": "POA"
  },
  {
      "code": "POE"
  },
  {
      "code": "POLY"
  },
  {
      "code": "POSW"
  },
  {
      "code": "POT"
  },
  {
      "code": "POWR"
  },
  {
      "code": "PPC"
  },
  {
      "code": "PPT"
  },
  {
      "code": "PPY"
  },
  {
      "code": "PRG"
  },
  {
      "code": "PRL"
  },
  {
      "code": "PRO"
  },
  {
      "code": "PST"
  },
  {
      "code": "PTC"
  },
  {
      "code": "PTOY"
  },
  {
      "code": "PURA"
  },
  {
      "code": "QASH"
  },
  {
      "code": "QAU"
  },
  {
      "code": "QLC"
  },
  {
      "code": "QRK"
  },
  {
      "code": "QRL"
  },
  {
      "code": "QSP"
  },
  {
      "code": "QTL"
  },
  {
      "code": "QTUM"
  },
  {
      "code": "QUICK"
  },
  {
      "code": "QWARK"
  },
  {
      "code": "R"
  },
  {
      "code": "RADS"
  },
  {
      "code": "RAIN"
  },
  {
      "code": "RBIES"
  },
  {
      "code": "RBX"
  },
  {
      "code": "RBY"
  },
  {
      "code": "RCN"
  },
  {
      "code": "RDD"
  },
  {
      "code": "RDN"
  },
  {
      "code": "REC"
  },
  {
      "code": "RED"
  },
  {
      "code": "REP"
  },
  {
      "code": "REQ"
  },
  {
      "code": "RHOC"
  },
  {
      "code": "RIC"
  },
  {
      "code": "RISE"
  },
  {
      "code": "RLC"
  },
  {
      "code": "RLT"
  },
  {
      "code": "RPX"
  },
  {
      "code": "RRT"
  },
  {
      "code": "RUFF"
  },
  {
      "code": "RUNE"
  },
  {
      "code": "RUP"
  },
  {
      "code": "RVT"
  },
  {
      "code": "SAFEX"
  },
  {
      "code": "SALT"
  },
  {
      "code": "SAN"
  },
  {
      "code": "SBD"
  },
  {
      "code": "SBTC"
  },
  {
      "code": "SC"
  },
  {
      "code": "SEELE"
  },
  {
      "code": "SEQ"
  },
  {
      "code": "SHIB"
  },
  {
      "code": "SHIFT"
  },
  {
      "code": "SIB"
  },
  {
      "code": "SIGMA"
  },
  {
      "code": "SIGT"
  },
  {
      "code": "SJCX"
  },
  {
      "code": "SKIN"
  },
  {
      "code": "SKY"
  },
  {
      "code": "SLR"
  },
  {
      "code": "SLS"
  },
  {
      "code": "SMART"
  },
  {
      "code": "SMT"
  },
  {
      "code": "SNC"
  },
  {
      "code": "SNGLS"
  },
  {
      "code": "SNM"
  },
  {
      "code": "SNRG"
  },
  {
      "code": "SNT"
  },
  {
      "code": "SOC"
  },
  {
      "code": "SOL"
  },
  {
      "code": "SOUL"
  },
  {
      "code": "SPANK"
  },
  {
      "code": "SPC"
  },
  {
      "code": "SPHR"
  },
  {
      "code": "SPR"
  },
  {
      "code": "SNX"
  },
  {
      "code": "SRN"
  },
  {
      "code": "START"
  },
  {
      "code": "STEEM"
  },
  {
      "code": "STK"
  },
  {
      "code": "STORJ"
  },
  {
      "code": "STORM"
  },
  {
      "code": "STQ"
  },
  {
      "code": "STRAT"
  },
  {
      "code": "STX"
  },
  {
      "code": "SUB"
  },
  {
      "code": "SWFTC"
  },
  {
      "code": "SWIFT"
  },
  {
      "code": "SWT"
  },
  {
      "code": "SYNX"
  },
  {
      "code": "SYS"
  },
  {
      "code": "TAAS"
  },
  {
      "code": "TAU"
  },
  {
      "code": "TCC"
  },
  {
      "code": "TFL"
  },
  {
      "code": "THC"
  },
  {
      "code": "THETA"
  },
  {
      "code": "TIME"
  },
  {
      "code": "TIX"
  },
  {
      "code": "TKN"
  },
  {
      "code": "TKR"
  },
  {
      "code": "TKS"
  },
  {
      "code": "TNB"
  },
  {
      "code": "TNT"
  },
  {
      "code": "TOA"
  },
  {
      "code": "TRAC"
  },
  {
      "code": "TRC"
  },
  {
      "code": "TRCT"
  },
  {
      "code": "TRIBE"
  },
  {
      "code": "TRIG"
  },
  {
      "code": "TRST"
  },
  {
      "code": "TRUE"
  },
  {
      "code": "TRUST"
  },
  {
      "code": "TRX"
  },
  {
      "code": "TUSD"
  },
  {
      "code": "TX"
  },
  {
      "code": "UBQ"
  },
  {
      "code": "UKG"
  },
  {
      "code": "ULA"
  },
  {
      "code": "UNB"
  },
  {
      "code": "UNI"
  },
  {
      "code": "UNITY"
  },
  {
      "code": "UNO"
  },
  {
      "code": "UNY"
  },
  {
      "code": "UP"
  },
  {
      "code": "URO"
  },
  {
      "code": "USDT"
  },
  {
      "code": "UST"
  },
  {
      "code": "UTK"
  },
  {
      "code": "VEE"
  },
  {
      "code": "VEN"
  },
  {
      "code": "VERI"
  },
  {
      "code": "VET"
  },
  {
      "code": "VIA"
  },
  {
      "code": "VIB"
  },
  {
      "code": "VIBE"
  },
  {
      "code": "VIVO"
  },
  {
      "code": "VOISE"
  },
  {
      "code": "VOX"
  },
  {
      "code": "VPN"
  },
  {
      "code": "VRC"
  },
  {
      "code": "VRM"
  },
  {
      "code": "VRS"
  },
  {
      "code": "VSL"
  },
  {
      "code": "VTC"
  },
  {
      "code": "VTR"
  },
  {
      "code": "WABI"
  },
  {
      "code": "WAN"
  },
  {
      "code": "WAVES"
  },
  {
      "code": "WAX"
  },
  {
      "code": "WCT"
  },
  {
      "code": "WDC"
  },
  {
      "code": "WGO"
  },
  {
      "code": "WGR"
  },
  {
      "code": "WINGS"
  },
  {
      "code": "WPR"
  },
  {
      "code": "WTC"
  },
  {
      "code": "WTT"
  },
  {
      "code": "XAS"
  },
  {
      "code": "XAUR"
  },
  {
      "code": "XBC"
  },
  {
      "code": "XBY"
  },
  {
      "code": "XCN"
  },
  {
      "code": "XCP"
  },
  {
      "code": "XDN"
  },
  {
      "code": "XEL"
  },
  {
      "code": "XEM"
  },
  {
      "code": "NEM"
  },
  {
      "code": "XHV"
  },
  {
      "code": "XID"
  },
  {
      "code": "XLM"
  },
  {
      "code": "XMG"
  },
  {
      "code": "XMR"
  },
  {
      "code": "XMT"
  },
  {
      "code": "XMY"
  },
  {
      "code": "XPM"
  },
  {
      "code": "XRL"
  },
  {
      "code": "XRP"
  },
  {
      "code": "XSPEC"
  },
  {
      "code": "XST"
  },
  {
      "code": "XTZ"
  },
  {
      "code": "XUC"
  },
  {
      "code": "XVC"
  },
  {
      "code": "XVG"
  },
  {
      "code": "XWC"
  },
  {
      "code": "XZC"
  },
  {
      "code": "XZR"
  },
  {
      "code": "YEE"
  },
  {
      "code": "YOYOW"
  },
  {
      "code": "ZCC"
  },
  {
      "code": "ZCL"
  },
  {
      "code": "ZCO"
  },
  {
      "code": "ZEC"
  },
  {
      "code": "ZEN"
  },
  {
      "code": "ZET"
  },
  {
      "code": "ZIL"
  },
  {
      "code": "ZLA"
  },
  {
      "code": "ZRX"
  }
];


async function checkCode(code:string) {

  var codeOk:number = 0;

  physicalCurrencyList.forEach(element => {
    if (element.code == code) {
      codeOk = 1;
    }
  });

  if (!codeOk) {
    digitalCurrencyList.forEach(element => {
      if (element.code == code) {
        codeOk = 1;
      }
    });
  }
  return codeOk;
}

export async function getCurrenciesController(req: Request, res: Response) {
  try {
    const currencies = await getCurrenciesRepository();
    console.log(currencies);
    res.json(currencies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  }
}

export async function getCurrencyController(req: Request, res: Response) {
  try {
    const { code } = req.params;
    const currency = await getCurrencyByCodeRepository(code.toUpperCase( ));
    if (currency) {
      console.log(currency);
      res.json(currency);
    } else {
      res.status(404).json({ status: 404, message: "Currency not found" });
    }
   
  } catch (error:any) {
    res.status(500).json({ status: 500, message: error.message });
  }
}

export async function createCurrencyController(req: Request, res: Response) {
  try {

    var code:string = req.body.code;
    code = code.toUpperCase();

    var codeOk:number = await checkCode(code);

    if (codeOk) {
      const currency = await getCurrencyByCodeRepository(code);
      console.log(currency);
      if (currency) {
        res.status(400).json({ status: 400, message: "code "+code+" already exists" });
      } else {
        const newcurrency: ICurrency = new Currency({ code });
        await createCurrencyRepository(newcurrency);
        res.json(newcurrency);
      }
      
    } else {
      res.status(400).json({ status: 400, message: "code "+code+" not valid" });
    }
   
  } catch (error:any) {
    res.status(500).json({ status: 500, message: error.message });
  }
}

export async function deleteCurrencyController(req: Request, res: Response) {
  try {
    var code:string = req.params.code;
    code = code.toUpperCase();
    const currency = await deleteCurrencyRepository(code);
    console.log(currency);
    res.json(currency);
  } catch (error:any) {
    res.status(500).json({ status: 500, message: error.message });
  }
}

