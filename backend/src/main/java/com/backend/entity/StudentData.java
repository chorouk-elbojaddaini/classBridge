package com.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StudentData {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @OneToOne
    @JoinColumn(name = "student_id")
    private User user;

    private Integer note;

    @Column(name = "join_code")
    private String codeJoinClass;

}
