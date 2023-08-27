package com.backend.entity;

import jakarta.persistence.*;

@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_course;

    @Column(name = "course_name")
    private String courseName;
}
