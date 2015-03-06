alter table publicsiteswgs84 alter column latitude numeric(20,15);
alter table publicsiteswgs84 add column longitude numeric(20,15);

update publicsiteswgs84

select st_x(geom) longitude
from publicsiteswgs84


delete from locations<
create table 

insert into locations  
select gid id, address, st_y(geom) latitude, st_x(geom) longitude, 
phone, site_type, site_name, city, zipcode, current_timestamp created_at, current_timestamp updated_at
from publicsiteswgs84


