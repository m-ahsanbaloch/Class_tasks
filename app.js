



function myFunc(value){
    var matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    var input = document.getElementById('input')
    var sett = []
    for(i = 0 ; i < input.value.length; i++){
        var brack = input.value[i]
        // console.log(brack)
        if(brack == '[' || brack == '{' || brack == '('){
            sett.push(brack)
            console.log(sett)
        }
        else if(
            brack == '}' || brack == ')' || brack == "]"
        ){
            sett.pop()
            if(sett == 0){
                console.log("balance")
            }

        }
    }

}