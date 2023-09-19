package com.backend.model;

import com.backend.entity.Classe;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseModel {


    private String courseName;

    private String description;

    private String filePath;

    private Classe classe;
}
