using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zodiac
{
    class Program
    {
        static void Main(string[] args)
        {
            
            string nume;
            int zi, luna, an, contorIncercari = 0;
            bool esteZi, esteLuna, esteAn, dateIntroduseCorect = false;
            Console.WriteLine("Introduceti numele ");
            nume = Console.ReadLine();
            do
            {
                Console.WriteLine(Environment.NewLine + "Va rugam sa introduceti datele intr-un mod corect!");
                contorIncercari++;
                Console.WriteLine("Introduceti ziua de nastere(ca numar 1, 2 ,3,..)");
                esteZi = int.TryParse(Console.ReadLine(), out zi);
                if (esteZi && zi > 0 && zi < 32)
                {
                    dateIntroduseCorect = true;
                }
                Console.WriteLine("Introduceti luna de nastere(ca numar intre 1 si 12)");
                esteLuna = int.TryParse(Console.ReadLine(), out luna);
                if (esteLuna && luna > 0 && luna < 32)
                {
                    dateIntroduseCorect = true;
                }
                else dateIntroduseCorect = false;
                Console.WriteLine("Introduceti anul nasterii");
                esteAn = int.TryParse(Console.ReadLine(), out an);
                if (esteAn && an > 1870 && an < 2018)
                {
                    dateIntroduseCorect = true;
                }
                else dateIntroduseCorect = false;
            }
            while (dateIntroduseCorect.Equals(false) && contorIncercari != 3);
            if (contorIncercari == 3 && dateIntroduseCorect.Equals(false))
            {
                Console.WriteLine("Nu ai respectat instructiunile de trei ori la rand . Se opreste programul");
                Console.ReadKey();
            }
            Console.WriteLine("Ziua buna, " + nume + " ! Ai " + (2018 - an) + " ani. Esti nascut in ziua de " + zi + ", in luna " + luna + ".");
            Console.ReadKey();
        }
    }
}





            