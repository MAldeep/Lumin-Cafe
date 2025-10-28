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
export const menuData : Category[] = [
  // hot drink
  {
    id : 1,
    titleEn : "Hot drinks",
    titleAr : "مشروبات ساخنة",
    img : images.hero,
    products : [
      {
        id : 11,
        titleEn : "Esspresso",
        titleAr : "اسبرسو",
        img : images.aboutHeader,
        price : "42",
      },
      {
        id : 12,
        titleEn : "Turkish Coffee",
        titleAr : "قهوة تركية",
        img : images.coffee02,
        price : "38",
      }
    ]
  },
  // cold drink
  {
    id : 2 ,
    titleEn : "Cold Drinks",
    titleAr : "مشروبات باردة",
    img : images.menuHero,
    products : [
      {
        id : 21,
        titleEn : "Pepsi",
        titleAr : "بيبسي",
        img : images.coffee03,
        price : "22",
      },
      {
        id : 22 ,
        titleEn : "Mango",
        titleAr : "مانجو",
        img : images.discover,
        price : "30"
      }
    ]
  }
]


// array ==> so i can map on sections 
// object ==> so i can access 
// products => array ==> so i can map