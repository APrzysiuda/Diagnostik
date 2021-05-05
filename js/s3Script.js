var request = require('request')
var fs = require('fs')

request({
        method:'PUT',
        uri:"https://n7htecyd97.execute-api.eu-central-1.amazonaws.com/default/getPresignedURL",
        body :fs.readFileSync('C:\\Users\\jeanm\\Desktop\\Seance-2-Jigsaw.pdf'),
        headers:{}

    },
    function(error,response,body){
        if(error){
            console.error(error);
        }else{
            console.log('upload successfully')
        }

    }
);
