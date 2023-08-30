package com.backend.entity;
import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@Entity
@Table(name = "classe")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Classe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_course")
    private Long idClass;

    private String fieldName;


    private String module;

    private String level;

    @Column(name = "class_code")
    private String classCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "teacher_id")
    private User teacher;


}
