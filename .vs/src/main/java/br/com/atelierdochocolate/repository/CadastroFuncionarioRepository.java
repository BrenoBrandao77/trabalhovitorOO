package br.com.atelierdochocolate.repository;
import br.com.atelierdochocolate.model.CadastroFuncionario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CadastroFuncionarioRepository extends JpaRepository<CadastroFuncionario, Integer> {

   public CadastroFuncionario findById(long cpf);
}


