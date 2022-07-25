package com.nology.demo;

import javax.persistence.EntityNotFoundException;

public class SouthamptonFcNotFoundException extends EntityNotFoundException {

    public SouthamptonFcNotFoundException() {
        super("Player Stats have not been found");
    }

}
