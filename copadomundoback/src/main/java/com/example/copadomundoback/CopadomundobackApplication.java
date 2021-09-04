package com.example.copadomundoback;

import java.util.TimeZone;

import javax.annotation.PostConstruct;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CopadomundobackApplication {

	public static void main(String[] args) {
		SpringApplication.run(CopadomundobackApplication.class, args);
	}

	@PostConstruct
	void started() {
		TimeZone.setDefault(TimeZone.getTimeZone("GMT-03:00"));
	}

}
