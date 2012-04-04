Date.prototype.convert = function(method)
{   
        var curr_date = this.getDate();
        var curr_month = this.getMonth() + 1; 
        var curr_year = this.getFullYear();
        var date = '';

        var toArray = method.split('-', 3);
        for(var i = 0; i < toArray.length; i++)
        {       
                if(toArray[i] == 'dd')
                {
                    date += curr_date.toString();
                } else if (toArray[i] == 'mm')
                {
                    date += curr_month.toString();
                } else if (toArray[i] = 'yy')
                {
                    date += curr_year.toString();
                }

                if(toArray.length == 3)
                {
                    if(i == 0 || i == 1)
                    {
                        date += '-';
                    }
                } else if (toArray.length == 2)
                {
                    if(i == 0)
                    {
                        date += '-';
                    }
                } else {

                }

        }
        return date;
}