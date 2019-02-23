insert into houses
(property_name, address, city, state, zip)
values($1, $2, $3, $4, $5);

select *
from houses
where property_name = $1
     and address = $2
     and city = $3
     and state = $4
     and zip = $5