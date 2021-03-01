module.exports = function toReadable (number) {
    arr_0_9 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    arr_10_19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    arr_20_90 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    arr_pow_10 = ['hundred', ' thousand'];
    str='';
    if(number == 0){
        str = arr_0_9[0];
    }
    while (number>0){
        if(number>=1 && number<10){
            str += arr_0_9[number];
            number -= number;
        }
        if(number>=10 && number<20){
            str += arr_10_19[number-10];
            number -= number;
        }
        if(number>=20 && number<100){
            str += arr_20_90[(number-number%10)/10-2]+' ';
            number = number%10;
        }
        if(number>=100 && number<1000){
            str += arr_0_9[(number-number%100)/100] + ' ' + arr_pow_10[0] + ' ';
            number = number%100;
        }
        if(number>=1000 && number<10000){
            str += arr_0_9[(number-number%1000)/1000] + ' ' + arr_pow_10[1] + ' ';
            number = number%1000;
        }
    }
    str = str.trim();
    return str;
}
