function encode() {
    URLEncoder = {
        
        encode: function (prop) {

            if (Array.isArray(prop)) {
                var masiv = [];
                for (var i = 0; i < prop.length; i++) {
                    var result = percentEncoding(prop[i]);
                    masiv.push(result);
                }
                
                return 0;
            }

            if (typeof prop == 'object') {
                var masiv1 = [];
                var masiv2 = [];
                var masivmerg = "";
                for (var item in prop) {
                    var result1 = percentEncoding(item);
                    var result2 = percentEncoding(property[item]);
                    masiv1.push(result1);
                    masiv2.push(result2);

                }
                for (var i = 0; i < masiv1.length; i++) {
                    masivmerg += mas1iv[i] + "=" + masiv2[i];
                    masivmerg += "&";
                }
                masivmerg = masivmerg.substring(0, masivmerg.length - 1);
                console.log(property);
                console.log(masivmerg);
                return 0;

            }
        }
        
        var result = percentEncoding(prop);
        console.log(prop);
        console.log(result);











    }
}