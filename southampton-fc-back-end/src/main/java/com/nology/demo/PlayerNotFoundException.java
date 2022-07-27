package com.nology.demo;

import javax.persistence.EntityNotFoundException;

public class PlayerNotFoundException extends EntityNotFoundException {

    public PlayerNotFoundException() {
        super("Player Stats have not been found");
    }

}
