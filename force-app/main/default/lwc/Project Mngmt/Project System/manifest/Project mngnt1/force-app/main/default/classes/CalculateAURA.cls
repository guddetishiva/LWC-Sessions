public class CalculateAURA {
    
    @Auraenabled
    public static decimal calculateValues(decimal a, decimal b){
        decimal r =a+b;
        System.debug('Hello');
        return r;
    }

}