using System;
using System.Linq;

class Program
{
    public static void Main(string[] args)
    {
        var input = Console.ReadLine();

        Console.WriteLine(IsPalindrome(input));
    }

    public static bool IsPalindrome(string input)
    {
		input = TrimString(input.ToLower());
		var reverseInput = ReverseString(input);

		return input.Equals(reverseInput);
    }

	public static string ReverseString(string value) 
	{
		char[] reverseArray = value.ToCharArray();

		Array.Reverse(reverseArray);

		return new String(reverseArray);
	}

	public static string TrimString(string value) 
	{
		return string.Concat(value.Where(c => !char.IsWhiteSpace(c)));
	}
}
