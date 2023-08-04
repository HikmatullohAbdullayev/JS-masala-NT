const dollar = 11191
const yevro = 11747.42

let sayohatXarajati = (750 * dollar) + (120 * yevro)

let alisherniPuli = Number(prompt(`Alisher qancha puling bor (Bratishka)
${sayohatXarajati} so'm puling bo'lsa sayohat qilishing mumkin`))

if (sayohatXarajati <= alisherniPuli) {
    console.log("oq yo'l Alisher");
}else
{
    console.log(`Alisher ozgina puling kam ekan
     (qisb tur patsan)`);
}
console.log(`Alisherni puli ${alisherniPuli} so'm`);