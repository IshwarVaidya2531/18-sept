let input = document.getElementById('ho');
let input2 = document.getElementById('nahi');
input.addEventListener('click', Question)

function Question(e){
   let ans = prompt("Who is your best-friend?").toLowerCase();
    if(ans == "panu"){
      setTimeout(() => {
        window.location.href = 'index1.html';
      }, 500);
            
        
    }
    else if(ans == 'ishwar'){
        alert('Thank you thinking that way , but named the real bestfriend');
    }
    else if(ans== 'sneha'){
        alert('Thank you for thinking that way.. But you are an engineer so be specific');
    }
    else if(ans== 'samiksha'){
        alert('Are you sure, You think she is your best-friend....?')
    }
    else{
        alert('Just chill...and try to remember!, the real gift is waiting for you')
    }
}

input2.addEventListener('click', No)

function No(e){
    alert("Don't you want see your gift?, Accept the page for gift!")

}
