package herencia2;

public class Camion extends Vehiculo {
	private Integer cantEjes;
	private Integer tara;
	private Integer tonCargadas=0;
	
	
	public Camion(String color, String modelo, String marca, Double km, Integer cantRuedas, String patente,
			Integer cantEjes, Integer tara) {
		super(color, modelo, marca, km, cantRuedas, patente);
		
		this.cantEjes = cantEjes;
		this.tara = tara;
	}


	public Integer getCantEjes() {
		return cantEjes;
	}


	public void setCantEjes(Integer cantEjes) {
		this.cantEjes = cantEjes;
	}


	public Integer getTara() {
		return tara;
	}


	public void setTara(Integer tara) {
		this.tara = tara;
	}
	
	
	
	public Integer getTonCargadas() {
		return tonCargadas;
	}


	public void setTonCargadas(Integer tonCargadas) {
		this.tonCargadas = tonCargadas;
	}


	/**
	 * Simula la carga de toneladas a 
	 * un cami�n.
	 * Veririfca que la caga no exeda 
	 * la tara del cami�n.
	 */
	public void cargar(Integer tonACargar) {
//		if (tonACargar >= this.getTara()) {
		if (tonACargar.intValue() >= this.getTara().intValue()) {
			System.out.println("No puede cargar m�s toneladas de su tara m�xima");
		} else {
			this.tonCargadas = tonACargar;
			System.out.println("Se carg� exitosamente el cami�n con " + tonACargar + " toneladas");
			System.out.println("Quedan " + (this.getTara() - tonACargar) + " toneladas disponibles para cargar");
		}
	}
	
	public void descargar() {
		//TODO: ssanchez
	}	
	
}
