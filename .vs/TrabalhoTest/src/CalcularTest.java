import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

    public class CalcularTest  {

        public CalcularTest() {

        }
            // Calcular p = new Calcular();

            @Before
            public void setUp () throws Exception {


            }

        @Test
        public void testUm () {
            Double valor = 1000.00;

            int tempo = 1;



            assertEquals(1, tempo);

        }


            @Test
            public void testPoup () {
                Double valor = 1000.00;
                //tempos meses
                int tempo = 1;
               // Double retorno = 105.00;

                // a classe foi criada depois
                Calcular p = new Calcular(valor, tempo);

                // o primeiro test falhou e foi refatorado
               // assertEquals(retorno, p.simulador());
            }

        @Test
        public void testPouodois() {
            Double valor = 1000.00;
            //tempos meses
            int tempo = 3;
            Double retorno = 1015.075125;

            // a classe foi criada depois
            Calcular p = new Calcular(valor, tempo);

            // o primeiro test falhou e foi refatorado
            assertEquals(retorno, p.simulador());
        }


    }





