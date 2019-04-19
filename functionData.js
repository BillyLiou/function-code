
// var t = testStr.length;
// var str ;
// function take(str, number){
//     let a  = str.slice(0,number);
//     str = str.slice(n,str.length);
//     return a 
// }

var str1 = 'abcddddeeeee'
function sliceData(checkData) {
    function t(n) {
        let a = checkData.slice(0, n)
        checkData = checkData.slice(n, checkData.length)
        return a
    }
    return {
        STX : t(1), //0
        Trans_Type : t(2), //1
        Host_ID : t(2), // 2
        Receipt_No : t(6), // 3
        Card_No : t(19), // 4
        Reserved : t(4), // 5 
        Trans_Amount : t(12), // 6
        Trans_Date : t(6), // 7
        Trans_Time : t(6) , // 8
        Approval_No : t(9), //9
        Reserved : t(12), //10
        ECR_Response_Code : t(4), //11
        EDC_Terminal_ID : t(8), //12
        Reserved : t(12), //13
        Reserved : t(12), //14
        Order_No : t(18), // 15 // Store_Id/RRN or Order_No 
        Reserved : t(2), //16
        Card_type : t(2), //17
        Reserved : t(2), //18
        Reserved : t(1), //19
        Reserved : t(5), //20
        Entry_Mode : t(1), //21
        Batch_NO : t(6), //22 
        Chip_NO : t(16), //23
        Check_NO : t(4), //24
        Reserved : t(7), //25
        Merchant_ID : t(15), //26
        Reserved : t(12), //27
        Reserved : t(2), //28
        IssuerID : t(8), //29 //Issuer ID
        CardNoVehicle : t(44), //30 //Card No. Vehicle
        TransactionFinished : t(1), //31 //Transaction finished
        TimerBlockReset: t(4), //32 //Timer block reset
        POSTXSeqNo: t(6),//33 //POS TX Seq No
        Reserved: t(130), //34
    }
}

console.log(sliceData(str1).Trans_Type)
console.log(sliceData(str1).Host_ID)
console.log(sliceData(str1).Receipt_No)
console.log('~~~dundundund')

// sliceData(testStr);
// console.log(sliceData(str).Trans_Type);
// console.log(sliceData(str).Host_ID);