package com.backend.config;


import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
@RequiredArgsConstructor

public class SecurityConfiguration{

    private final JWTAuthenticationFilter jwtAuthFilter;

    private final AuthenticationProvider authenticationProvider;

    private static final String[] WHITE_LIST = {
            "/auth",
            "/auth/email/*",
            "/auth/register",
            "/auth/get/*",
            "/auth/authenticate",
            "/auth/registerStudent",
            "/auth/verifyRegistration*",
            "/auth/resendVerifyToken*",
            "/auth/update/*",
            "/classe/*",
            "/add",
            "/classe*",
            "/etudiants*",
            "/etudiants/get",
            "/etudiants/get/*",
            "/etudiants/add",
            "/etudiants/delete",
            "/etudiants/updateNote/**",
            "/events",
            "/events*",
            "/courses*",
            "/courses/*",
            "/courses",
            "/conversation/add",
            "/conversation/teacher/*",
            "/message/add",
            "/conversation/*/messages",
            "/conversation/student/*"
    };
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
         http
                 .cors(cors -> cors.disable())
                 .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(WHITE_LIST)
                        .permitAll()
                        .anyRequest()
                        .authenticated()

                )

                .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider)
               .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();

    }

}
