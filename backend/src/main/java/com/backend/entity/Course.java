package com.backend.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_course;

    @Column(name = "course_name")
    private String courseName;


    private String description;

    private Date date;
}
