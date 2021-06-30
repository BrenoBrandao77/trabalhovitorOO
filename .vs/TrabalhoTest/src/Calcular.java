public class Calcular {
        private int tempo;
        private Double valor;

    public Calcular(Double valor, int tempo) {
        this.valor =valor;
        this.tempo = tempo;
    }


    public Double simulador() {
        Double total = valor;
        for(int i=0; i<tempo; i++){
            total = total/100*0.5+total;
        }
        return total;
    }
}


