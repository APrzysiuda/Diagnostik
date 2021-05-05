//Bucket Configurations

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

        var upload = new AWS.S3.ManagedUpload({
            params: {
                Bucket: bucketName,
                Key: key,
                Body: file
            }
        });
        params: {
                Bucket: bucketName,
                Key: key,
                Body: file
            };
        s3.putObject(params, function(err, data) {

         if (err) {

             console.log(err)

         } else {

             console.log("Successfully uploaded data to myBucket/myKey");

         }

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
