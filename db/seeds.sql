create table houses(
    id serial primary key not null,
    property_name  varchar(200),
    address varchar(200),
    city varchar(50),
    state varchar(3),
    zip varchar(5)
);

insert into houses
(property_name, address, city, state, zip)
values('Lafayette Square', '900 Downtowner Blvd', 'Mobile', 'Al', '36609' ),
      ('Hamro Ghar', '482 Ferry St', 'Everett', 'MA', '02149')

