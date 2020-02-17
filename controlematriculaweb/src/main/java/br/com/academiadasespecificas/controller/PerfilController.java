package br.com.academiadasespecificas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.academiadasespecificas.domain.Perfil;
import br.com.academiadasespecificas.repository.PerfilRepository;

@RestController
@RequestMapping("/api/v1")
public class PerfilController {

	@Autowired
	PerfilRepository perfilRepository;

	@GetMapping("/perfil")
	public List<Perfil> listar() {

		List<Perfil> perfis = perfilRepository.findAll();

		return perfis;
	}

}
