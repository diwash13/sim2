update houses
set property_name = $2,
    address = $3,
    city = $4,
    state = $5,
    zip = $5
where id = $1;

select *
from houses
order by id asc