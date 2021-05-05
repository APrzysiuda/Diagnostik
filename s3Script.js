//Bucket Configurations
var AWS = require('aws-sdk');
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.1.24.min.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript">
//Bucket Configurations
var bucketName = eegstp;
var bucketRegion = eu-central-1;
var IdentityPoolId = eu-central-1:4b94edae-d909-455c-8a83-8f45eaa436ce;

AWS.config.update({
                region: bucketRegion,
                credentials: new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: IdentityPoolId
                })
            });
var s3 = new AWS.S3({
apiVersion: '2006-03-01',
params: {Bucket: bucketName}
});

function s3upload() {
   var files = document.getElementById('fileUpload').files;
   if (files) 
   {
     var file = files[0];
     var fileName = file.name;
     var filePath = 'my-first-bucket-path/' + fileName;
     var fileUrl = 'https://' + bucketRegion + '.amazonaws.com/my-    first-bucket/' +  filePath;
     s3.upload({
        Key: filePath,
        Body: file,
        ACL: 'public-read'
        }, function(err, data) {
        if(err) {
        reject('error');
        }
        alert('Successfully Uploaded!');
        }).on('httpUploadProgress', function (progress) {
        var uploaded = parseInt((progress.loaded * 100) / progress.total);
        $("progress").attr('value', uploaded);
      });
   }
};
</script>
