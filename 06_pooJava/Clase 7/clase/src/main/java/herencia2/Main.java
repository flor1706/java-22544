package herencia2;

public class Main {
	public static void main(String[] args) {
		Camion camion1 = new Camion("azul", "2012", "Renault", 80000.00 , 6, "AAA111", 3, 10000);
		Camion camion2 = new Camion("rojo", "2015", "Fiat", 80000.00 , 6, "AAA222", 3, 10000);
		
		Omnibus omnibus1 = new Omnibus("rojo", "2015", "Fiat", 90000.00 , 6, "AAA333", 40, 2);
		Omnibus omnibus2 = new Omnibus("verde", "2015", "BMW", 150000.00 , 6, "AAA444", 40, 2);
		
		camion1.arrancar(); //m�todo heredado
		camion1.cargar(12000); // m�todo propio de la clase
		Integer toneladasCArgar = new Integer(8000);
		camion1.cargar(toneladasCArgar); // m�todo propio de la clase
		
		omnibus1.arrancar();
		omnibus1.ocuparAsientos();
	}
}
