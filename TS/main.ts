// 1
function formatUserID(num: number | string) {
    if (typeof num === "number") {
        return num;
    }
    else if (typeof num === "string") {
        return num.toUpperCase();
    }
}
// 2
type TransactionType = "income" | "expense";

function describeTransaction(trans: TransactionType, sum: number): string {
    return trans === "income" ? 'Доход: ${sum}' : 'Расход: ${sum}';
}

//3

function processValue(unk: unknown) {
    if (typeof unk === "string") {
        return unk.length;   // ✅ TypeScript знает, что unk — строка
    }
    if (typeof unk === "number") {
        return unk * 2;      // ✅ TypeScript знает, что unk — число
    }
    if (typeof unk === "boolean") {
        return unk;          // ✅ TypeScript знает, что unk — булево
    }
    return "Неизвестный тип";
}

// 4

type PaymentStatus = "pending" | "paid" | "failed";

function getPaymentMessage(PayStat: PaymentStatus) {
    switch (PayStat) {
        case "pending": return "pending";
        case "paid": return "paid";
        case "failed": return "paid";
        default: const _exit: never = PayStat; return _exit;
    }
}