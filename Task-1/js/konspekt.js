// Xatolarni ushlab qolish
// "try {...}" ichida qandaydur xatolk bo'lsa  ushbu xatololikni istisno qilb ketsa bo'ladi va bu xatolik "catch(error / "...") {...}" da ushbu xatolikni ko'rsa bo'ladi
// Masalan:
        // console.log("start");
        // const a = 12
        // try {
        //     a=21
        // } catch (error) {
        //     console.log(error);
        // }

        // console.log("end");

// bunga qo'shimcha "finally {...} " ham bor buninig vazifasi xatolik bo'lsa ham bo'masa ham ishlayveradi.
// Masalan:
        // console.log("start");
        // const a = 12
        // try {
        //     a=21
        // } catch (error) {
        //     console.log(error);
        // } finally{
        //     console.log("xatolik bor lekin ishlaydi");
        // }

        // console.log("end");

// "setTimeout ((..) =>  {...},"vaqt" 1000)" callBack orqali ishlaydi va bu javasctipt emas browserning codei. Bu orqali ma'lum bir amalni qanchadur vaqtdan kegi ishlatsa bo'ladi.
// Masalan:
        // console.log("1-start");
        // setTimeout(() => {
        // console.log("3-time");
        // },2000)
        // console.log("2-end");

// !#!#! "setTimeout ((..) =>  {...},"vaqt" 1000)" da vaqtga "0" berilsa ham u eng oxirida ishlayi. "setTimeout" doim dasturni oxirida ishlaydi, undan kegin qancha code bo'lsa ham  !#!#!
// Masalan:
//         console.log("1-start");
//         setTimeout(() => {
//         console.log("3-time");
//         },0)
//         console.log("2-end");

// JavaSctipt Module
// Module bu - ma'lum bir vazifani bajruvchi kodlarni o'z ichiga olgan fayl. Bunda funksiyalar o'zgaruvchilar va boshqa ko'plab kodlarni yozib asosiy faylga ulagan holda ishlatish mumkin.
// faylni export qilishni 3 xil usuli bor
// 1-usuli-- oddiy export qilsh
// 1-html fayldagi script tegiga type="module" atribyutini yozish kerak.
// 2-qo'shimcha ulanadigon faylga "export ... " qilinadi
// 3- asosiy fayldan "import ... " qilib olinadi va ishlatiladi 

// 2-usuli-- objectga solib export qilsh
// bunda kerakli kodlar yozlinb oxirida export {...} objectiga  solinadi

// 3-usuli-- export default 
// buni bir faylda faqat bir marotaba ishlatish mumkin
 

