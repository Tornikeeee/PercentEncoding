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
        }
        
        var result = percentEncoding(property);
        console.log(property);
        console.log(result);











    }
}