using System;

class Program 
{
  public static void Main (string[] args) 
  {
    var num = Convert.ToInt32(Console.ReadLine());

	var result = IsPrime(num); 
	  
    if (result.Result) 
	{
        Console.WriteLine($"O número {num} é primo. Número de iterações necessárias: {result.Count}");
		return;
    }

	Console.WriteLine($"O número {num} não é primo. Número de iterações necessárias: {result.Count}");
  }

  public static IsPrimeResult IsPrime(int number) 
  {
    if (number == 1) 
	{
        return new IsPrimeResult(false, 1);
    }

	if (number == 2) 
	{
		return new IsPrimeResult(true, 1);
	}

	if (number % 2 == 0) 
	{
        return new IsPrimeResult(false, 1);
	}

	int count = 1;

	for (int i = 3; i < number; i += 2) 
	{
		count++;
		
		if (number % i == 0) 
		{
			return new IsPrimeResult(false, count);
		}
	}

	return new IsPrimeResult(true, count);
  }

  public record IsPrimeResult(bool Result, int Count);
}