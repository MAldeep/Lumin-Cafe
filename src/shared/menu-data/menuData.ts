import { images } from "../../assets/images";

interface Product {
  id: number;
  titleEn: string;
  titleAr: string;
  img: string;
  price: string;
}

export interface Category {
  id: number;
  titleEn: string;
  titleAr: string;
  img: string;
  products: Product[];
}
export const menuData: Category[] = [
  // Iced Coffee
  {
    id: 1,
    titleEn: "Iced Coffee",
    titleAr: "القهوة الباردة",
    img: images.hero,
    products: [
      {
        id: 11,
        titleEn: "Iced Americano",
        titleAr: "أيس أمريكانو",
        img: images.iced_americano,
        price: "11",
      },
      {
        id: 12,
        titleEn: "Iced Latte",
        titleAr: "أيس لاتيه",
        img: images.iced_latte,
        price: "17",
      },
      {
        id: 13,
        titleEn: "Spanish Latte",
        titleAr: "سبانش لاتيه",
        img: images.spanish_latte,
        price: "19",
      },
      {
        id: 14,
        titleEn: "White Mocha",
        titleAr: "وايت موكا",
        img: images.white_mocha,
        price: "18",
      },
      {
        id: 15,
        titleEn: "Mocha",
        titleAr: "موكا",
        img: images.mocha,
        price: "18",
      },
      {
        id: 16,
        titleEn: "Blue Latte",
        titleAr: "بلو لاتيه",
        img: images.blue_latte,
        price: "17",
      },
      {
        id: 17,
        titleEn: "Saffron Latte",
        titleAr: "زعفران لاتيه",
        img: images.saffron_latte,
        price: "17",
      },
      {
        id: 18,
        titleEn: "Cold Brew",
        titleAr: "كولد برو",
        img: images.cold_brew,
        price: "20",
      },
      {
        id: 19,
        titleEn: " V60",
        titleAr: " V60",
        img: images.v60,
        price: "17",
      },
    ],
  },
  // Signature Mojitos
  {
    id: 2,
    titleEn: "Signature Mojitos",
    titleAr: "الموهيتو والمشروبات الخاصة",
    img: images.menuHero,
    products: [
      {
        id: 21,
        titleEn: "Lumin Mojito",
        titleAr: "موهيتو لومين",
        img: images.Lumin_Mojito,
        price: "20",
      },
      {
        id: 22,
        titleEn: "Red Bull Mix",
        titleAr: "ريدبول",
        img: images.special_redbull,
        price: "22",
      },
      {
        id: 23,
        titleEn: "Refresh",
        titleAr: "ريفريش",
        img: images.refresh,
        price: "17",
      },
      {
        id: 24,
        titleEn: "Hibiscus",
        titleAr: "كركديه",
        img: images.Hibiscus,
        price: "12",
      },
      {
        id: 25,
        titleEn: "Havana",
        titleAr: "هافانا",
        img: images.havana,
        price: "17",
      },
      {
        id: 26,
        titleEn: "Smoke",
        titleAr: "سموك",
        img: images.smoke,
        price: "17",
      },
    ],
  },
  //Hot Coffee And Drinks
  {
    id: 3,
    titleEn: "Hot Coffee And Drinks",
    titleAr: "القهوة والمشروبات الساخنة",
    img: images.menuHero,
    products: [
      {
        id: 31,
        titleEn: "Espresso",
        titleAr: "اسبريسو",
        img: images.espresso,
        price: "7",
      },
      {
        id: 32,
        titleEn: "Cortado",
        titleAr: "كورتادو",
        img: images.cortado,
        price: "11",
      },
      {
        id: 33,
        titleEn: "Flat White",
        titleAr: "فلات وايت",
        img: images.flat_white,
        price: "14",
      },
      {
        id: 34,
        titleEn: "Cappuccino",
        titleAr: "كابتشينو",
        img: images.cappuccino,
        price: "15",
      },
      {
        id: 35,
        titleEn: "Latte",
        titleAr: " لاتيه",
        img: images.latte,
        price: "16",
      },
      {
        id: 36,
        titleEn: "Spanish Latte",
        titleAr: "سبانيش لاتيه",
        img: images.spanish_latte_hot,
        price: "16",
      },
      {
        id: 37,
        titleEn: "White Mocha",
        titleAr: "وايت موكا",
        img: images.white_mocha_hot,
        price: "16",
      },
      {
        id: 38,
        titleEn: "Mocha",
        titleAr: "موكا",
        img: images.mocha_hot,
        price: "16",
      },
      {
        id: 39,
        titleEn: "Americano",
        titleAr: "أمريكانو",
        img: images.americano,
        price: "12",
      },
      {
        id: 40,
        titleEn: "Piccato",
        titleAr: "بيكاتو",
        img: images.piccato,
        price: "11",
      },
      {
        id: 41,
        titleEn: "Coffee V60",
        titleAr: "قهوة",
        img: images.coffee_v60,
        price: "50",
      },
      {
        id: 42,
        titleEn: "Saffron Latte",
        titleAr: "زعفران لاتيه",
        img: images.zaafran,
        price: "17",
      },
      {
        id: 43,
        titleEn: "Blue Latte",
        titleAr: "بلو لاتيه",
        img: images.blue_latte_hot,
        price: "17",
      },
      {
        id: 44,
        titleEn: "Sahlab",
        titleAr: "سحلب",
        img: images.sahlab,
        price: "10",
      },
      {
        id: 45,
        titleEn: "Custard",
        titleAr: "كاسترد",
        img: images.custard,
        price: "10",
      },
      {
        id: 46,
        titleEn: "Hot Chocolate",
        titleAr: "هوت شوكلت",
        img: images.hot_choclate,
        price: "19",
      },
      {
        id: 47,
        titleEn: "Tea Pot",
        titleAr: "براد شاي",
        img: images.brad_tea,
        price: "16",
      },
      {
        id: 48,
        titleEn: "Tea",
        titleAr: "شاي",
        img: images.tea,
        price: "5",
      },
    ],
  },
  // Desserts
  {
    id: 5,
    titleEn: "Desserts",
    titleAr: "الحلويات",
    img: images.hero,
    products: [
      {
        id: 51,
        titleEn: "Date Molten Cake",
        titleAr: "مولتن تمر",
        img: images.date_molten_cake,
        price: "20",
      },
      {
        id: 52,
        titleEn: "Galaxy Cake",
        titleAr: "جلاكسي",
        img: images.galaxy_cake,
        price: "20",
      },
      {
        id: 53,
        titleEn: "Tiramisu",
        titleAr: "ترامسيو",
        img: images.tiramisu,
        price: "20",
      },
      {
        id: 54,
        titleEn: "Honey Cake",
        titleAr: "كيكة العسل",
        img: images.honey_cake,
        price: "20",
      },
      {
        id: 55,
        titleEn: "Upside-Down Cheese Cake",
        titleAr: "تشيز كيك مقلوبة",
        img: images.up_down_cake,
        price: "25",
      },
      {
        id: 56,
        titleEn: "Pudding Cup",
        titleAr: "بودينج كوب",
        img: images.pudding,
        price: "25",
      },
      {
        id: 57,
        titleEn: "Crunch Cheesecake",
        titleAr: "كرنش تشيز كيك",
        img: images.crunch_cheese_cake,
        price: "25",
      },
      {
        id: 58,
        titleEn: "San Sebastian Cheesecake",
        titleAr: "سان سبستيان",
        img: images.san_sebstian,
        price: "25",
      },
      {
        id: 59,
        titleEn: "French Toast",
        titleAr: "فرينش توست",
        img: images.french_toast,
        price: "25",
      },
    ],
  },
  // ice cream
  {
    id: 6,
    titleEn: "Ice Cream",
    titleAr: "أيس كريم",
    img: images.hero,
    products: [
      {
        id: 61,
        titleEn: "Peanut Butter Ice Cream",
        titleAr: "بينت باتر",
        img: images.peanut_ice_cream,
        price: "15",
      },
      {
        id: 62,
        titleEn: "Mango Ice Cream",
        titleAr: "مانجو",
        img: images.mango_ice_cream,
        price: "15",
      },
    ],
  },
];

