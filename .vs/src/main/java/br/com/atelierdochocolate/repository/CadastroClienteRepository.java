package br.com.atelierdochocolate.repository;
import br.com.atelierdochocolate.model.CadastroCliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CadastroClienteRepository extends JpaRepository<CadastroCliente, Integer> {

    public CadastroCliente findById(long id);
}


