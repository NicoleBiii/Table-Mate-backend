import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import MenuItem from "../models/MenuItem.js";

dotenv.config();
connectDB();

const seedMenu = async () => {
  try {
    await MenuItem.deleteMany();
    const menuItems = [
      {
        name: { cn: "怪味鸭", en: "Special Flavored Duck" },
        description: { cn: "", en: "" },
        price: 17.3,
        category: { cn: "江湖爆炒", en: "Stir-fry" },
        image: "http://localhost:8080/uploads/1742702537723-IMG_1248.jpg",
      },
      {
        name: { cn: "番茄丸子汤", en: "Tomato Meatball Soup" },
        description: { cn: "新鲜肉丸子，嫩！", en: "Fresh tender meatballs" },
        price: 11.3,
        category: { cn: "营养靓汤", en: "Soup" },
        image: "http://localhost:8080/uploads/1742702836713-IMG_1298.jpg",
      },
      {
        name: { cn: "农家小炒肉", en: "Farmhouse Stir-fried Pork" },
        description: { cn: "", en: "" },
        price: 17.3,
        category: { cn: "家常荤菜", en: "Meat" },
        image: "http://localhost:8080/uploads/1742702895939-IMG_1255.jpg",
      },
      {
        name: { cn: "泡椒牛肉", en: "Pickled Pepper Beef" },
        description: { cn: "", en: "" },
        price: 23.3,
        category: { cn: "家常荤菜", en: "Meat" },
        image: "http://localhost:8080/uploads/1742702908622-IMG_1261.jpg",
      },
      {
        name: { cn: "苕皮腊猪脸", en: "Sweet Potato Noodles with Cured Pork" },
        description: { cn: "", en: "" },
        price: 17.3,
        category: { cn: "家常荤菜", en: "Meat" },
        image: "http://localhost:8080/uploads/1742702949660-IMG_1264.jpg",
      },
      {
        name: {
          cn: "老派糖醋排骨配现炸薯条",
          en: "Classic Sweet & Sour Pork Ribs with Fries",
        },
        description: { cn: "", en: "" },
        price: 33.5,
        category: { cn: "家常荤菜", en: "Meat" },
        image: "http://localhost:8080/uploads/1742702958298-IMG_1253.jpg",
      },
      {
        name: { cn: "雪碧听装", en: "Sprite (Can)" },
        description: { cn: "", en: "" },
        price: 3.6,
        category: { cn: "解腻饮品", en: "Drinks" },
        image: "http://localhost:8080/uploads/1742751651869-download.jpg",
      },
      {
        name: { cn: "炒时蔬", en: "Stir-fried Seasonal Vegetables" },
        description: { cn: "", en: "" },
        price: 11.3,
        category: { cn: "小炒素菜", en: "Vege" },
        image: "http://localhost:8080/uploads/1742703209867-IMG_1275.jpg",
      },
      {
        name: {
          cn: "干锅双拼肥肠鸡",
          en: "Dry Pot Combo (Chicken & Intestine)",
        },
        description: { cn: "", en: "" },
        price: 29.3,
        category: { cn: "香辣干锅", en: "Dry Pot" },
        image: "http://localhost:8080/uploads/1742703378754-IMG_1293.jpg",
      },
      {
        name: { cn: "肥肠鸡", en: "Chicken with Intestine" },
        description: { cn: "看到就流口水了...", en: "Makes your mouth water" },
        price: 35.3,
        category: { cn: "特色烧菜", en: "Casserole" },
        image: "http://localhost:8080/uploads/1742703398553-IMG_1291.jpg",
      },
      {
        name: { cn: "干煸四季豆", en: "Dry-fried String Beans" },
        description: { cn: "", en: "" },
        price: 11.3,
        category: { cn: "小炒素菜", en: "Vege" },
        image: "http://localhost:8080/uploads/1742703235232-IMG_1271.jpg",
      },
      {
        name: {
          cn: "自磨豆花酸菜牛肉",
          en: "Homemade Tofu with Pickled Veggies & Beef",
        },
        description: { cn: "进店必点！！", en: "Highly recommended" },
        price: 23.3,
        category: { cn: "江湖爆炒", en: "Stir-fry" },
        image: "http://localhost:8080/uploads/1742702603542-IMG_1245.jpg",
      },
      {
        name: { cn: "铁板虎皮凤爪", en: "Sizzling Tiger Skin Chicken Feet" },
        description: { cn: "", en: "" },
        price: 29.3,
        category: { cn: "江湖爆炒", en: "Stir-fry" },
        image: "http://localhost:8080/uploads/1742702736282-IMG_1250.jpg",
      },
      {
        name: { cn: "洋芋泥汤", en: "Mashed Potato Soup" },
        description: { cn: "", en: "" },
        price: 10.1,
        category: { cn: "营养靓汤", en: "Soup" },
        image: "http://localhost:8080/uploads/1742702853606-IMG_1300.jpg",
      },
      {
        name: { cn: "干煸粉蒸肉", en: "Dry-fried Steamed Pork" },
        description: {
          cn: "外酥里嫩不油腻",
          en: "Crispy outside, tender inside",
        },
        price: 17.3,
        category: { cn: "家常荤菜", en: "Meat" },
        image: "http://localhost:8080/uploads/1742702968544-IMG_1266.jpg",
      },
      {
        name: { cn: "干锅香辣虾", en: "Dry Pot Spicy Shrimp" },
        description: { cn: "", en: "" },
        price: 35.3,
        category: { cn: "香辣干锅", en: "Dry Pot" },
        image: "http://localhost:8080/uploads/1742703385234-IMG_1295.jpg",
      },
      {
        name: { cn: "铁板黑椒牛柳", en: "Sizzling Black Pepper Beef" },
        description: { cn: "", en: "" },
        price: 29.3,
        category: { cn: "家常荤菜", en: "Meat" },
        image: "http://localhost:8080/uploads/1742703024153-IMG_1267.jpg",
      },
      {
        name: { cn: "水煮牛肉", en: "Poached Beef" },
        description: { cn: "信我，点就对了", en: "Just order it!" },
        price: 23.3,
        category: { cn: "经典水煮", en: "Boiled" },
        image: "http://localhost:8080/uploads/1742703475814-IMG_1283.jpg",
      },
      {
        name: { cn: "可口可乐听装", en: "Coca-Cola (Can)" },
        description: { cn: "", en: "" },
        price: 3.6,
        category: { cn: "解腻饮品", en: "Drinks" },
        image: "http://localhost:8080/uploads/1742751698327-download-1.jpg",
      },
      {
        name: { cn: "芥辣菜心", en: "Wasabi Chinese Cabbage" },
        description: {
          cn: "自带芥末味的菜菜，上头！",
          en: "With authentic wasabi flavor",
        },
        price: 11.3,
        category: { cn: "小炒素菜", en: "Vege" },
        image: "http://localhost:8080/uploads/1742703246384-IMG_1272.jpg",
      },
      {
        name: { cn: "葱香芋儿", en: "Taro with Scallion" },
        description: { cn: "软糯鲜香～", en: "Soft and aromatic" },
        price: 11.3,
        category: { cn: "小炒素菜", en: "Vege" },
        image: "http://localhost:8080/uploads/1742703259030-IMG_1273.jpg",
      },
      {
        name: { cn: "五常大米", en: "Wuchang Rice" },
        description: { cn: "软糯香甜", en: "Soft and sweet" },
        price: 1.2,
        category: { cn: "主食必点", en: "Mains" },
        image: "http://localhost:8080/uploads/1742703536921-IMG_1312.jpg",
      },
      {
        name: { cn: "黄豆烧蹄花", en: "Soybean Stewed Pork Trotters" },
        description: { cn: "豆香肉糯", en: "Tender pork with soy aroma" },
        price: 25.7,
        category: { cn: "特色烧菜", en: "Casserole" },
        image: "http://localhost:8080/uploads/1742703404642-IMG_1292.jpg",
      },
      {
        name: { cn: "番茄鸡蛋汤", en: "Tomato Egg Soup" },
        description: { cn: "", en: "" },
        price: 10.1,
        category: { cn: "营养靓汤", en: "Soup" },
        image: "http://localhost:8080/uploads/1742702866614-IMG_1302.jpg",
      },
      {
        name: {
          cn: "四人同享丨石锅豆腐+水煮牛肉+回锅肉+随机素菜*2+米饭*4",
          en: "4-Person Combo: Stone Pot Tofu + Poached Beef + Twice-cooked Pork + 2 Veggies + 4 Rice",
        },
        description: { cn: "", en: "" },
        price: 53.3,
        category: { cn: "严选套餐", en: "Set Meal" },
        image: "",
      },
      {
        name: {
          cn: "【超值单人餐】荤菜5选1+筒骨萝卜汤+泡菜+米饭1份",
          en: "[Value] Single Combo: 1 Meat + Radish Soup + Pickles + Rice",
        },
        description: { cn: "", en: "" },
        price: 23.3,
        category: { cn: "粉丝福利", en: "Welfare" },
        image: "",
      },
      {
        name: { cn: "毛血旺", en: "Mao Xue Wang (Spicy Blood Pudding)" },
        description: { cn: "", en: "" },
        price: 23.3,
        category: { cn: "经典水煮", en: "Boiled" },
        image: "http://localhost:8080/uploads/1742703488726-IMG_1284.jpg",
      },
      {
        name: { cn: "手工桂花茶（热/冰）", en: "Osmanthus Tea (Hot/Iced)" },
        description: { cn: "", en: "" },
        price: 7.2,
        category: { cn: "解腻饮品", en: "Drinks" },
        image: "http://localhost:8080/uploads/1742703165765-IMG_1314.jpg",
      },
      {
        name: { cn: "松茸乌鸡肚条汤", en: "Matsutake Black Chicken Soup" },
        description: { cn: "养生人的爱", en: "For health-conscious" },
        price: 29.3,
        category: { cn: "营养靓汤", en: "Soup" },
        image: "http://localhost:8080/uploads/1742702876352-IMG_1301.jpg",
      },
      {
        name: {
          cn: "千叶豆腐炒滑肉丝",
          en: "Stir-fried Thousand-layer Tofu with Pork",
        },
        description: { cn: "嫩滑鲜香", en: "Tender and fragrant" },
        price: 17.3,
        category: { cn: "家常荤菜", en: "Meat" },
        image: "http://localhost:8080/uploads/1742703035944-IMG_1252.jpg",
      },
      {
        name: { cn: "土豆泥", en: "Mashed Potato" },
        description: { cn: "", en: "" },
        price: 13.7,
        category: { cn: "小炒素菜", en: "Vege" },
        image: "http://localhost:8080/uploads/1742703268643-IMG_1282.jpg",
      },
      {
        name: { cn: "鲜椒蹄花", en: "Pepper Pork Trotters" },
        description: { cn: "", en: "" },
        price: 25.7,
        category: { cn: "江湖爆炒", en: "Stir-fry" },
        image: "http://localhost:8080/uploads/1742702762065-IMG_1251.jpg",
      },
      {
        name: { cn: "自制泡椒肉丝", en: "Homemade Pickled Pepper Pork" },
        description: { cn: "", en: "" },
        price: 17.3,
        category: { cn: "家常荤菜", en: "Meat" },
        image: "http://localhost:8080/uploads/1742703054226-IMG_1263.jpg",
      },
      {
        name: { cn: "自制泡椒牛碎碎", en: "Homemade Pickled Pepper Beef" },
        description: { cn: "干饭达人必备！", en: "Perfect with rice" },
        price: 17.3,
        category: { cn: "家常荤菜", en: "Meat" },
        image: "http://localhost:8080/uploads/1742703062558-IMG_1254.jpg",
      },
      {
        name: { cn: "丝瓜肥肠", en: "Luffa with Pork Intestine" },
        description: { cn: "", en: "" },
        price: 23.3,
        category: { cn: "特色烧菜", en: "Casserole" },
        image: "http://localhost:8080/uploads/1742703423824-IMG_1290.jpg",
      },
      {
        name: { cn: "湘炒黄牛肉", en: "Hunan-style Stir-fried Beef" },
        description: {
          cn: "鲜辣嫩滑，下两碗毛干饭",
          en: "Spicy tender beef goes with rice",
        },
        price: 23.3,
        category: { cn: "家常荤菜", en: "Meat" },
        image: "",
      },
      {
        name: { cn: "红糖糍粑块5个", en: "Brown Sugar Rice Cake (5pcs)" },
        description: { cn: "", en: "" },
        price: 6.5,
        category: { cn: "小吃系列", en: "Snacks" },
        image: "http://localhost:8080/uploads/1742703567364-IMG_1307.jpg",
      },
      {
        name: { cn: "凉拌口水鸡", en: "Cold Chicken in Chili Oil" },
        description: { cn: "停不下来，超下酒！", en: "Perfect with beer" },
        price: 23.3,
        category: { cn: "佐酒凉拌", en: "Cold Dishes" },
        image: "http://localhost:8080/uploads/1742703609646-IMG_1296.jpg",
      },
      {
        name: { cn: "桂花糕5个", en: "Osmanthus Cake (5pcs)" },
        description: { cn: "", en: "" },
        price: 6.5,
        category: { cn: "小吃系列", en: "Snacks" },
        image: "http://localhost:8080/uploads/1742703580959-IMG_1240.jpg",
      },
      {
        name: { cn: "蒜香肉沫烧茄子", en: "Garlic Minced Pork with Eggplant" },
        description: { cn: "", en: "" },
        price: 13.7,
        category: { cn: "家常荤菜", en: "Meat" },
        image: "http://localhost:8080/uploads/1742703106763-IMG_1256.jpg",
      },
      {
        name: {
          cn: "鸡蛋盐菜回锅肉",
          en: "Twice-cooked Pork with Egg & Pickles",
        },
        description: { cn: "小时候的味道❤️", en: "Taste of childhood ❤️" },
        price: 17.3,
        category: { cn: "家常荤菜", en: "Meat" },
        image: "http://localhost:8080/uploads/1742703117423-IMG_1258.jpg",
      },
      {
        name: { cn: "手撕包菜", en: "Hand-torn Cabbage" },
        description: { cn: "", en: "" },
        price: 11.3,
        category: { cn: "小炒素菜", en: "Vege" },
        image: "http://localhost:8080/uploads/1742703276017-IMG_1269.jpg",
      },
      {
        name: { cn: "番茄炒蛋", en: "Tomato Scrambled Eggs" },
        description: { cn: "", en: "" },
        price: 11.3,
        category: { cn: "小炒素菜", en: "Vege" },
        image: "http://localhost:8080/uploads/1742703282059-IMG_1277.jpg",
      },
      {
        name: {
          cn: "虎皮青椒",
          en: "Tiger Skin Green Pepper",
        },
        description: { cn: "经典，不多说了", en: "All-time classic" },
        price: 11.3,
        category: { cn: "小炒素菜", en: "Vege" },
        image: "http://localhost:8080/uploads/1742703288078-IMG_1276.jpg",
      },
      {
        name: { cn: "茄香红烧肉", en: "Braised Pork with Eggplant" },
        description: { cn: "", en: "" },
        price: 17.3,
        category: { cn: "特色烧菜", en: "Casserole" },
        image: "http://localhost:8080/uploads/1742703444871-IMG_1289.jpg",
      },
      {
        name: {
          cn: "酱牛肉炒饭",
          en: "Braised Beef Fried Rice",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 16.8,
        category: {
          cn: "主食必点",
          en: "Mains",
        },
        image: "http://localhost:8080/uploads/1742703545233-IMG_1310.jpg",
        available: true,
      },
      {
        name: {
          cn: "王老吉",
          en: "Wong Lo Kat Herbal Tea",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 8,
        category: {
          cn: "解腻饮品",
          en: "Drinks",
        },
        image: "",
        available: true,
      },
      {
        name: {
          cn: "红牛",
          en: "Red Bull",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 10,
        category: {
          cn: "解腻饮品",
          en: "Drinks",
        },
        image: "",
        available: true,
      },
      {
        name: {
          cn: "番茄丸子烫烫饭",
          en: "Tomato Meatball Hot Rice",
        },
        description: {
          cn: "吃完人都舒服了～",
          en: "So satisfying after eating!",
        },
        price: 16.8,
        category: {
          cn: "主食必点",
          en: "Mains",
        },
        image: "http://localhost:8080/uploads/1742703553523-IMG_1311.jpg",
        available: true,
      },
      {
        name: {
          cn: "黄豆焖肥肠",
          en: "Braised Pork Intestines with Soybeans",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 38.8,
        category: {
          cn: "特色烧菜",
          en: "Casserole",
        },
        image: "http://localhost:8080/uploads/1742703452855-IMG_1292.jpg",
        available: true,
      },
      {
        name: {
          cn: "薯条",
          en: "French Fries",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 18.8,
        category: {
          cn: "小吃系列",
          en: "Snacks",
        },
        image: "http://localhost:8080/uploads/1742703591203-IMG_1309.jpg",
        available: true,
      },
      {
        name: {
          cn: "土豆片回锅肉",
          en: "Twice-cooked Pork with Potato Slices",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 28.8,
        category: {
          cn: "家常荤菜",
          en: "Meat",
        },
        image: "http://localhost:8080/uploads/1742703125100-IMG_1259.jpg",
        available: true,
      },
      {
        name: {
          cn: "芋儿烧鸡",
          en: "Braised Chicken with Taro",
        },
        description: {
          cn: "就是这个味儿！",
          en: "This is the taste!",
        },
        price: 38.8,
        category: {
          cn: "特色烧菜",
          en: "Casserole",
        },
        image:  "http://localhost:8080/uploads/1742703464729-IMG_1288.jpg",
        available: true,
      },
      {
        name: {
          cn: "三人套餐丨泡椒牛肉+蒜香肉沫烧茄子+土豆丝+米饭*3",
          en: "Three-Person Set | Pickled Chili Beef + Garlic Minced Pork Eggplant + Shredded Potatoes + Rice *3",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 68.8,
        category: {
          cn: "严选套餐",
          en: "Set Meal",
        },
        image: "",
        available: true,
      },
      {
        name: {
          cn: "屋檐椒麻薄荷鱼",
          en: "Peppercorn Mint Fish (Freshly Butchered)",
        },
        description: {
          cn: "现宰活鱼，麻辣鲜香！",
          en: "Freshly butchered fish, spicy and fragrant!",
        },
        price: 118,
        category: {
          cn: "经典水煮",
          en: "Boiled",
        },
        image:  "http://localhost:8080/uploads/1742703511190-IMG_1286.jpg",
        available: true,
      },
      {
        name: {
          cn: "牛魔王肥肠干锅",
          en: "Beef & Pork Intestine Dry Pot",
        },
        description: {
          cn: "牛肉+肥肠",
          en: "Beef + Pork Intestines",
        },
        price: 48.8,
        category: {
          cn: "香辣干锅",
          en: "Dry Pot",
        },
        image: "http://localhost:8080/uploads/1742703391038-IMG_1294.jpg",
        available: true,
      },
      {
        name: {
          cn: "炝炒/酸辣土豆丝",
          en: "Hot Stir-fried / Sour & Spicy Shredded Potatoes",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 18.8,
        category: {
          cn: "小炒素菜",
          en: "Vege",
        },
        image: "http://localhost:8080/uploads/1742703294697-IMG_1274.jpg",
        available: true,
      },
      {
        name: {
          cn: "老派鱼香肉丝",
          en: "Classic Yu-Xiang Shredded Pork",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 28.8,
        category: {
          cn: "家常荤菜",
          en: "Meat",
        },
        image: "http://localhost:8080/uploads/1742703132044-IMG_1262.jpg",
        available: true,
      },
      {
        name: {
          cn: "花椒鸡",
          en: "Sichuan Peppercorn Chicken",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 48.8,
        category: {
          cn: "江湖爆炒",
          en: "Stir-fry",
        },
        image: "http://localhost:8080/uploads/1742702825079-IMG_1246.jpg",
        available: true,
      },
      {
        name: {
          cn: "石锅豆腐",
          en: "Stone Pot Tofu",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 28.8,
        category: {
          cn: "小炒素菜",
          en: "Vege",
        },
        image: "http://localhost:8080/uploads/1742703309954-IMG_1279.jpg",
        available: true,
      },
      {
        name: {
          cn: "干锅有机花菜",
          en: "Dry Pot Cauliflower",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 28.8,
        category: {
          cn: "小炒素菜",
          en: "Vege",
        },
        image: "http://localhost:8080/uploads/1742703334890-IMG_1280.jpg",
        available: true,
      },
      {
        name: {
          cn: "萝卜龙骨汤",
          en: "Radish Pork Bone Soup",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 18.8,
        category: {
          cn: "营养靓汤",
          en: "Soup",
        },
        image: "http://localhost:8080/uploads/1742702886313-IMG_1299.jpg",
        available: true,
      },
      {
        name: {
          cn: "酥炸馄饨",
          en: "Crispy Fried Wontons",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 18.8,
        category: {
          cn: "小吃系列",
          en: "Snacks",
        },
        image: "http://localhost:8080/uploads/1742703600993-IMG_1308.jpg",
        available: true,
      },
      {
        name: {
          cn: "青椒回锅肉",
          en: "Twice-cooked Pork with Green Peppers",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 28.8,
        category: {
          cn: "家常荤菜",
          en: "Meat",
        },
        image: "http://localhost:8080/uploads/1742703144241-IMG_1257.jpg",
        available: true,
      },
      {
        name: {
          cn: "青椒肉丝",
          en: "Shredded Pork with Green Peppers",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 28.8,
        category: {
          cn: "家常荤菜",
          en: "Meat",
        },
        image: "http://localhost:8080/uploads/1742703150819-IMG_1260.jpg",
        available: true,
      },
      {
        name: {
          cn: "凉拌牛肉",
          en: "Cold Beef Slices",
        },
        description: {
          cn: "（夫妻肺片升级版～）",
          en: "(Upgraded Fuqi Feipian)",
        },
        price: 38.8,
        category: {
          cn: "佐酒凉拌",
          en: "Cold Dishes",
        },
        image: "http://localhost:8080/uploads/1742703617041-IMG_1297.jpg",
        available: true,
      },
      {
        name: {
          cn: "尖椒兔",
          en: "Spicy Green Chili Rabbit",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 38.8,
        category: {
          cn: "江湖爆炒",
          en: "Stir-fry",
        },
        image: "http://localhost:8080/uploads/1742702795986-IMG_1247.jpg",
        available: true,
      },
      {
        name: {
          cn: "双人成行 | 青椒回锅肉+随机素菜+米饭*2",
          en: "Set for Two | Twice-cooked Pork + Random Veggie + Rice*2",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 42.8,
        category: {
          cn: "严选套餐",
          en: "Set Meal",
        },
        image: "",
        available: true,
      },
      {
        name: {
          cn: "腊猪油葱花土豆片",
          en: "Lard & Scallion Potato Slices",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 18.8,
        category: {
          cn: "小炒素菜",
          en: "Vege",
        },
        image:"http://localhost:8080/uploads/1742703345483-IMG_1268.jpg",
        available: true,
      },
      {
        name: {
          cn: "茄子土豆煲",
          en: "Eggplant & Potato Casserole",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 18.8,
        category: {
          cn: "小炒素菜",
          en: "Vege",
        },
        image:  "http://localhost:8080/uploads/1742703356220-IMG_1281.jpg",
        available: true,
      },
      {
        name: {
          cn: "屋檐青椒鱼）",
          en: "Roof Special Green Chili Fish",
        },
        description: {
          cn: "现宰活鱼，鲜嫩入味",
          en: "Freshly slaughtered fish, tender and flavorful",
        },
        price: 118,
        category: {
          cn: "经典水煮",
          en: "Boiled",
        },
        image: "http://localhost:8080/uploads/1742703524367-IMG_1285.jpg",
        available: true,
      },
      {
        name: {
          cn: "暴打柠檬茶（冰）",
          en: "Smashed Lemon Tea (Iced)",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 12,
        category: {
          cn: "解腻饮品",
          en: "Drinks",
        },
        image:  "http://localhost:8080/uploads/1742703178051-IMG_1315.jpg",
        available: true,
      },
      {
        name: {
          cn: "鲜椒牛蛙",
          en: "Fresh Chili Bullfrog",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 38.8,
        category: {
          cn: "江湖爆炒",
          en: "Stir-fry",
        },
        image:  "http://localhost:8080/uploads/1742702809739-IMG_1249.jpg",
        available: true,
      },
      {
        name: {
          cn: "山药炒木耳",
          en: "Stir-fried Yam & Black Fungus",
        },
        description: {
          cn: "",
          en: "",
        },
        price: 18.8,
        category: {
          cn: "小炒素菜",
          en: "Vege",
        },
        image: "http://localhost:8080/uploads/1742703362451-IMG_1278.jpg",
        available: true,
      },
      {
        name: {
          cn: "盐菜土豆片",
          en: "Salted Pickles Potato Slices ",
        },
        description: {
          cn: "找不到语言形容了，酥脆咸香好好吃呀！",
          en: "Words can't describe it—crispy, savory, and super tasty!",
        },
        price: 18.8,
        category: {
          cn: "小炒素菜",
          en: "Vege",
        },
        image: "http://localhost:8080/uploads/1742703370414-IMG_1270.jpg",
        available: true,
      },
    ];
    await MenuItem.insertMany(menuItems);
    console.log("Menu data seeded successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedMenu();
