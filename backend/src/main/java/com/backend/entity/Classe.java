package com.backend.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "classe")
public class Classe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_course")
    private Long idClasse;

    private String classeName;

}
