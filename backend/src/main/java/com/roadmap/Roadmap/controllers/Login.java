package com.roadmap.Roadmap.controllers;

import java.util.Map;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties.System;
import org.springframework.boot.actuate.web.exchanges.HttpExchange.Principal;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Login {
    public class PrincipalObject {
        private String username;
        private String email;
    }

    @Value("${frontend.url}")
    private String frontendUrl;

    @GetMapping("/login")
    public String login() {
        return "Login";
    }

    @GetMapping("/getAuth")
    public String getAuth(Principal principal) {
        String x = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        return x;
    }

}
