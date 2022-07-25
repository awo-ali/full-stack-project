package com.nology.demo;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class SouthamptonFc {
@Id
@GeneratedValue(generator = "system-uuid")
@GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;
    private String name;
    private String position;
    private String nationality;
    private String dateOfBirth;
    private String height;
    private String appearances;
    private String goals;
    private String assists;

    public SouthamptonFc() {
    }

    public SouthamptonFc(String id, String name, String position, String nationality, String dateOfBirth, String height, String appearances, String goals, String assists) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.nationality = nationality;
        this.dateOfBirth = dateOfBirth;
        this.height = height;
        this.appearances = appearances;
        this.goals = goals;
        this.assists = assists;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getAppearances() {
        return appearances;
    }

    public void setAppearances(String appearances) {
        this.appearances = appearances;
    }

    public String getGoals() {
        return goals;
    }

    public void setGoals(String goals) {
        this.goals = goals;
    }

    public String getAssists() {
        return assists;
    }

    public void setAssists(String assists) {
        this.assists = assists;
    }
}
