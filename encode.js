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
                
            }
        }
        
        var result = percentEncoding(prop);
        console.log(prop);
        console.log(result);











    }
}