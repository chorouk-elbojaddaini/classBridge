package com.backend.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class UserDTO {


    private String firstName;

    private String lastName;

    private String email;


}
