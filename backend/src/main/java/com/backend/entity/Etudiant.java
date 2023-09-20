package com.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.sql.results.graph.Fetch;

@Data
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "etudiant")
public class Etudiant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "student_id")
    private User user;

    private Integer note;

    @Column(name = "class_code")
    private String classCode;
}
