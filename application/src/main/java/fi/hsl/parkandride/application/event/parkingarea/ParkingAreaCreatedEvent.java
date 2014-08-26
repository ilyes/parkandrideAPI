package fi.hsl.parkandride.application.event.parkingarea;

import fi.hsl.parkandride.application.domain.ParkingArea;

public class ParkingAreaCreatedEvent {
    public final ParkingArea parkingArea;

    public ParkingAreaCreatedEvent(ParkingArea parkingArea) {
        this.parkingArea = parkingArea;
    }
}
