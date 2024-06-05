let one = document.getElementById("1")
let two = document.getElementById("2")
let thr = document.getElementById("3")
let four = document.getElementById("4")
let five = document.getElementById("5")
let six = document.getElementById("6")
let sev = document.getElementById("7")
let eig = document.getElementById("8")
let nine = document.getElementById("9")
let start = document.getElementById("start");
let toe =document.getElementsByClassName("toe");

if(  confirm("Are You Ready peeps?")){
    alert("HOLA AMIGOS,let's play")
}


start.onclick = () => {
    val();
}
let a;
one.value = "0";
let val = () => {
    if (two.value != 'x' && two.value != '0') {

        if (one.value == 'x' && two.value == 'x' && thr.value == 'x') {
            toe.innerHTML="https://gifdb.com/images/high/hurray-hooray-girl-letter-p-shirt-cg29fgjo6vfjt8j5.gif";
            alert("YOU WIN..!!")
            return;
        }
        if (five.value == 'x' && four.value == 'x' && six.value == 'x') {
            alert("YOU WIN..!")
            return;
        }
        if (sev.value == 'x' && eig.value == 'x' && nine.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (one.value == 'x' && four.value == 'x' && sev.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (two.value == 'x' && five.value == 'x' && eig.value == 'x') {
           two.value.style.textDecoration="line-through";
            alert("YOU WIN!")
            return;
        }
        if (thr.value == 'x' && six.value == 'x' && nine.value == 'x') {
            alert("YOU WIN!")
            return;
        }
        if(one.value=='x' && two.value=='x' && thr.value!='0' && thr.value!='x'){
            thr.value='0';

        }
       else if(four.value=='x' && five.value=='x' && six.value!='0' && six.value!='x'){
            six.value='0';
            
        }
        else if(sev.value=='x' && eig.value=='x' && nine.value!='0'&& nine.value!='x'){
            nine.value='0';
        }
        else if(one.value=='0' && four.value=='0'&& sev.value!='0' && sev.value!='x'){
            sev.value='0';
        }
        else if(two.value=='0' && five.value=='0'&& eig.value!='0' && eig.value!='x'){
            eig.value='0';
        }
        else if(thr.value=='0' && five.value=='0'&& sev.value!='0' && sev.value!='x'){
            sev.value='0';
        }
      
        else{
    
     
            two.value = '0';
        }
        

        if (one.value == '0' && two.value == '0' && thr.value == '0') {
            alert("umm,bad luck..!!")
            return;
        }
        if (five.value == '0' && four.value == '0' && six.value == '0') {
            alert("umm,bad luck..!!")
            return;
        }
        if (sev.value == '0' && eig.value == '0' && nine.value == '0') {
            alert("umm,bad luck..!!")
            return;
        }
        if (one.value == '0' && four.value == '0' && sev.value == '0') {
            alert("umm,bad luck..!!")
            return;
        }
        if (two.value == '0' && five.value == '0' && eig.value == '0') {
            alert("umm,bad luck..!!")
            return;
        }
        if (thr.value == '0' && six.value == '0' && nine.value == '0') {
            alert("umm,bad luck..!!")
            return;
        }
        if (one.value == '0' && five.value == '0' && nine.value == '0') {
            alert("umm,bad luck..!!")
            return;
        }
        if (thr.value == '0' && five.value == '0' && sev.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }


    }
    else if (thr.value != '0' && thr.value != 'x') {
        if (one.value == 'x' && two.value == 'x' && thr.value == 'x') {
            alert("YOU WIN!")
            return;

        }
        if (five.value == 'x' && four.value == 'x' && six.value == 'x') {
            alert("YOU WIN!")
            return;
        }
        if (sev.value == 'x' && eig.value == 'x' && nine.value == 'x') {
            alert("YOU WIN!")
            return;
        }
        if (one.value == 'x' && four.value == 'x' && sev.value == 'x') {
            alert("YOU WIN!")
            return;
        }
        if (two.value == 'x' && five.value == 'x' && eig.value == 'x') {
            alert("YOU WIN!")
            return;
        }
        if (thr.value == 'x' && six.value == 'x' && nine.value == 'x') {
            alert("YOU WIN!")
            return;
        }
        if (one.value == 'x' && five.value == 'x' && nine.value == 'x') {
            alert("YOU WIN!")
            return;
        }
        if (thr.value == 'x' && five.value == 'x' && sev.value == 'x') {
            alert("YOU WIN!")
            return;
        }
        if(one.value=='x' && two.value=='x' && thr.value!='0' && thr.value!='x'){
            thr.value='0';

        }
       else if(four.value=='x' && five.value=='x' && six.value!='0' && six.value!='x'){
            six.value='0';
            
        }
        else if(sev.value=='x' && eig.value=='x' && nine.value!='0'&& nine.value!='x'){
            nine.value='0';
        }
        else if(one.value=='0' && four.value=='0'&& sev.value!='0' && sev.value!='x'){
            sev.value='0';
        }
        else if(two.value=='0' && five.value=='0'&& eig.value!='0' && eig.value!='x'){
            eig.value='0';
        }
        else if(thr.value=='0' && five.value=='0'&& sev.value!='0' && sev.value!='x'){
            sev.value='0';
        }
        else{
        thr.value = '0';
        }
        
     
        if (one.value == '0' && two.value == '0' && thr.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (five.value == '0' && four.value == '0' && six.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (sev.value == '0' && eig.value == '0' && nine.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (one.value == '0' && four.value == '0' && sev.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (two.value == '0' && five.value == '0' && eig.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (thr.value == '0' && six.value == '0' && nine.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (one.value == '0' && five.value == '0' && nine.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (thr.value == '0' && five.value == '0' && sev.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }

    }



    else if (four.value != 'x' && four.value != '0') {
        if (one.value == 'x' && two.value == 'x' && thr.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (five.value == 'x' && four.value == 'x' && six.value == 'x') {
            alert("YOU WIN..!")
            return;
        }
        if (sev.value == 'x' && eig.value == 'x' && nine.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (one.value == 'x' && four.value == 'x' && sev.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (two.value == 'x' && five.value == 'x' && eig.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (thr.value == 'x' && six.value == 'x' && nine.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (one.value == 'x' && five.value == 'x' && nine.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (thr.value == 'x' && five.value == 'x' && sev.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if(one.value=='x' && two.value=='x' && thr.value!='0' && thr.value!='x'){
            thr.value='0';

        }
       else if(four.value=='x' && five.value=='x' && six.value!='0' && six.value!='x'){
            six.value='0';
            
        }
        else if(sev.value=='x' && eig.value=='x' && nine.value!='0'&& nine.value!='x'){
            nine.value='0';
        }
        else if(one.value=='0' && four.value=='0'&& sev.value!='0' && sev.value!='x'){
            sev.value='0';
        }
        else if(two.value=='0' && five.value=='0'&& eig.value!='0' && eig.value!='x'){
            eig.value='0';
        }
        else if(thr.value=='0' && five.value=='0'&& sev.value!='0' && sev.value!='x'){
            sev.value='0';
        }
        else{
            four.value = '0';
        }
        
        if (one.value == '0' && two.value == '0' && thr.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (five.value == '0' && four.value == '0' && six.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (sev.value == '0' && eig.value == '0' && nine.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (one.value == '0' && four.value == '0' && sev.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (two.value == '0' && five.value == '0' && eig.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (thr.value == '0' && six.value == '0' && nine.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (one.value == '0' && five.value == '0' && nine.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (thr.value == '0' && five.value == '0' && sev.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }

    }
  
    else if (five.value != 'x' && five.value != '0') {
        if (one.value == 'x' && two.value == 'x' && thr.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (five.value == 'x' && four.value == 'x' && six.value == 'x') {
            alert("YOU WIN..!")
            return;
        }
        if (sev.value == 'x' && eig.value == 'x' && nine.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (one.value == 'x' && four.value == 'x' && sev.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (two.value == 'x' && five.value == 'x' && eig.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (thr.value == 'x' && six.value == 'x' && nine.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (one.value == 'x' && five.value == 'x' && nine.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (thr.value == 'x' && five.value == 'x' && sev.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if(one.value=='x' && two.value=='x' && thr.value!='0' && thr.value!='x'){
            thr.value='0';

        }
       else if(four.value=='x' && five.value=='x' && six.value!='0' && six.value!='x'){
            six.value='0';
            
        }
        else if(sev.value=='x' && eig.value=='x' && nine.value!='0'&& nine.value!='x'){
            nine.value='0';
        }
        else if(one.value=='0' && four.value=='0'&& sev.value!='0' && sev.value!='x'){
            sev.value='0';
        }
        else if(two.value=='0' && five.value=='0'&& eig.value!='0' && eig.value!='x'){
            eig.value='0';
        }
        else if(thr.value=='0' && five.value=='0'&& sev.value!='0' && sev.value!='x'){
            sev.value='0';
        }
        else{
      five.value='0';
        }
        if (one.value == '0' && two.value == '0' && thr.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (five.value == '0' && four.value == '0' && six.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (sev.value == '0' && eig.value == '0' && nine.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (one.value == '0' && four.value == '0' && sev.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (two.value == '0' && five.value == '0' && eig.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (thr.value == '0' && six.value == '0' && nine.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (one.value == '0' && five.value == '0' && nine.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (thr.value == '0' && five.value == '0' && sev.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }

    }
    else if (six.value != 'x' && six.value != '0') {
        if (one.value == 'x' && two.value == 'x' && thr.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (five.value == 'x' && four.value == 'x' && six.value == 'x') {
            alert("YOU WIN..!")
            return;
        }
        if (sev.value == 'x' && eig.value == 'x' && nine.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (one.value == 'x' && four.value == 'x' && sev.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (two.value == 'x' && five.value == 'x' && eig.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (thr.value == 'x' && six.value == 'x' && nine.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (one.value == 'x' && five.value == 'x' && nine.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (thr.value == 'x' && five.value == 'x' && sev.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if(one.value=='x' && two.value=='x' && thr.value!='0' && thr.value!='x'){
            thr.value='0';

        }
       else if(four.value=='x' && five.value=='x' && six.value!='0' && six.value!='x'){
            six.value='0';
            
        }
        else if(sev.value=='x' && eig.value=='x' && nine.value!='0'&& nine.value!='x'){
            nine.value='0';
        }
        else if(one.value=='0' && four.value=='0'&& sev.value!='0' && sev.value!='x'){
            sev.value='0';
        }
        else if(two.value=='0' && five.value=='0'&& eig.value!='0' && eig.value!='x'){
            eig.value='0';
        }
        else if(thr.value=='0' && five.value=='0'&& sev.value!='0' && sev.value!='x'){
            sev.value='0';
        }
        else{
        six.value='0';
        }
     
        if (one.value == '0' && two.value == '0' && thr.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (five.value == '0' && four.value == '0' && six.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (sev.value == '0' && eig.value == '0' && nine.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (one.value == '0' && four.value == '0' && sev.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (two.value == '0' && five.value == '0' && eig.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (thr.value == '0' && six.value == '0' && nine.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (one.value == '0' && five.value == '0' && nine.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (thr.value == '0' && five.value == '0' && sev.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }


    }
    else if (sev.value != 'x' && sev.value != '0') {
        if (one.value == 'x' && two.value == 'x' && thr.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (five.value == 'x' && four.value == 'x' && six.value == 'x') {
            alert("YOU WIN..!")
            return;
        }
        if (sev.value == 'x' && eig.value == 'x' && nine.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (one.value == 'x' && four.value == 'x' && sev.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (two.value == 'x' && five.value == 'x' && eig.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (thr.value == 'x' && six.value == 'x' && nine.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (one.value == 'x' && five.value == 'x' && nine.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (thr.value == 'x' && five.value == 'x' && sev.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if(one.value=='x' && two.value=='x' && thr.value!='0' && thr.value!='x'){
            thr.value='0';

        }
       else if(four.value=='x' && five.value=='x' && six.value!='0' && six.value!='x'){
            six.value='0';
            
        }
        else if(sev.value=='x' && eig.value=='x' && nine.value!='0'&& nine.value!='x'){
            nine.value='0';
        }
        else if(one.value=='0' && four.value=='0'&& sev.value!='0' && sev.value!='x'){
            sev.value='0';
        }
        else if(two.value=='0' && five.value=='0'&& eig.value!='0' && eig.value!='x'){
            eig.value='0';
        }
        else if(thr.value=='0' && five.value=='0'&& sev.value!='0' && sev.value!='x'){
            sev.value='0';
        }
        else{
       sev.value='0';
        }
        if (one.value == '0' && two.value == '0' && thr.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (five.value == '0' && four.value == '0' && six.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (sev.value == '0' && eig.value == '0' && nine.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (one.value == '0' && four.value == '0' && sev.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (two.value == '0' && five.value == '0' && eig.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (thr.value == '0' && six.value == '0' && nine.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (one.value == '0' && five.value == '0' && nine.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }
        if (thr.value == '0' && five.value == '0' && sev.value == '0') {
            alert("YOU LOSS..!!")
            return;
        }


    }

    else if (eig.value != 'x' && eig.value != '0') {
        if (one.value == 'x' && two.value == 'x' && thr.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (five.value == 'x' && four.value == 'x' && six.value == 'x') {
            alert("YOU WIN..!")
            return;
        }
        if (sev.value == 'x' && eig.value == 'x' && nine.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (one.value == 'x' && four.value == 'x' && sev.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (two.value == 'x' && five.value == 'x' && eig.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (thr.value == 'x' && six.value == 'x' && nine.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (one.value == 'x' && five.value == 'x' && nine.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if (thr.value == 'x' && five.value == 'x' && sev.value == 'x') {
            alert("YOU WIN..!!")
            return;
        }
        if(one.value=='x' && two.value=='x' && thr.value!='0' && thr.value!='x'){
            thr.value='0';

        }
       else if(four.value=='x' && five.value=='x' && six.value!='0' && six.value!='x'){
            six.value='0';
            
        }
        else if(sev.value=='x' && eig.value=='x' && nine.value!='0'&& nine.value!='x'){
            nine.value='0';
        }
        else if(one.value=='0' && four.value=='0'&& sev.value!='0' && sev.value!='x'){
            sev.value='0';
        }
        else if(two.value=='0' && five.value=='0'&& eig.value!='0' && eig.value!='x'){
            eig.value='0';
        }
        else if(thr.value=='0' && five.value=='0'&& sev.value!='0' && sev.value!='x'){
            sev.value='0';
        }
        else{



           eig.value='0';
        }
    if (one.value == '0' && two.value == '0' && thr.value == '0') {
        alert("YOU LOSS..!!")
        return;
    }
    if (five.value == '0' && four.value == '0' && six.value == '0') {
        alert("YOU LOSS..!!")
        return;
    }
    if (sev.value == '0' && eig.value == '0' && nine.value == '0') {
        alert("YOU LOSS..!!")
        return;
    }
    if (one.value == '0' && four.value == '0' && sev.value == '0') {
        alert("YOU LOSS..!!")
        return;
    }
    if (two.value == '0' && five.value == '0' && eig.value == '0') {
        alert("YOU LOSS..!!")
        return;
    }
    if (thr.value == '0' && six.value == '0' && nine.value == '0') {
        alert("YOU LOSS..!!")
        return;
    }
    if (one.value == '0' && five.value == '0' && nine.value == '0') {
        alert("YOU LOSS..!!")
        return;
    }
    if (thr.value == '0' && five.value == '0' && sev.value == '0') {
        alert("YOU LOSS..!!")
        return;
    }
}





else if (nine.value != 'x' && nine.value != '0') {
    if (one.value == 'x' && two.value == 'x' && thr.value == 'x') {
        alert("YOU WIN..!!")
        return;
    }
    if (five.value == 'x' && four.value == 'x' && six.value == 'x') {
        alert("YOU WIN..!")
        return;
    }
    if (sev.value == 'x' && eig.value == 'x' && nine.value == 'x') {
        alert("YOU WIN..!!")
        return;
    }
    if (one.value == 'x' && four.value == 'x' && sev.value == 'x') {
        alert("YOU WIN..!!")
        return;
    }
    if (two.value == 'x' && five.value == 'x' && eig.value == 'x') {
        alert("YOU WIN..!!")
        return;
    }
    if (thr.value == 'x' && six.value == 'x' && nine.value == 'x') {
        alert("YOU WIN..!!")
        return;
    }
    if (one.value == 'x' && five.value == 'x' && nine.value == 'x') {
        alert("YOU WIN..!!")
        return;
    }
    if (thr.value == 'x' && five.value == 'x' && sev.value == 'x') {
        alert("YOU WIN..!!")
        return;
    }
    if(one.value=='x' && two.value=='x' && thr.value!='0' && thr.value!='x'){
            thr.value='0';

        }
       else if(four.value=='x' && five.value=='x' && six.value!='0' && six.value!='x'){
            six.value='0';
            
        }
        else if(sev.value=='x' && eig.value=='x' && nine.value!='0'&& nine.value!='x'){
            nine.value='0';
        }
        else if(one.value=='0' && four.value=='0'&& sev.value!='0' && sev.value!='x'){
            sev.value='0';
        }
        else if(two.value=='0' && five.value=='0'&& eig.value!='0' && eig.value!='x'){
            eig.value='0';
        }
        else if(thr.value=='0' && five.value=='0'&& sev.value!='0' && sev.value!='x'){
            sev.value='0';
        }
        else{
    nine.value='0';
        }



    if (one.value == '0' && two.value == '0' && thr.value == '0') {
        alert("YOU LOSS..!!")
        return;
    }
    if (five.value == '0' && four.value == '0' && six.value == '0') {
        alert("YOU LOSS..!!")
        return;
    }
    if (sev.value == '0' && eig.value == '0' && nine.value == '0') {
        alert("YOU LOSS..!!")
        return;
    }
    if (one.value == '0' && four.value == '0' && sev.value == '0') {
        alert("YOU LOSS..!!")
        return;
    }
    if (two.value == '0' && five.value == '0' && eig.value == '0') {
        alert("YOU LOSS..!!")
        return;
    }
    if (thr.value == '0' && six.value == '0' && nine.value == '0') {
        alert("YOU LOSS..!!")
        return;
    }
    if (one.value == '0' && five.value == '0' && nine.value == '0') {
        alert("YOU LOSS..!!")
        return;
    }
    if (thr.value == '0' && five.value == '0' && sev.value == '0') {
        alert("YOU LOSS..!!")
        return;
    }




}
else{
    alert("NOBODY");
}



}
