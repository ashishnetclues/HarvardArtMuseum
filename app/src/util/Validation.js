export default class Validation {

    static isEmpty(data) {
        if (data == null || data == undefined || data == '' || typeof data == 'undefined')
            return true;
        else
            return false;
    }

   
    //if valid then return true other wise return false
    static validTitle(inputValue) {
        let value = /^[ A-Za-z0-9_./#&-?/'']*$/;
        return value.test(inputValue);
    }
    //if valid then return true other wise return false
    static validXSS(inputValue) {
        let value = /<\/?[a-z][\s\S]*>/i;
        return value.test(inputValue);
    }

    static minLength(text, len) {
        return text.length >= len;
    }

    static maxLength(text, len) {
        return text.length <= len;
    }

    static validName(name) {
        // let reg = /^[A-Za-z-'\u007D-\u00FF\s]{1,28}$/;
        let reg = /^[A-Za-z]{1,28}$/;
        return reg.test(name);
    }
    static mobileNumber(value) {
        // let reg = /^[A-Za-z-'\u007D-\u00FF\s]{1,28}$/;
        let reg = /^[0-9]{5}$/;
        return reg.test(value);
    }
    static validNameWithNumber(name) {
        // let reg = /^[A-Za-z-'\u007D-\u00FF\s]{1,28}$/;
        let reg = /^[A-Za-z0-9\d,\s,\.\,/'/"]+$/;
        return reg.test(name);
    }

    static validPhone(number) {
        let reg = /^(|\(|\s|){0,}\d{3}(\-|\)|\s|\.|){1,}\d{3}(\-|\s|\.|){1,}\d{4}$/;

        return reg.test(number);
    }
    static validCreditCardNo(number) {
        let reg = /^[345\s][0-9]{12,15}$/;
        return reg.test(number);
    }

    static validCardHolderName(name) {
        let reg = /^[A-Za-z\s?-]{2,}$/;
        return reg.test(name);
    }

    static validCvv(number) {
        let reg = /^[0-9]{3,4}$/;
        return reg.test(number);
    }
    static validBillingAddress(address) {
        let reg = /^[A-Za-z0-9\u007D-\u00FF\u0022',-/.:;#_()\s]+$/;
        return reg.test(address);
    }
    static validCity(city) {
        let reg = /^[0-9A-Za-z\s?]{3,}$/;
        return reg.test(city);
    }
    static validPaymentPostalCode(code) {
        let reg = /^[A-Za-z][0-9][A-Za-z]\s?[0-9][A-Za-z][0-9]|(\d{5}([\-]\d{4})?)$/;
        return reg.test(code);
    }


    static validUrl(code){
        let reg=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        return reg.test(code);
    } 

}