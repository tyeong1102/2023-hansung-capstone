package com.passionroad.passionroad.studyroom.service;

import io.openvidu.java.client.OpenVidu;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenViduService {

    @Value("${openvidu.url}")
    private String openViduUrl;

    @Value("${openvidu.secret}")
    private String openViduSecret;

    @Bean
    public OpenVidu openVidu() {
        return new OpenVidu(openViduUrl, openViduSecret);
    }
}
