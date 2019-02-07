create table ferry(
ferryID serial not null primary key,
ferryName text not null,
parking int not null,
seats int not null,
dockedTime timestamptz NOT NULL DEFAULT now()
);


create table car(
    carID serial not null primary key,
    regNum text not null,
    color text not null,
    passengers int not null,
    boardTime timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE board (
    ferryID int,
    carID int,
    FOREIGN KEY (ferryID) REFERENCES ferry(ferryID),
    FOREIGN KEY (carID) REFERENCES car(carID)

);
