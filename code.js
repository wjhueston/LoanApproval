$(document).ready(function () {
    var myRules =
        {
            salary:
                {
                    min: 0,
                    max: 4000000001,
                    required: true
                },
            creditScore:
                {
                    min: 300,
                    max: 850,
                    required: true
                },
            jobMonths:
                {
                    min: 0,
                    max: 1188,
                    required: true
                }
        };
    var myMessages =
        {
            salary:
                {
                    min: "It is mathematically impossible to make this amount.",
                    max: "Bill Gates doesn't even make that much, and it's possible he owns this chain of banks.",
                    required: "We need your salary."
                },
            creditScore:
                {
                    min: "Not possible.",
                    max: "Not possible.",
                    required: "We need your credit score."
                },
            jobMonths:
                {
                    min: "Not possible.",
                    max: "You would have to be older than anyone else on the planet for this to be true.",
                    required: "We need the number of months you've been at your current job."
                }
        };
    $("form").validate(
        {
            submitHandler: decideLoan,
            rules: myRules,
            messages: myMessages

        }
    );

    function decideLoan() {
        var isApproved
        var salary = $("#salary").val()
        var creditScore = $("#creditScore").val()
        var jobMonths = $("#jobMonths").val()
        if(salary >= 40000){
            if(creditScore>=600){
                isApproved = true
            }
            else{
                isApproved = (jobMonths > 12);
            }
        }
        else{
            if(creditScore>=600){
                isApproved = (jobMonths > 12);
            }
            else{
                isApproved = false
            }
        }
        if(isApproved){
            $("#message").text("You qualify!")
        }
        else{
            $('#message').text("You don't qualify. ")
        }
    }



});