const data = promt("Enter your data");

//count words 

let count = 0;

for(i=0;i<data.length();i++)
{
    ch=data.charAt(i);
    if(ch==" " || ' ')
    {
        count++;
    }
}