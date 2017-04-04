using System;
using System.Collections.Generic;

using Strings;
using Arrays;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            StringSolutions stringSolutions = new StringSolutions();
            // Console.WriteLine(stringSolutions.LadderLength("hit", "cog", new List<string>{"hot","dot","dog","lot","log"}));

            ArraySolutions arraySolutions = new ArraySolutions();
            // Console.WriteLine(arraySolutions.FindMedianSortedArrays(new int[]{}, new int[]{2,3}));
            // Console.WriteLine(arraySolutions.FindKthLargest(new int[]{3,2,1,5,6,4}, 2));
            Console.WriteLine(arraySolutions.Merge()); 
        }
    }
}
