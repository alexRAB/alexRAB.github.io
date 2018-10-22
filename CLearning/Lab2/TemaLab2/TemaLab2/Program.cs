using System;

namespace TemaLab2
{
    class Program
    {
        static void Main(string[] args)
        {
            string prop = "Este ora 4.";
            int len = prop.Length, index = 0;
            double dimMatrice = Math.Sqrt(len);
            int dimMatriceInt = Convert.ToInt32(dimMatrice) + 1;
            string[,] mat = new string[dimMatriceInt, dimMatriceInt];
            for (int i = 0; i < dimMatriceInt; i++)
                for (int j = 0; j < dimMatriceInt; j++)
                {
                    try { if (index<=len-1) mat[i, j] = prop.Substring(index, 1);
                        index++;
                           }
                    catch (Exception) { }
                }
            Console.WriteLine("Dimensiune matrice " + dimMatriceInt.ToString());
            for (int i = 0; i < dimMatriceInt; i++) {
                
                for (int j = 0; j < dimMatriceInt; j++)
                {
                    Console.Write("mat["+i+"]["+j+"] "+mat[i, j] + " ");
                }
                Console.WriteLine();
        }
            Console.ReadKey();

        }
    }
}
