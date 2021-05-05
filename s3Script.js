//Bucket Configurations
var AWS = require('aws-sdk');
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.1.24.min.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript"></script>

//Bucket Configurations
var AWS = require('aws-sdk');
var bucketName = 'ptieeginput';
var bucketRegion = 'eu-central-1';
var IdentityPoolId = 'eu-central-1:a1c01294-1b09-4701-8baf-7b7c61bc6de9';

AWS.comfig.update()({
    region:bucketRegion,
    credentials:new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
    })
});

var s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: {
        Bucket: bucketName
    }
});

function s3upload() {
    var files = document.getElementById('fileUpload').files;
    if (!files.length) {
        return alert("Please choose a file to upload first.");
    }
    else {
        var file = files[0];
        var fileName = file.name;
        var key = 's3://'+bucketName+'/pti/' + fileName;
        return alert("coucou");
        var upload = new AWS.S3.ManagedUpload({
            params: {
                Bucket: bucketName,
                Key: key,
                Body: file
            }
        });

        var promise = upload.promise();

        return alert("Promise apr.");

        promise.then(
            function(data) {
                alert("Successfully uploaded");
            },
            function(err) {
                return alert("There was an error uploading : ", err.message);
            }
        );
    }
};
