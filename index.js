function prime(num)
{
    if(num < 2)
        return false;
    for(let i = 2;i < num; i++)
    {
        if(num%i == 0)
            return false;
    }
    return true;
}
console.log(prime(2));

//even odd function
function evenodd(num)
{
    if(num%2 == 0)
        return true;
    else
        return false;
}
console.log(evenodd(12));