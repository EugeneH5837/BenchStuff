package src.com.example;

import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.Locale;

public class Main{

  public static void main(String[] args){
    var doubleValue = 19_000_000.53;

    var numF = NumberFormat.getNumberInstance();
    System.out.println("number: " + numF.format(doubleValue));
    
    var intF = NumberFormat.getIntegerInstance();
    System.out.println("number: " + intF.format(doubleValue));
    
    intF.setGroupingUsed(false);
    System.out.println("number: " + intF.format(doubleValue));

    var locale = Locale.getDefault();
    var localeFormatter = NumberFormat.getNumberInstance(locale);
    System.out.println("Number: " + localeFormatter.format(doubleValue));

    var currencyFormatter = NumberFormat.getCurrencyInstance();
    System.out.println(currencyFormatter.format(doubleValue));

    var df = new DecimalFormat("$00.00");
    System.out.println("Df: " + df.format(1));
  }
}