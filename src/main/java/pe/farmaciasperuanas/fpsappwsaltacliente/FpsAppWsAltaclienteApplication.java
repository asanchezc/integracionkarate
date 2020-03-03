package pe.farmaciasperuanas.fpsappwsaltacliente;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class FpsAppWsAltaclienteApplication {
	
    public static void main(String[] args) {
		run(args);
    }
	
	public static ConfigurableApplicationContext run(String[] args) {
		return SpringApplication.run(FpsAppWsAltaclienteApplication.class, args);
	}

}
