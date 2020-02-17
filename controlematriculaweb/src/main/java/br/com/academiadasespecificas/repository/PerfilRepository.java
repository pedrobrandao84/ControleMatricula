package br.com.academiadasespecificas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.academiadasespecificas.domain.Perfil;

@Repository
public interface PerfilRepository extends JpaRepository<Perfil, Long> {

}
