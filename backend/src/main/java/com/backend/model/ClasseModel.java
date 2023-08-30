package com.backend.model;

import com.backend.entity.User;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClasseModel {
    private String fieldName;


    private String module;

    private String level;

    @Column(name = "class_code")
    private String classCode;


    private User teacher;
}
