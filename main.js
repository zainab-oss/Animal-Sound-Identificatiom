function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/-n4WmuO7R/model.json", modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults (error, results)
{
    if (error)
    {
        console.error (error);
    } else 
    {
        console.log (results);
        random_r = Math.floor(Math.random() * 255) + 1;
        random_g = Math.floor(Math.random() * 255) + 1;
        random_b = Math.floor(Math.random() * 255) + 1;
        
        document.getElementById("result_label").innerHTML = "I can hear: " + results[0].label;
        document.getElementById("result_label_accuracy").innerHTML = "Accuracy: " + (results[0].confidence*100).toFixed(2) + "%";

        document.getElementById("result_label").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";
        document.getElementById("result_label_accuracy").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";

        img = document.getElementById("imgdis");

        if (results[0].label == "Bark")
        {
            img.src = "barkingdog.gif";
        } 
        else if (results[0].label == "Moo")
        {
            img.src = "moocow.gif";
        } 
        else if (results[0].label == "Meow")
        {
            img.src = "meowcat.gif";
        } 
        else if (results[0].label == "Roar")
        {
            img.src = "roarlion.gif";
        } 
        else {
            img.src = "listening.gif";
        }
    }
}