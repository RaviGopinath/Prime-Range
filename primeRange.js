let i , n;

n = prompt("Enter the Number");


for(i = 2; i<n; i++){
    prime = true;

    for(j = 2; j<i; j++){
        if(i % j==0){
            prime = false;
            break;
        }
    }
    if(prime == true){
        console.log(i);
    }
}