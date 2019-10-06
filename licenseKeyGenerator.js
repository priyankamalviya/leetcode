var licenseKeyFormatting = function(S, K) {
    S = S.split('-').join('');
    let result = "";
    for(let i =0; i< S.length; i+4) {
        result+=S.substring(i, K)+'-'
    }
    
    return result.slice(0,-1);
};


console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));