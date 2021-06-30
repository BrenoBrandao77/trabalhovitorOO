package br.com.atelierdochocolate.resource;
import br.com.atelierdochocolate.model.CadastroCliente;
import br.com.atelierdochocolate.model.CadastroFuncionario;
import br.com.atelierdochocolate.repository.CadastroFuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import br.com.atelierdochocolate.repository.CadastroClienteRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.awt.*;
import java.util.List;

@RestController
@RequestMapping(value = "/api/cadastrocliente")

public class CadastroClienteResource {
//Atelierdochocolate

    @Autowired
    private CadastroClienteRepository cadastroClienteRepository;
    private ResponseEntity<CadastroCliente> responseEntity;

    @Autowired
    private CadastroFuncionarioRepository cadastroFuncionarioRepository;
    private ResponseEntity<CadastroFuncionario> responseEntity2;


    @GetMapping("/listar")
    public List <CadastroCliente> listar(){
        return cadastroClienteRepository.findAll();
    }

    @GetMapping("get/{id}")
    public CadastroCliente get(@PathVariable(value = "id") long id){
        return cadastroClienteRepository.findById(id);
    }


    @PostMapping("/incluir")
    public CadastroCliente incluir(@RequestBody CadastroCliente cadastroCliente){
        return cadastroClienteRepository.save(cadastroCliente);
    }

    @PostMapping("/incluirfunc")
    public CadastroFuncionario incluir(@RequestBody CadastroFuncionario cadastroFuncionario){
        return  cadastroFuncionarioRepository.save(cadastroFuncionario);
    }

    @PutMapping("/editar")
    public ResponseEntity<CadastroCliente> editar(@RequestBody CadastroCliente cadastroCliente){
        cadastroCliente = cadastroClienteRepository.save(cadastroCliente);
        return new ResponseEntity<CadastroCliente>(cadastroCliente, HttpStatus.OK);
    }
    @GetMapping("/getTotal")
    public int getTotal(){
        return cadastroClienteRepository.findAll().size();
    }

    @PostMapping("/remover")
    public CadastroCliente remover(@RequestBody CadastroCliente cadastroCliente){
        cadastroClienteRepository.delete(cadastroCliente);
        return cadastroCliente;
    }



}

