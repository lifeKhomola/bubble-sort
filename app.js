function bubbleSort(arry)
{
    for(let i =0;i < arry.length;i++)
    {
        for(let k =0;k< (arry.length - i-1);k++)
        {
            if(arry[j]> arry[j+1])
            {
                let temp = arry[j];
                arry[j] = arry[j+1];
                arry[j+1] = temp

            }
        }
    }
    console.log(arry);
}
var arr = [2349, 43, 50, 63,  5, 6, 235, 547];
console.log(bubbleSort(arr));